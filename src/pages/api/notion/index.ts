import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function NotionAPI(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method, body } = req;

  if (method === "POST") {
    try {
      const response = await axios.post(
        "https://api.notion.com/v1/databases",
        body,
        {
          headers: {
            Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
            "Notion-Version": "2021-08-16",
          },
        },
      );

      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json(error);
    }
  } 
}
