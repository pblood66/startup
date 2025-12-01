const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const DB = require('./database.js')
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const {performance} = require('perf_hooks');
const { peerProxy } = require('./peerProxy.js');

const port = process.argv.length > 2 ? process.argv[2] : 3000;
const authCookieName = 'token';

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
    await DB.updateUser(user);
    setAuthCookie(res, user.authToken);
    res.send({ username: user.username });
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

apiRouter.delete('/auth/logout', async (req, res) => {
  const user = await findUser('authToken', req.cookies[authCookieName]);
  if (user) {
    user.authToken = "";
    DB.updateUser(user);
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

apiRouter.get('/scores', async (_req, res) => {
  console.log("Test Scores")
  const scores = await DB.getHighScores();
  res.send(scores);
});

apiRouter.post('/score', verifyAuth, (req, res) => {
  const scores = updateScores(req.body);
  res.send(scores);
});

async function updateScores(newScore) {
  await DB.addScore(newScore);
  return DB.getHighScores();
}

async function createUser(username, password) {
  const hash = await bcrypt.hash(password, 10);
  const user = {
    username,
    password: hash,
    authToken: uuid.v4(),
  };
  DB.addUser(user);
  return user;
}

async function findUser(field, value) {
  if (!value) return null;

  if (field === 'authToken') {
    return DB.getUserByToken(value);
  }
  return DB.getUser(value);
}

function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    maxAge: 1000 * 60 * 60 * 24 * 365,
    secure: true,
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

const httpService = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

peerProxy(httpService);