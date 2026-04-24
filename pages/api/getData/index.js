const { getFaunaClient, q } = require("./faunaClient");
module.exports = async (req, res) => {
  const { client, error } = getFaunaClient();

  if (error) {
    return res.status(500).json({ error });
  }

  try {
    const dbs = await client.query(
      q.Map(
        q.Paginate(q.Documents(q.Collection("todos"))),
        q.Lambda("doc", q.Get(q.Var("doc")))
      )
    );

    res.status(200).json(dbs.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};