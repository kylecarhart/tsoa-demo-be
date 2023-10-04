import {
  Request as ExRequest,
  Response as ExResponse,
  NextFunction,
} from "express";
import { ValidateError } from "tsoa";

export function errorMiddleware(
  err: unknown,
  req: ExRequest,
  res: ExResponse,
  next: NextFunction
): ExResponse | void {
  if (err instanceof ValidateError) {
    console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
    return res.status(422).json({
      message: "Validation Failed",
      details: err?.fields,
    });
  }

  /* Just an idea */
  // if (err instanceof AppErrorResponse) {
  //   return res.status(err.httpStatusCode).json({
  //     message: err.message,
  //     code: err.code,
  //   });
  // }

  if (err instanceof Error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }

  next();
}
