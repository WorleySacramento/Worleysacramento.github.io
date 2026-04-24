export default async function handler(req, res) {
  const page = parseInt(req.query.page || "1", 10);

  if (page < 1) {
    return res.status(400).json({ error: "Página deve ser maior que 0." });
  }

  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );

    if (!response.ok) {
      return res.status(response.status).json({ error: "Falha ao consultar API externa." });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(502).json({ error: "Erro de integração com Rick and Morty API." });
  }
}
