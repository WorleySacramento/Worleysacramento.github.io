const { Ref } = require("faunadb");
const faunadb = require("faunadb");
const secret = 'fnacapi_omd2ZXJzaW9uAWdwYXlsb2FkWFiiYmlkcjM4NjY3ODc3MjQ1MzA4MTY2NmZzZWNyZXR4OGhPRHpMU1BaY2d0TmR6WnBGcU5IY0VmWTBOOVZSb1gvVGlvK0E2T3hEM0ora21Oa0t4S1NjQT09';
const q = faunadb.query;
const client = new faunadb.Client({
    secret,
    domain: "db.fauna.com",
});
module.exports = async (req, res) => {
    try {
        const dbs = await client.query(
            q.Map(
                q.Paginate(q.Documents(q.Collection("todos"))),
                q.Lambda("doc", q.Get(q.Var("doc")))
            )
        );

        res.status(200).json(dbs.data);
        console.log(dbs.data), 'Aqtui';
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};