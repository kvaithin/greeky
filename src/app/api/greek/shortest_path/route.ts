import session from "@/utils/connection";
import { extractParams, headers, SHORTEST_PATH_QUERY } from "@/utils/query";

type Node = {
  properties: string;
};

export const GET = async (request: Request) => {
  const { name1, name2 } = extractParams(request);
  const query = SHORTEST_PATH_QUERY(name1, name2);
  try {
    const result = await session.run(query);
    const nodes = result.records[0].get("nodes");
    const body = JSON.stringify(nodes.map((node: Node) => node.properties));
    return new Response(body, headers);
  } catch (error) {
    return new Response("Error retrieving shortest path", { status: 500 });
  }
};
