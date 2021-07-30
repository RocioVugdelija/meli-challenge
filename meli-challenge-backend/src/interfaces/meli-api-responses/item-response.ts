// I used https://app.quicktype.io/

export interface MeliItemResponse {
    id:                               string;
    site_id:                          string;
    title:                            string;
    subtitle:                         null;
    seller_id:                        number;
    category_id:                      string;
    official_store_id:                number;
    price:                            number;
    base_price:                       number;
    original_price:                   number;
    currency_id:                      string;
    initial_quantity:                 number;
    available_quantity:               number;
    sold_quantity:                    number;
    sale_terms:                       any[];
    buying_mode:                      string;
    listing_type_id:                  string;
    start_time:                       Date;
    stop_time:                        Date;
    condition:                        string;
    permalink:                        string;
    thumbnail_id:                     string;
    thumbnail:                        string;
    secure_thumbnail:                 string;
    pictures:                         Picture[];
    video_id:                         null;
    descriptions:                     any[];
    accepts_mercadopago:              boolean;
    non_mercado_pago_payment_methods: any[];
    shipping:                         Shipping;
    international_delivery_mode:      string;
    seller_address:                   Location;
    seller_contact:                   null;
    location:                         Location;
    coverage_areas:                   any[];
    attributes:                       any[];
    warnings:                         any[];
    listing_source:                   string;
    variations:                       any[];
    status:                           string;
    sub_status:                       any[];
    tags:                             any[];
    warranty:                         string;
    catalog_product_id:               string;
    domain_id:                        string;
    parent_item_id:                   null;
    differential_pricing:             null;
    deal_ids:                         any[];
    automatic_relist:                 boolean;
    date_created:                     Date;
    last_updated:                     Date;
    health:                           null;
    catalog_listing:                  boolean;
    channels:                         any[];
}

export interface Shipping {
    mode:          string;
    free_methods:  FreeMethod[];
    tags:          string[];
    dimensions:    null;
    local_pick_up: boolean;
    free_shipping: boolean;
    logistic_type: string;
    store_pick_up: boolean;
}

export interface FreeMethod {
    id:   number;
    rule: Rule;
}

export interface Rule {
    default:            boolean;
    free_mode:          string;
    free_shipping_flag: boolean;
    value:              null;
}

export interface Pictures {
    pictures: Picture[];
}

export interface Picture {
    id:         string;
    url:        string;
    secure_url: string;
    size:       string;
    max_size:   string;
    quality:    string;
}