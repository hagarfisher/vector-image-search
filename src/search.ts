import { readFileSync, writeFileSync } from "fs";
import { initialize } from "./client";
import { Classes } from "./types";

const LIMIT = 4;

export async function search(imageToQueryName: string) {
  const client = await initialize();
  const imageFile = readFileSync(`./${imageToQueryName}`);
  const b64 = Buffer.from(imageFile).toString("base64");
  const foundImages = await client.graphql
    .get()
    .withClassName(Classes.TEST)
    .withFields("image")
    .withNearImage({
      image: b64,
    })
    .withLimit(LIMIT)
    .do();
  const results: string[] = foundImages.data.Get[Classes.TEST].map(
    (foundImage: { image: string }) => foundImage.image
  );
  results.forEach((result, index) => {
    writeFileSync(`./query_results/result_${index}.png`, result, "base64");
  });
}
