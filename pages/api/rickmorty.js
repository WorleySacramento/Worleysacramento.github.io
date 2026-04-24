export default async function handler(req, res) {
  const name = typeof req.query.name === "string" ? req.query.name.trim() : "";

  if (!name) {
    return res.status(400).json({ error: "Parametro 'name' e obrigatorio." });
  }

  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(name)}`
    );

    if (!response.ok) {
      return res.status(response.status).json({ error: "Falha ao consultar API externa." });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(502).json({ error: "Erro de integracao com Rick and Morty API." });
  }
}
