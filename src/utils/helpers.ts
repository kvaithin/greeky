import {ENV, NEO4J_INSTANCE_ID} from "@/utils/constants";

export const upperFirst = (str?: string) => {
  const words = str?.split(" ");
  const formattedWords: string[] = [];
  words?.forEach(item => {
    const word = item?.toLowerCase?.();
    const formattedWord = word?.charAt(0)?.toUpperCase?.() + word?.slice?.(1);
    if (formattedWord) {
      formattedWords.push(formattedWord);
    }
  });
  return formattedWords.join(" ");
};

export const getNeo4jUrl = () => {
  if (ENV === 'PRODUCTION') return `neo4j+s://${NEO4J_INSTANCE_ID}.databases.neo4j.io`; // aura db
  return 'bolt://localhost:7687'; // local docker instance
}
