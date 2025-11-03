const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');

const port = process.argv.length > 2 ? process.argv[2] : 3000;
const authCookieName = 'token';

let users = [];
let scores = [];

app.use(express.json());

let apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.post('/auth/create', async (req, res) => {
  if (await findUser('email', req.body.email)) {
    res.status(409).send({ msg: 'User is already registered with this email' });
    return; 
  }

  const user = await createUser(req.body.username, req.body.password);

  setAuthCookie(res, user.authToken);
  res.send({ username: user.username })
});

apiRouter.post('/auth/login', async (req, res) => {
  const user = await findUser('email', req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      user.authToken = uuid.v4();
      setAuthCookie(res, user.authToken);
      res.send({ username: user.username });
      return;
    }
  }
  res.status(401).send({ msg: 'Unathorized' });
});

apiRouter.delete('auth/logout', async (req, res) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    delete user.token;
  }

  // delete cookie and send a 204 status
  res.clearCookie(authCookieName);
  res.status(204).end()
});


async function createUser(username, password) {
  const hash = await bcrypt.hash(password, 16);

  const user = {
    username: username,
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
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
