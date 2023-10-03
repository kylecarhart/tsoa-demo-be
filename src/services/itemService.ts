import { Item } from "../types";

const ITEMS: Item[] = [
  {
    id: 1,
    name: "Item 1",
    price: 100,
    description: "This is item 1",
  },
  {
    id: 2,
    name: "Item 2",
    price: 200,
    description: "This is item 2",
  },
  {
    id: 3,
    name: "Item 3",
    price: 300,
    description: "This is item 3",
  },
];

export class ItemService {
  public getById(id: number): Item | undefined {
    return ITEMS.find((item) => item.id === id);
  }

  public getAll(): Item[] {
    return ITEMS;
  }
}
