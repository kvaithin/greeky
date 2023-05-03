import session from "@/utils/connection";
import { extractParams, headers, nodeQueryBuilder } from "@/utils/query";

export const GET = async (request: Request) => {
  try {
    const result = await session.run(`MATCH (n {name: 'Zeus'})-[r]->(related_node) RETURN n, r, related_node`);
    const mainNode = { id: result?.records[0].get('n')?.properties?.name };
    const otherNodes = result.records.map((record) => ({
      id: record?.get?.('related_node')?.properties?.name,
    }));

    const links = otherNodes.map((n, i) => {
      return { source: mainNode.id, target: n.id };
    });

    const body = JSON.stringify({
      nodes: [mainNode, ...otherNodes],
      links,
    });
    return new Response(body, headers);
  } catch (error) {
    return new Response('Error retrieving verbose nodes and relations', { status: 500 });
  }
};
