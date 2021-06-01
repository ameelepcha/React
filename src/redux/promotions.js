// import { PROMOTIONS } from '../shared/promotions';
import * as ActionTypes from './ActionTypes';

// if the state is undefined, then we give an initial value to the state i.e., DISHES which we have imported here and so it returns the state i.e., DISHES
// export const Promotions = (state = PROMOTIONS, action) => {
    export const Promotions = (state = {
        isLoading: true,
        errMess: null,
        dishes: []
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_PROMOS:
            return{...state, isLoading: false, errMess: null, promotions: action.payload};

        case ActionTypes.PROMOS_LOADING:
            return{...state, isLoading: true, errMess: null, promotions: []};

        case ActionTypes.PROMOS_FAILED:
            return{...state, isLoading: false, errMess: action.payload, promotions: []};
        
        default:
            return state;
    }
}