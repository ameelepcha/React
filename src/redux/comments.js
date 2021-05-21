import { COMMENTS } from '../shared/comments';

// if the state is undefined, then we give an initial value to the state i.e., DISHES which we have imported here and so it returns the state i.e., DISHES
export const Comments = (state = COMMENTS, action) => {
    switch(action.type) {
        default:
            return state;
    }
}