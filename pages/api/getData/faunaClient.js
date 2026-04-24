const faunadb = require("faunadb");

const q = faunadb.query;

const getFaunaClient = () => {
  const secret = process.env.FAUNADB_SECRET;

  if (!secret) {
    return {
      client: null,
      error:
        "FAUNADB_SECRET nao configurada. Defina a variavel de ambiente antes de usar a API.",
    };
  }

  return {
    client: new faunadb.Client({
      secret,
      domain: "db.fauna.com",
    }),
    error: null,
  };
};

module.exports = { getFaunaClient, q };
