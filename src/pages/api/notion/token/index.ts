import type { NextApiRequest, NextApiResponse } from "next";

export default async function Token(req: NextApiRequest, res: NextApiResponse) {
  const clientId = "faa9345b-b71e-4116-b643-fbc069aeecf8";
  const clientSecret = "secret_7DT114hiVzuUp2E8z4cmRJwlO9oMaHUXhFjbVdLQGDH";
  const redirectUri = "http://localhost:3000/create";

  const {
    method,
    body: { code },
  } = req;

  switch (method) {
    case "POST":
      const encoded = Buffer.from(`${clientId}:${clientSecret}`).toString(
        "base64",
      );

      try {
        const createToken = await fetch(
          "https://api.notion.com/v1/oauth/token",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Basic ${encoded}`,
            },
            body: JSON.stringify({
              grant_type: "authorization_code",
              code,
              redirect_uri: redirectUri,
            }),
          },
        );

        console.log(createToken);

        res.status(200).json(createToken);
      } catch (error) {
        res.status(500).json({ message: error });
      }
      break;

    default:
      break;
  }
}
