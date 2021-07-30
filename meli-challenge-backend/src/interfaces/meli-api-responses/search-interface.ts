// I used https://app.quicktype.io/

export interface MeliSearchResponse {
    site_id:                   string;
    country_default_time_zone: string;
    query:                     string;
    paging:                    Paging;
    results:                   Result[];
    secondary_results:         any[];
    related_results:           any[];
    sort:                      Sort;
    available_sorts:           Sort[];
    filters:                   Filter[];
    available_filters:         Filter[];
}
export interface Filter {
    id:     string;
    name:   string;
    type:   string;
    values: FilterValues[];
}

export interface FilterValues {
    id:      string;
    name:    string;
    results: number;
}

export interface Result {
    id:                  string;
    site_id:             string;
    title:               string;
    seller:              Seller;
    price:               number;
    prices:              Prices;
    sale_price:          null;
    currency_id:         string;
    available_quantity:  number;
    sold_quantity:       number;
    buying_mode:         string;
    listing_type_id:     string;
    stop_time:           Date;
    condition:           string;
    permalink:           string;
    thumbnail:           string;
    thumbnail_id:        string;
    accepts_mercadopago: boolean;
    installments:        Installments;
    address:             Address;
    shipping:            Shipping;
    seller_address:      SellerAddress;
    attributes:          Attribute[];
    original_price:      number;
    category_id:         string;
    official_store_id:   number;
    domain_id:           string;
    catalog_product_id:  string;
    tags:                any[];
    catalog_listing:     boolean;
    use_thumbnail_id:    boolean;
    order_backend:       number;
}

export interface Address {
    state_id:   string;
    state_name: string;
    city_id:    null;
    city_name:  string;
}

export interface Attribute {
    attribute_group_id:   string;
    name:                 string;
    value_name:           string;
    value_struct:         null;
    attribute_group_name: string;
    source:               number;
    id:                   string;
    value_id:             string;
    values:               any[];
}

export interface Installments {
    quantity:    number;
    amount:      number;
    rate:        number;
    currency_id: string;
}

export interface Prices {
    id:                    string;
    prices:                any[];
    presentation:          Presentation;
    payment_method_prices: any[];
    reference_prices:      any[];
    purchase_discounts:    any[];
}

export interface Presentation {
}

export interface Seller {
    id:                 number;
    permalink:          string;
    registration_date:  Date;
    car_dealer:         boolean;
    real_estate_agency: boolean;
    tags:               any[];
    seller_reputation:  SellerReputation;
}

export interface SellerReputation {
    transactions:        Transactions;
    power_seller_status: string;
    metrics:             Metrics;
    level_id:            string;
}

export interface Metrics {
    claims:                Cancellations;
    delayed_handling_time: Cancellations;
    sales:                 Sales;
    cancellations:         Cancellations;
}

export interface Cancellations {
    rate:   number;
    value:  number;
    period: string;
}

export interface Sales {
    period:    string;
    completed: number;
}

export interface Transactions {
    total:     number;
    canceled:  number;
    period:    string;
    ratings:   Presentation;
    completed: number;
}

export interface SellerAddress {
    id:           string;
    comment:      string;
    address_line: string;
    zip_code:     string;
    country:      Presentation;
    state:        Presentation;
    city:         Presentation;
    latitude:     string;
    longitude:    string;
}

export interface Shipping {
    free_shipping: boolean;
    mode:          string;
    tags:          any[];
    logistic_type: string;
    store_pick_up: boolean;
}

export interface Sort {
    id:   string;
    name: string;
}

export interface Paging {
    total:           number;
    primary_results: number;
    offset:          number;
    limit:           number;
}
