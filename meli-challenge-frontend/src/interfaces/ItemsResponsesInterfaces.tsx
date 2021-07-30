import { Author, Item } from "./common/interfaces";

export type ItemDetails = Omit<Item, "adress_state">;
export type ItemResult = Omit<Item, "sold_quantity" | "description">;

export interface ItemDetailsResponse {
    author: Author;
    categories: string[];
    item:   ItemDetails;
}

export interface ItemsResultsResponse {
    author:     Author;
    categories: string[];
    items:      ItemResult[];
}