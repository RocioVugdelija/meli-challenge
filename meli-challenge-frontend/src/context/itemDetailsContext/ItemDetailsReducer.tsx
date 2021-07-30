import { ItemDetailsResponse } from "../../interfaces/ItemsResponsesInterfaces";

export interface ItemDetailsState {
    errorMessage: string;
    item?: ItemDetailsResponse['item'];
    categories?: string[];
};

type ItemDetailsActions =
    | { type: 'setItem', payload: ItemDetailsResponse['item']}
    | { type: 'setCategories', payload: string[]}
    | { type: 'addError', payload: string }
    | { type: 'cleanItem'}
    | { type: 'cleanCategories'}
    | { type: 'removeError'}

export const itemDetailsReducer = ( state: ItemDetailsState, action: ItemDetailsActions): ItemDetailsState => {

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
        case 'setItem':
            return {
                ...state,
                item: action.payload,
            }
        case 'setCategories':
            return {
                ...state,
                categories: action.payload,
            }
        case 'cleanItem':
            return {
                ...state,
                item: undefined,
            }
        case 'cleanCategories':
            return {
                ...state,
                item: undefined,
            }
        default:
            return state;
    }
}