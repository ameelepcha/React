import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

// if the state is undefined, then we give an initial value to the state i.e., DISHES which we have imported here and so it returns the state i.e., DISHES
// export const Comments = (state = COMMENTS, action) => {
    export const Comments = (state = {
        errMess: null,
        comments: []
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_COMMENTS:
            return{...state, isLoading: false, errMess: null, comments: action.payload};

        case ActionTypes.COMMENTS_FAILED:
            return{...state, isLoading: false, errMess: action.payload, comments: []};

        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.comments.length;
            comment.date = new Date().toISOString();
            // return state.concat(comment);
            return {...state, comments: state.comments.concat(comment)};
        default:
            return state;
    }
}