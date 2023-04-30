import neo4j, { Driver, Session } from 'neo4j-driver';
import {
  NEO4J_USERNAME,
  NEO4J_PASSWORD,
} from "@/utils/constants";

const url = 'bolt://localhost:7687';

const driver: Driver = neo4j.driver(
  url, neo4j.auth.basic(NEO4J_USERNAME, NEO4J_PASSWORD),
);

const session: Session = driver.session();

export default session;
