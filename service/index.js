const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');

const port = process.argv.length > 2 ? process.argv[2] : 3000;
const authCookieName = 'token';
const {performance} = require('perf_hooks');
const { start } = require('repl');

let users = [];
let scores = [];

app.use(express.json());
app.use(cookieParser()); 
app.use(express.static('public'));

const apiRouter = express.Router();
app.use('/api', apiRouter);

apiRouter.post('/auth/create', async (req, res) => {
  const startTime = performance.now()
  if (await findUser('username', req.body.username)) {
    res.status(409).send({ msg: 'User is already registered' });
    return;
  }

  const user = await createUser(req.body.username, req.body.password);
  setAuthCookie(res, user.authToken);
  res.send({ username: user.username });
  const endTime = performance.now();
  console.log(`runtime: ${endTime - startTime} ms`)
});

apiRouter.post('/auth/login', async (req, res) => {
  const user = await findUser('username', req.body.username);
  if (user && await bcrypt.compare(req.body.password, user.password)) {
    user.authToken = uuid.v4();
    setAuthCookie(res, user.authToken);
    res.send({ username: user.username });
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

apiRouter.delete('/auth/logout', async (req, res) => {
  const user = await findUser('authToken', req.cookies[authCookieName]);
  if (user) {
    delete user.authToken;
  }

  res.clearCookie(authCookieName);
  res.status(204).end();
});

const verifyAuth = async (req, res, next) => {
  const user = await findUser('authToken', req.cookies[authCookieName]);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
};

apiRouter.get('/scores', (_req, res) => {
  res.send(scores);
});

apiRouter.post('/score', verifyAuth, (req, res) => {
  scores = updateScores(req.body);
  res.send(scores);
});

function updateScores(newScore) {
  let found = false;
  for (const [i, prevScore] of scores.entries()) {
    if (newScore.score > prevScore.score) {
      scores.splice(i, 0, newScore);
      found = true;
      break;
    }
  }

  if (!found) {
    scores.push(newScore);
  }

  if (scores.length > 10) {
    scores.length = 10;
  }

  return scores;
}

async function createUser(username, password) {
  const hash = await bcrypt.hash(password, 10);
  const user = {
    username,
    password: hash,
    authToken: uuid.v4(),
  };
  users.push(user);
  return user;
}

async function findUser(field, value) {
  if (!value) return null;
  return users.find((u) => u[field] === value);
}

function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    maxAge: 1000 * 60 * 60 * 24 * 365,
    secure: false,
    httpOnly: true,
    sameSite: 'strict',
  });
}

app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
