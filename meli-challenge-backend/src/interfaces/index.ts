export interface Author {
    name:     string;
    lastname: string;
}

export interface Category {
    id:   string;
    name: string;
}

export interface Item {
    id:            string;
    title:         string;
    price:         Price;
    picture:       string;
    condition:     string;
    free_shipping: boolean;
    sold_quantity: number;
    description:   string;
    adress_state:     string;
}

export interface Price {
    currency: string;
    amount:   number;
    decimals: number;
}

export type ItemDetails = Omit<Item, "adress_state">;
export type ItemResult = Omit<Item, "sold_quantity" | "description">;

export interface ItemDetailsResponse {
    author: Author;
    categories: Category[];
    item:   ItemDetails;
}

export interface ItemsResultsResponse {
    author:     Author;
    categories: Category[];
    items:      ItemResult[];
}