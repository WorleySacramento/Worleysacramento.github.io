const { getFaunaClient, q } = require("../faunaClient");
module.exports = async (req, res) => {
  const { client, error } = getFaunaClient();

  if (error) {
    return res.status(500).json({ error });
  }

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