export interface User {
  id: number;
  email: string;
  name: string;
  status?: "Happy" | "Sad";
  phoneNumbers: string[];
}

export type Item = {
  id: string;
  name: string;
  price: number;
  description: string;
};

export type OrderItem = {
  item: Item;
  quantity: number;
};

export type OrderRequest = {
  items: OrderItem[];
  total: number;
};

export type Order = {
  id: string;
  items: OrderItem[];
  total: number;
};

export interface ErrorResponse {
  message: string;
  code: string;
}

// export class AppErrorResponse extends Error implements ErrorResponse {
//   httpStatusCode: number = 500;
//   code: string;

//   constructor(message: string, code: string, httpStatusCode: number = 500) {
//     super(message);
//     this.code = code;
//     this.httpStatusCode = httpStatusCode;
//   }
// }
