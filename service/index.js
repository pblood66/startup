const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');

const port = process.argv.length > 2 ? process.argv[2] : 3000;

let users = [];
let scores = [];

app.use(express.json());

let apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.post('/auth/create', async (req, res) => {

  const user = await createServerModuleRunner(req.body.email, req.body.password);
});

async function createUser(email, password) {
  const hash = await bcrypt.hash(password, 16);

  const user = {
    email: email,
    password: hash,
    authToken: uuid.v4(), 
  };

  users.push(user);
  return user;
}


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
