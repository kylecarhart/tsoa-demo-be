// src/app.ts
import express, {
  Response as ExResponse,
  Request as ExRequest,
  urlencoded,
  json,
} from "express";
import swaggerUi from "swagger-ui-express";
import { RegisterRoutes } from "./tsoa/routes";
import { errorMiddleware } from "./middleware/errorMiddleware";
import { notFoundMiddleware } from "./middleware/notFoundMiddleware";
import cors from "cors";

export const app = express();

// Use body parser to read sent json payloads
app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());
app.use(cors());

RegisterRoutes(app);

app.use("/docs", swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
  return res.send(swaggerUi.generateHTML(await import("./tsoa/swagger.json")));
});

/* Error handling middlewares below here */
app.use(notFoundMiddleware);
app.use(errorMiddleware);
