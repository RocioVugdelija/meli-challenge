// I used https://app.quicktype.io/

export interface MeliCategoryResponse {
    id:                           string;
    name:                         string;
    picture:                      string;
    permalink:                    null;
    total_items_in_this_category: number;
    path_from_root:               PathFromRoot[];
    children_categories:          any[];
    attribute_types:              string;
    settings:                     Settings;
    channels_settings:            any[];
    meta_categ_id:                null;
    attributable:                 boolean;
    date_created:                 Date;
}

export interface PathFromRoot {
    id:   string;
    name: string;
}

export interface Settings {
    adult_content:             boolean;
    buying_allowed:            boolean;
    buying_modes:              any[];
    catalog_domain:            string;
    coverage_areas:            string;
    currencies:                any[];
    fragile:                   boolean;
    immediate_payment:         string;
    item_conditions:           any[];
    items_reviews_allowed:     boolean;
    listing_allowed:           boolean;
    max_description_length:    number;
    max_pictures_per_item:     number;
    max_pictures_per_item_var: number;
    max_sub_title_length:      number;
    max_title_length:          number;
    maximum_price:             null;
    maximum_price_currency:    string;
    minimum_price:             number;
    minimum_price_currency:    string;
    mirror_category:           null;
    mirror_master_category:    null;
    mirror_slave_categories:   any[];
    price:                     string;
    reservation_allowed:       string;
    restrictions:              any[];
    rounded_address:           boolean;
    seller_contact:            string;
    shipping_modes:            any[];
    shipping_options:          any[];
    shipping_profile:          string;
    show_contact_information:  boolean;
    simple_shipping:           string;
    stock:                     string;
    sub_vertical:              string;
    subscribable:              boolean;
    tags:                      any[];
    vertical:                  string;
    vip_subdomain:             string;
    buyer_protection_programs: any[];
    status:                    string;
}
