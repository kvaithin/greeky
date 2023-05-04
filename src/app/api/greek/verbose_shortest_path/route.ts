import session from "@/utils/connection";
import {extractParams, headers, VERBOSE_SHORTEST_PATH_QUERY} from "@/utils/query";

export const GET = async (request: Request) => {
  const { name1, name2 } = extractParams(request);
  const query = VERBOSE_SHORTEST_PATH_QUERY(name1, name2);

  try {
    const result = await session.run(query);
    const nodes = result.records.map((n) => n.get('nodes'));
    const relationships = result.records.map((n) => n.get('relationships'));
    const nodeProperties = nodes.flat(2).map((n) => n.properties);
    const nodeIds = nodeProperties.map((p) => p.name);
    const nodeRelationships = relationships.flat(2).map((n) => n.type);

    const nodesOutput = nodeIds.map((id) => ({ id }));
    const linksOutput = nodeRelationships.map((type, i) => ({ source: nodeIds[i], target: nodeIds[i + 1] }));

    const output = {
      nodes: nodesOutput,
      links: linksOutput,
    };

    return new Response(JSON.stringify(output), headers);
  } catch (error) {
    return new Response('Error retrieving verbose shortest path', { status: 500 });
  }
};
