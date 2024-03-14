const { Ref } = require("faunadb");
const faunadb = require("faunadb");
const secret = process.env.FAUNADB_SECRET || require("../index").FAUNADB_SECRET;
const q = faunadb.query;
const client = new faunadb.Client({ secret });

module.exports = async (req, res) => {
  const id = req.body.id;
  const inputData = req.body.data;
  try {
    const dbs = await client.query(
      q.Update(q.Ref(q.Collection("todos"), id), {
        data: { done: inputData.done },
      })
    );
    res.status(200).json(dbs.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};