const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('simon');
const userCollection = db.collection('user');
const scoreCollection = db.collection('score');

(async function testConnection() {
  try {
    await db.command({ ping: 1 });
    console.log(`Connect to database`);
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }
})();

function getUser(username) {
    return userCollection.findOne({ username: username });
}

function getUserByToken(token) {
    return userCollection.findOne({ authToken: token });
}

async function addUser(user) {
  console.log("adding User")
    await userCollection.insertOne(user);
}

async function updateUser(user) {
  console.log(`logging user: ${user.username}, ${user.authToken}`)  
  await userCollection.updateOne({ username: user.username }, {$set: user });
}

async function addScore(score) {
  console.log(`Adding Score: ${score}`)
  return scoreCollection.insertOne(score);
}

async function getHighScores() {
  const query = {};
  const options = {
    sort: { score: -1 },
    limit: 10,
  };

  const cursor = scoreCollection.find(query, options);
  const scores = await cursor.toArray();
  console.log('High Scores:', scores);
  return scores;
}

module.exports = {
    getUser,
    getUserByToken,
    addUser,
    updateUser,
    addScore, 
    getHighScores
};