import neo4j, { Driver, Session } from 'neo4j-driver';
import {
  NEO4J_USERNAME,
  NEO4J_PASSWORD,
  NEO4J_INSTANCE_ID,
  NEO4J_INSTANCE_NAME,
} from "@/utils/constants";

// const url = 'bolt://localhost:7687';
const url = `neo4j+s://${NEO4J_INSTANCE_ID}.databases.neo4j.io`;

const driver: Driver = neo4j.driver(
  url, neo4j.auth.basic(NEO4J_USERNAME, NEO4J_PASSWORD),
);

const session: Session = driver.session();

export default session;
