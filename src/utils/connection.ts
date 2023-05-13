import neo4j, { Driver, Session } from "neo4j-driver";
import {
  NEO4J_USERNAME,
  NEO4J_PASSWORD,
  NEO4J_INSTANCE_ID,
} from "@/utils/constants";
import { getNeo4jUrl } from "@/utils/helpers";

const driver: Driver = neo4j.driver(
  getNeo4jUrl(),
  neo4j.auth.basic(NEO4J_USERNAME, NEO4J_PASSWORD)
);

const session: Session = driver.session();

export default session;
