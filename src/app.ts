// src/app.ts
import express, {
  Response as ExResponse,
  Request as ExRequest,
  urlencoded,
  json,
} from "express";
import swaggerUi from "swagger-ui-express";
import { RegisterRoutes } from "./tsoa/routes";

export const app = express();

// Use body parser to read sent json payloads
app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());

RegisterRoutes(app);

app.use("/docs", swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
  return res.send(swaggerUi.generateHTML(await import("./tsoa/swagger.json")));
});
