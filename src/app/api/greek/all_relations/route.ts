import session from "@/utils/connection";
import { GET_ALL_RELATIONS_TYPES_QUERY, headers } from "@/utils/query";

export const GET = async (request: Request) => {
  try {
    const result = await session.run(GET_ALL_RELATIONS_TYPES_QUERY);
    const relations = result?.records?.[0]?.get("relations");
    const body = JSON.stringify(relations);
    return new Response(body, headers);
  } catch (error) {
    return new Response("Error retrieving all relation types", { status: 500 });
  }
};
