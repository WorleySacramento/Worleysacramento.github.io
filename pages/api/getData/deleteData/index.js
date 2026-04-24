const { getFaunaClient, q } = require("../faunaClient");

module.exports = async (req, res) => {
  const { client, error } = getFaunaClient();

  if (error) {
    return res.status(500).json({ error });
  }

  const id = req.body.id;
  try {
    const dbs = await client.query(
      q.Delete(q.Ref(q.Collection("todos"), id))
    );
    res.status(200).json(dbs.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};