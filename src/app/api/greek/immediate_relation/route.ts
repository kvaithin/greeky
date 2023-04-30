import session from "@/utils/connection";
import {extractParams, headers, IMMEDIATE_RELATION_QUERY} from "@/utils/query";

export const GET = async (request: Request) => {
  const { name, relations } = extractParams(request);
  const query = IMMEDIATE_RELATION_QUERY(name, relations);
  try {
    const result = await session.run(query);
    const nodes = result.records.map(record => {
      const node = record.get('related_node');
      return node.properties;
    });
    const body = JSON.stringify(nodes);
    return new Response(body, headers);
  } catch (error) {
    return new Response('Error retrieving relations', { status: 500 });
  }
};
