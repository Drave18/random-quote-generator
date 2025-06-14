export default async function handler(req, res) {
  const API_KEY = process.env.API_NINJAS_KEY;

  const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
    headers: {
      "X-Api-Key": API_KEY,
    },
  });

  if (!response.ok) {
    return res.status(response.status).json({ error: "Failed to fetch quote" });
  }

  const data = await response.json();
  res.status(200).json(data);
}
