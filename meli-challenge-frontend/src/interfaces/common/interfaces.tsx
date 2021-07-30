export interface Author {
    name:     string;
    lastname: string;
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
    adress_state:  string;
}

export interface Price {
    currency: string;
    amount:   number;
    decimals: number;
}
