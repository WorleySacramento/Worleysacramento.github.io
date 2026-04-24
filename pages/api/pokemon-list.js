export default async function handler(req, res) {
  const limit = parseInt(req.query.limit || "20", 10);
  const offset = parseInt(req.query.offset || "0", 10);

  if (limit < 1 || offset < 0) {
    return res.status(400).json({ error: "Parâmetros inválidos." });
  }

  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );

    if (!response.ok) {
      return res.status(response.status).json({ error: "Falha ao consultar API externa." });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(502).json({ error: "Erro de integração com Pokemon API." });
  }
}
