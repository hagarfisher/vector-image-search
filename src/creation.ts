import { readdirSync, readFileSync } from "fs";
import { initialize } from "./client";
import { Classes } from "./types";

const vectorizer = "img2vec-neural";

const schemaConfig = {
  class: Classes.TEST,
  vectorizer,
  vectorIndexType: "hnsw",
  moduleConfig: {
    [vectorizer]: {
      imageFields: ["image"],
    },
  },
  properties: [
    { name: "image", dataType: ["blob"] },
    {
      name: "text",
      dataType: ["string"],
    },
  ],
};

export async function createSchema() {
  const client = await initialize();
  // check if schema exists, if it does, do nothing.
  const schemas = await client.schema.getter().do();
  if (
    !schemas.classes?.find(({ class: className }) => className === Classes.TEST)
  ) {
    await client.schema.classCreator().withClass(schemaConfig).do();
  }
}

export async function loadImagesToDb() {
  const client = await initialize();
  const imageFiles = readdirSync("./img");
  await Promise.all(
    imageFiles.map(async (imageFileName) => {
      const imageFile = readFileSync(`./img/${imageFileName}`);
      const b64 = Buffer.from(imageFile).toString("base64");
      await client.data
        .creator()
        .withClassName(Classes.TEST)
        .withProperties({
          image: b64,
          text: Math.random().toString(),
        })
        .do();
    })
  );
}
