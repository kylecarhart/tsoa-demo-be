import("dotenv").then((dotenv) => dotenv.config());
import { app } from "./app";

const port = process.env.PORT || 4000;

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
