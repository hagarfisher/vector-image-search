import weaviate, { WeaviateClient } from "weaviate-ts-client";

let client: undefined | WeaviateClient;

export async function initialize() {
  if (!client) {
    client = weaviate.client({
      scheme: "http",
      host: "localhost:8080",
    });
  }
  return client;
}
