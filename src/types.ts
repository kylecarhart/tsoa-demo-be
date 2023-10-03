export interface User {
  id: number;
  email: string;
  name: string;
  status?: "Happy" | "Sad";
  phoneNumbers: string[];
}

export interface Item {
  id: number;
  name: string;
  price: number;
  description: string;
}
