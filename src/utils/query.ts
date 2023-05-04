export const headers = {
  headers: {
    'Content-Type': 'application/json'
  }
};

export const FIND_NODES_QUERY = 'MATCH (gods) [WHERE] RETURN gods [LIMIT]';
export const SEARCH_QUERY = (s: string | null) => `MATCH (n) WHERE toLower(n.name) CONTAINS toLower('${s}') RETURN n;`;
export const CREATE_QUERY = ({ name, alias, gender }: NodeParams) =>
  `CREATE (:GOD { name: '${name}', alias: '${alias}', gender: '${gender}' })`;
export const UPDATE_QUERY = (name: string, propertiesToUpdate: NodeParams) => {
  let query = `MATCH (n:GOD {name: '${name}'})`;
  if (propertiesToUpdate) {
    let setClauses = [];
    for (let [key, value] of Object.entries(propertiesToUpdate)) {
      if (value && key !== 'name') {
        setClauses.push(`n.${key} = '${value}'`);
      }
    }
    query += ` SET ${setClauses.join(", ")}`;
  }
  return query;
}
export const DELETE_QUERY = (name: string | null) => `MATCH (g:GOD { name: '${name}' }) DELETE g`;
export const VERBOSE_RELATION_QUERY = (name: string | null) => `MATCH (g:GOD { name: '${name}' }) DELETE g`;
export const IMMEDIATE_RELATION_QUERY =
  (name: string | null, relations: string[] | undefined) => {
    const defaultQuery = `MATCH (n {name: '${name}'})-[]->(related_node) RETURN related_node`;
    const query = relations
      ?.map(relation => `MATCH (n {name: '${name}'})-[${getRelation(relation)}]->(related_node) RETURN related_node`)
      .join(' UNION ');
    return query || defaultQuery;
  };
export const SHORTEST_PATH_QUERY = (name1: string | null, name2: string | null) => `
  MATCH (n1 { name: '${name1}' }), (n2 { name: '${name2}' })
  MATCH path = shortestPath((n1)-[*]-(n2))
  RETURN nodes(path) as nodes
`;

export const VERBOSE_SHORTEST_PATH_QUERY = (name1: string | null, name2: string | null) =>
  `MATCH (n1 { name: '${name1}' }), (n2 { name: '${name2}' })
  MATCH path = shortestPath((n1)-[*]-(n2))
  RETURN nodes(path) as nodes, relationships(path) as relationships`;

export const nodeQueryBuilder = (params: NodeParams, limit: string | null) => {
  let { alias, gender, group, name} = params;
  const q = `MATCH (gods) [WHERE] RETURN gods [LIMIT]`;

  const conditions: string[] = [];
  if (group) {
    conditions.push(`gods.${group}='true'`);
  }
  if (name) {
    conditions.push(`gods.name='${name}'`);
  }
  if (alias) {
    conditions.push(`gods.alias='${alias}'`);
  }
  if (gender) {
    conditions.push(`gods.gender='${gender}'`);
  }

  const w = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';
  const l = limit ? `LIMIT ${limit}` : '';
  return FIND_NODES_QUERY
    .replace('[WHERE]', w)
    .replace('[LIMIT]', l);
};

export const extractParams = (request: Request) => {
  const { searchParams } = new URL(request.url);
  const s = searchParams.get('s');
  const limit = searchParams.get('limit');
  const group = searchParams.get('group');
  const name = searchParams.get('name');
  const alias = searchParams.get('alias');
  const gender = searchParams.get('gender');
  const relation = searchParams.get('relations');
  const relations = relation?.split(',');
  const name1 = searchParams.get('name1');
  const name2 = searchParams.get('name2');
  return {
    s,
    limit,
    group,
    name,
    alias,
    gender,
    relations,
    name1,
    name2,
  };
};

export const getRelation = (relation: string | null) => {
  if (relation === 'procreated_with') return ':PROCREATED_WITH';
  if (relation === 'descendant_of') return ':DESCENDANT_OF';
  if (relation === 'ancestor_of') return ':ANCESTOR_OF';
  return '';
};
