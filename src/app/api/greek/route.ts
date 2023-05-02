import session from "@/utils/connection";
import {CREATE_QUERY, DELETE_QUERY, extractParams, headers, nodeQueryBuilder, UPDATE_QUERY} from "@/utils/query";

export const GET = async (request: Request) => {
  const { alias, gender, group, limit, name } = extractParams(request);
  const query = nodeQueryBuilder({
    alias,
    gender,
    group,
    name,
  }, limit);

  try {
    const result = await session.run(query);
    const nodes = result.records.map((record) => record.get('gods').properties);
    const body = JSON.stringify(nodes);
    return new Response(body, headers);
  } catch (error) {
    return new Response('Error retrieving nodes', { status: 500 });
  }
};

export const POST = async (request: Request) => {
  const body = await request.json();
  const query = CREATE_QUERY(body);
  try {
    const result = await session.run(query);
    const nodesCreated = result?.summary?.counters.updates()?.nodesCreated;
    return new Response(JSON.stringify({nodesCreated}), { status: 200 });
  } catch (error) {
    return new Response('Error creating node', { status: 500 });
  }
};

export const PUT = async (request: Request) => {
  const body = await request.json();
  const query = UPDATE_QUERY(body.name, body);
  try {
    const result = await session.run(query);
    const propertiesSet = result?.summary?.counters.updates()?.propertiesSet;
    return new Response(JSON.stringify({propertiesSet}), { status: 200 });
  } catch (error) {
    return new Response('Error updating node', { status: 500 });
  }
};

export const DELETE = async (request: Request) => {
  const { name } = extractParams(request);
  const query = DELETE_QUERY(name);
  try {
    const result = await session.run(query);
    const nodesDeleted = result?.summary?.counters.updates()?.nodesDeleted;
    return new Response(JSON.stringify({nodesDeleted}), { status: 200 });
  } catch (error) {
    return new Response('Error deleting node', { status: 500 });
  }
};
