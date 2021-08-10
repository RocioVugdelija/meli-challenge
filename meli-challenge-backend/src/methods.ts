import { Author, ItemDetailsResponse, ItemsResultsResponse } from "./interfaces";
import { MeliCategoryResponse } from "./interfaces/meli-api-responses/categories-response";
import { MeliDescriptionResponse } from "./interfaces/meli-api-responses/description-response";
import { MeliItemResponse } from "./interfaces/meli-api-responses/item-response";
import { Filter, MeliSearchResponse } from "./interfaces/meli-api-responses/search-interface";
import meliApi from "./meliApi";

export const getSearchResultsData = async(query: string) => {
  const parsedQuery= query.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
  const resp = await meliApi.get<MeliSearchResponse>(`sites/MLA/search?limit=4&q=${parsedQuery}`);
  return resp;
};
  
export const getItemDetailsData = async(id: string) => {
  const resp = await meliApi.get<MeliItemResponse>(`items/${id}`);
  return resp;
};
  
export const getItemDescriptionData = async(id: string) => {
  const resp = await meliApi.get<MeliDescriptionResponse>(`items/${id}/description`);
  return resp;
};
  
export const getCategoriesData = async(category_id: string) => {
  const resp = await meliApi.get<MeliCategoryResponse>(`categories/${category_id}`);
  return resp;
};

export const getCategoryIdWithMaxResults = (categories: Filter['values'] ) => {
    const sortedCategories = categories.sort((a, b) => b.results - a.results);
    return sortedCategories[0].id;
}
  
export const mapItemsResults = (items: MeliSearchResponse) : ItemsResultsResponse['items'] => {
    const mappedItems = items.results.map((i) => {
      const priceDecimals = parseInt(i.price.toString().split(".")[1]);
      return {
        id: i.id,
        title: i.title,
        price: {
          currency: i.currency_id,
          amount: Math.trunc(i.price),
          decimals: priceDecimals,
        },
        picture: i.thumbnail,
        condition: i.condition,
        free_shipping: i.shipping.free_shipping,
        adress_state: i.address.state_name,
      };
    });
    return mappedItems;
};
  
export const formatItemDetails = (i: MeliItemResponse, description: string) : ItemDetailsResponse['item'] => {
      const priceDecimals = parseInt(i.price.toString().split(".")[1]);
        
      return {
        id: i.id,
        title: i.title,
        price: {
          currency: i.currency_id,
          amount: Math.trunc(i.price),
          decimals: priceDecimals,
        },
        picture: i.thumbnail,
        condition: i.condition,
        free_shipping: i.shipping.free_shipping,
        sold_quantity: i.sold_quantity,
        description: description
      };
};
  
export const getAuthor = () : Author => (
    {
      name: "Rocío",
      lastname: "Vugdelija",
    }
);
  
  