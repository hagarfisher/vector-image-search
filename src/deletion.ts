import { initialize } from "./client";
import { Classes } from "./types";

export async function cleanup() {
  const client = await initialize();
  await client.schema.classDeleter().withClassName(Classes.TEST).do();
}
