import { Item } from "../types";

const ITEMS: Item[] = [
  {
    id: "99b7d2d9-e80f-4ffe-9487-5681d6e40b1f",
    name: "Burger",
    price: 4.99,
    description:
      "This burger is made with 100% beef, lettuce, tomato, and onion and pickles.",
  },
  {
    id: "fa7b531b-1097-4483-913d-64eae4695314",
    name: "Fries",
    price: 2.99,
    description: "These fries are made from the finest potatoes in the world.",
  },
  {
    id: "dae7102d-2b6a-4521-bfe7-59a3aefa1522",
    name: "Milkshake",
    price: 4.99,
    description:
      "Hand-spun milkshake with your choice of chocolate or vanilla.",
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
