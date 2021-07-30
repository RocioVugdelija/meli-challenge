import React, { createContext, useReducer } from "react";
import itemsApi from "../../api/itemsApi";
import { ItemDetailsResponse } from "../../interfaces/ItemsResponsesInterfaces";
import { itemDetailsReducer, ItemDetailsState } from "./ItemDetailsReducer";

type ItemDetailsContextProps = {
    item?: ItemDetailsResponse['item'];
    categories?: string[];
    errorMessage: string;
    getItemDetails: (id: string) => Promise<void>;
    removeError: () => void;
    cleanItem: () => void;
    cleanCategories: () => void;
}

const itemDetailsInitialState: ItemDetailsState = {
    errorMessage: '',
    item: undefined,
} 
export const ItemDetailsContext = createContext({} as ItemDetailsContextProps);

export const ItemDetailsProvider = ({children}: any) => {
    
    const [state, dispatch] = useReducer(itemDetailsReducer, itemDetailsInitialState);

    const getItemDetails = async(id: string) => {
        try {
            const resp = await itemsApi.get<ItemDetailsResponse>(`/items/${id}`);
            const item = resp.data.item;
            const categories = resp.data.categories;

            dispatch({
                type: 'setItem',
                payload: item,
            });

            dispatch({
                type: 'setCategories',
                payload: categories,
            });
            removeError();
        } catch (error) {
            dispatch({
                type: 'addError',
                payload: error.response.data.message || 'Lo sentimos. Ha habido un error',
            });
        }
    };

    const cleanItem = () => {
        dispatch({type: 'cleanItem'});
        removeError();
    };

    const cleanCategories = () => {
        dispatch({type: 'cleanCategories'});
    };

    const removeError = () => {
        dispatch({type: 'removeError'});
    };

    return(
        <ItemDetailsContext.Provider value={{
            ...state,
            getItemDetails,
            removeError,
            cleanItem,
            cleanCategories
        }}>
            {children}
        </ItemDetailsContext.Provider>
    )
}