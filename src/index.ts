import { createSchema, loadImagesToDb } from "./creation";
import { cleanup } from "./deletion";
import { search } from "./search";

const TEST_FILE_NAME = "test.png";

createSchema()
  .then(loadImagesToDb)
  .then(() => search(TEST_FILE_NAME))
  .then(cleanup);
