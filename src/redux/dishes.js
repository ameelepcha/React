// import { DISHES } from '../shared/dishes';
import * as ActionTypes from './ActionTypes';

// if the state is undefined, then we give an initial value to the state i.e., DISHES which we have imported here and so it returns the state i.e., DISHES
// export const Dishes = (state = DISHES, action) => {
    export const Dishes = (state = {
        isLoading: true,
        errMess: null,
        dishes: []
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_DISHES:
            return{...state,isLoading: false, errMess: null, dishes: action.payload};

        case ActionTypes.DISHES_LOADING:
            return{...state,isLoading: true, errMess: null, dishes: []};

        case ActionTypes.DISHES_FAILED:
            return{...state,isLoading: false, errMess: action.payload, dishes: []};

        default:
            return state;
    }
}