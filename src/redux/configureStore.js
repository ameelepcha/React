import { combineReducers, createStore } from 'redux';
// import { Reducer, initialState } from './reducer';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';

//creating a redux store :
export const ConfigureStore = () => {
    const store = createStore(
        // Reducer,
        // initialState
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        })
    );

    return store;
}