import { Item } from "../types";
import crypto from "crypto";

const ITEMS: Item[] = [
  {
    id: crypto.randomUUID(),
    name: "Item 1",
    price: 100,
    description: "This is item 1",
  },
  {
    id: crypto.randomUUID(),
    name: "Item 2",
    price: 200,
    description: "This is item 2",
  },
  {
    id: crypto.randomUUID(),
    name: "Item 3",
    price: 300,
    description: "This is item 3",
  },
];

export class ItemService {
  public getById(id: string): Item | undefined {
    return ITEMS.find((item) => item.id === id);
  }

  public getAll(): Item[] {
    return ITEMS;
  }
}
