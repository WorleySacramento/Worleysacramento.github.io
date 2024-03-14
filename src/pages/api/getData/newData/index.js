const { Ref } = require("faunadb");
const faunadb = require("faunadb");
const secret = require("../index")
const q = faunadb.query;
const client = new faunadb.Client({ secret });
module.exports = async (req, res) => {
  const inputData = req.body.data;
  try {
    const dbs = await client.query(
      q.Create(q.Collection("todos"), {
        data: {
          task: inputData.newTodo,
          done: false,
        },
      })
    );
    res.status(200).json(dbs.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};