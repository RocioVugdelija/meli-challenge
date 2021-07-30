import { ItemsResultsResponse } from "../../interfaces/ItemsResponsesInterfaces";

export interface ItemsState {
    errorMessage: string;
    items?: ItemsResultsResponse['items'];
    categories?: string[];
};

type ItemsActions =
    | { type: 'setItems', payload: ItemsResultsResponse['items'] | undefined }
    | { type: 'setCategories', payload: string[] | undefined }
    | { type: 'addError', payload: string }
    | { type: 'cleanItems'}
    | { type: 'cleanCategories'}
    | { type: 'removeError'}

export const itemsReducer = ( state: ItemsState, action: ItemsActions): ItemsState => {
    switch (action.type) {
        case 'addError':
            return {
                ...state,
                errorMessage: action.payload,
            }            
        case 'removeError':
            return {
                ...state,
                errorMessage: '',
            }
        case 'setItems':
            return {
                ...state,
                items: action.payload,
            }
        case 'setCategories':
            return {
                ...state,
                categories: action.payload,
            } 
        case 'cleanItems':
            return {
                ...state,
                items: undefined,
            } 
        case 'cleanCategories':
            return {
                ...state,
                categories: undefined,
            } 
        default:
            return state;
    }
}