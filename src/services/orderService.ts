import { Order, OrderRequest } from "../types";
import { ItemService } from "./itemService";
import isEqual from "lodash/isEqual";
import crypto from "crypto";

let ORDERS: Order[] = [];

export class OrderService {
  public async create(orderRequest: OrderRequest): Promise<Order> {
    const order: Order = {
      id: crypto.randomUUID(),
      items: [],
      total: 0,
    };

    orderRequest.items.forEach((orderItem) => {
      const orderItemId = orderItem.item.id;
      const item = new ItemService().getById(orderItemId);

      if (!item) {
        throw new Error(`Item ${orderItemId} not found`);
      }

      if (!isEqual(item, orderItem.item)) {
        throw new Error(`Item ${orderItemId} does not match`);
      }

      order.items.push(orderItem);
      order.total += item.price * orderItem.quantity;
    });

    ORDERS.push(order);
    return order;
  }

  public getById(id: string): Order | undefined {
    return ORDERS.find((order) => order.id === id);
  }

  public getAll(): Order[] {
    return ORDERS;
  }
}
