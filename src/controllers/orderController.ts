import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Res,
  Route,
  Tags,
  TsoaResponse,
} from "tsoa";
import { OrderService } from "../services/orderService";
import { Order, OrderRequest } from "../types";

@Route("orders")
@Tags("Orders")
export class OrderController extends Controller {
  @Get("{orderId}")
  public async getOrder(
    @Path() orderId: string,
    @Res() notFoundResponse: TsoaResponse<404, string>
  ): Promise<Order> {
    const order = new OrderService().getById(orderId);

    if (!order) {
      return notFoundResponse(404, "Order not found");
    }

    return order;
  }

  @Get()
  public async getAllOrders(): Promise<Order[]> {
    return new OrderService().getAll();
  }

  @Post()
  public async createOrder(
    @Body() orderRequest: OrderRequest,
    @Res() serverErrorResponse: TsoaResponse<500, string>
  ): Promise<Order> {
    const order = new OrderService().create(orderRequest);

    if (!order) {
      return serverErrorResponse(500, "Internal server error");
    }

    return order;
  }
}
