import { ErrorResponse } from "../types";

/**
 * Generic
 */
export const INTERNAL_SERVER_ERROR: ErrorResponse = {
  code: "INTERNAL_SERVER_ERROR",
  message: "Internal server error.",
};

/**
 * Order
 */
export const ORDER_NO_ITEMS: ErrorResponse = {
  code: "ORDER_NO_ITEMS",
  message: "Order must contain at least 1 item.",
};

export const ORDER_NOT_FOUND: ErrorResponse = {
  code: "ORDER_NOT_FOUND",
  message: "Order not found.",
};
