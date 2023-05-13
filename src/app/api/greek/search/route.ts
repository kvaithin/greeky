import session from "@/utils/connection";
import { extractParams, headers, SEARCH_QUERY } from "@/utils/query";

type Node = {
  name: string;
};

export const GET = async (request: Request) => {
  const { s } = extractParams(request);
  const query = SEARCH_QUERY(s);
  try {
    const result = await session.run(query);
    const nodes = result.records.map((record) => record.get("n")?.properties);
    const body = JSON.stringify(nodes.map((node: Node) => node.name));
    return new Response(body, headers);
  } catch (error) {
    return new Response("Error retrieving search data", { status: 500 });
  }
};
