import { Item } from "../types";

const ITEMS: Item[] = [
  {
    id: "99b7d2d9-e80f-4ffe-9487-5681d6e40b1f",
    name: "Item 1",
    price: 100,
    description: "This is item 1",
  },
  {
    id: "fa7b531b-1097-4483-913d-64eae4695314",
    name: "Item 2",
    price: 200,
    description: "This is item 2",
  },
  {
    id: "dae7102d-2b6a-4521-bfe7-59a3aefa1522",
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
