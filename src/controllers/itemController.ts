import { Controller, Get, Path, Res, Route, Tags, TsoaResponse } from "tsoa";
import { ItemService } from "../services/itemService";
import { Item } from "../types";

@Route("items")
@Tags("Items")
export class ItemController extends Controller {
  @Get("{itemId}")
  public async getItem(
    @Path() itemId: number,
    @Res() notFoundResponse: TsoaResponse<404, string>
  ): Promise<Item> {
    const item = new ItemService().getById(itemId);

    if (!item) {
      return notFoundResponse(404, "Item not found");
    }

    return item;
  }

  @Get()
  public async getAllItems(): Promise<Item[]> {
    return new ItemService().getAll();
  }
}
