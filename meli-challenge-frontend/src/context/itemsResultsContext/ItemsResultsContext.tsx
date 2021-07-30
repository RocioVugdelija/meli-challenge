import React, { createContext, useReducer } from "react";
import itemsApi from "../../api/itemsApi";
import { ItemsResultsResponse } from "../../interfaces/ItemsResponsesInterfaces";
import { itemsReducer, ItemsState } from "./ItemsResultsReducer";

type ItemsResultsContextProps = {
    items?: ItemsResultsResponse['items'];
    categories?: string[];
    errorMessage: string;
    getItemsResults: (query: string) => Promise<void>;
    removeError: () => void;
    cleanItems: () => void;
    cleanCategories: () => void;
}

const itemsInitialState: ItemsState = {
    errorMessage: '',
    items: undefined,
    categories: undefined,
} 
export const ItemsResultsContext = createContext({} as ItemsResultsContextProps);

export const ItemsResultsProvider = ({children}: any) => {
    
    const [state, dispatch] = useReducer(itemsReducer, itemsInitialState);

    const getItemsResults = async(query: string) => {
        try {
            const resp = await itemsApi.get<ItemsResultsResponse>(`/items?q=${query}`);
            const items = resp.data.items;
            const categories = resp.data.categories;

            dispatch({
                type: 'setItems',
                payload: items || undefined,
            });
            dispatch({
                type: 'setCategories',
                payload: categories || undefined,
            });
        } catch (error) {
            cleanCategories();
            cleanItems();
            dispatch({
                type: 'addError',
                payload: 'Lo sentimos. Ha habido un error',
            });
        }
    };

    const removeError = () => {
        dispatch({type: 'removeError'});
    };

    const cleanItems = () => {
        dispatch({type: 'cleanItems'});
    };

    const cleanCategories = () => {
        dispatch({type: 'cleanCategories'});
    };
    
    return(
        <ItemsResultsContext.Provider value={{
            ...state,
            getItemsResults,
            cleanItems,
            removeError,
            cleanCategories,
        }}>
            {children}
        </ItemsResultsContext.Provider>
    )
}