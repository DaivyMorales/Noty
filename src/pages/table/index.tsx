import { env } from "@/env";
import { Client } from "@notionhq/client";
import { useEffect } from "react";

export default function Table({ results }: any) {
  useEffect(() => {
    console.log(results);
  }, []);

  return (
    <div>
      <h2>Table</h2>

      <div>
        {results.map((employee: any) => (
          <div key={employee.id}>
            <p>{employee.properties.Name.title[0].plain_text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const notion = new Client({
    auth: env.NOTION_API_KEY,
  });

  const databaseId = "ab2f918c636645cca568ef16dc2f522f";

  const response = await notion.databases.query({
    database_id: databaseId,
  });
  console.log(response);

  return {
    props: {
      results: response.results,
    },
  };
}
