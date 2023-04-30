match (a) -[r] -> () delete a, r;
match (a) delete a;

// Run following command to clear out all data from db from root of this project.
// cat src/scripts/delete_all.cypher | docker exec -i greek-neo4j cypher-shell -u neo4j -p password
