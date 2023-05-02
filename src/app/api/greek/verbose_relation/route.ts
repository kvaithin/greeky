import session from "@/utils/connection";
import { extractParams, headers, nodeQueryBuilder } from "@/utils/query";

export const GET = async (request: Request) => {
  try {
    const result = await session.run(`MATCH (n {name: 'Zeus'})-[r]->(related_node) RETURN n, r, related_node`);
    const node = result?.records?.[0]?.get?.('n')?.properties;
    const edges = result.records.map((record) => {
      return {
        edge: record?.get?.('r')?.type,
        node: record?.get?.('related_node')?.properties,
      };
    });

    const body = JSON.stringify({
      node,
      edges,
    });
    return new Response(body, headers);
  } catch (error) {
    return new Response('Error retrieving verbose nodes and relations', { status: 500 });
  }
};
