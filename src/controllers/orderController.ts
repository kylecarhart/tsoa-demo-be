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
import { ErrorResponse, Order, OrderRequest } from "../types";
import {
  INTERNAL_SERVER_ERROR,
  ORDER_NOT_FOUND,
  ORDER_NO_ITEMS,
} from "../utils/errors";

@Route("orders")
@Tags("Orders")
export class OrderController extends Controller {
  @Get("{orderId}")
  public async getOrder(
    @Path() orderId: string,
    @Res() notFoundResponse: TsoaResponse<404, ErrorResponse>
  ): Promise<Order> {
    const order = new OrderService().getById(orderId);

    if (!order) {
      return notFoundResponse(404, ORDER_NOT_FOUND);
    }

    return order;
  }

  @Get()
  public async getAllOrders(): Promise<Order[]> {
    return new OrderService().getAll();
  }

  @Post("/create")
  public async createOrder(
    @Body() orderRequest: OrderRequest,
    @Res() serverErrorResponse: TsoaResponse<500, ErrorResponse>,
    @Res() badRequestResponse: TsoaResponse<400, ErrorResponse>
  ): Promise<Order> {
    if (orderRequest.items.length === 0) {
      return badRequestResponse(400, ORDER_NO_ITEMS);
    }

    const order = await new OrderService().create(orderRequest);

    if (!order) {
      return serverErrorResponse(500, INTERNAL_SERVER_ERROR);
    }

    return order;
  }
}
