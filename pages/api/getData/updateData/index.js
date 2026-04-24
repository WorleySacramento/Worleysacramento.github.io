const { getFaunaClient, q } = require("../faunaClient");

module.exports = async (req, res) => {
  const { client, error } = getFaunaClient();

  if (error) {
    return res.status(500).json({ error });
  }

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