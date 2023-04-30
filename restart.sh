#!/bin/zsh

chmod +x "$0"

NEO4J_USERNAME=neo4j
NEO4J_PASSWORD=password

docker ps | grep -q 'greek-neo4j' || {
  echo "Either you have not started docker or not started the greek-neo4j docker container.

  Possible Issues

  **** Docker is not started ****
  Run 'docker ps' in terminal. Does the container name 'greek-neo4j' show up?
  If yes, read the lines below, else start docker first and run this script again.

  **** The neo4j container is not running ****
  Still having issues? Run 'docker-compose up -d'. It should install relevant images and start the container.
  Once completed, run this script again.

  **** Constraint errors ****
  If you get errors on constraints, it is cos you already have added data in the past and trying to delete and recreate again.
  Even though deleted the data, constraints are still there. Will need to delete the constraint via the neo4j UI.
  Ensure the docker container for greek-neo4j is running and go to http://localhost:7474/browser/
  Run the command 'show constraints;' Copy the id. Would be something like: 'constraint_2cfdf134'
  Then run the command: 'DROP CONSTRAINT constraint_2cfdf134'. That would remove the constraint.
  Then run this script again.";

  exit 1;
}

rm src/scripts/input_data.cypher
python3 src/scripts/create_cypher_script.py
docker exec -i greek-neo4j cypher-shell -u $NEO4J_USERNAME -p $NEO4J_PASSWORD < src/scripts/delete_all.cypher
docker exec -i greek-neo4j cypher-shell -u $NEO4J_USERNAME -p $NEO4J_PASSWORD < src/scripts/input_data.cypher
