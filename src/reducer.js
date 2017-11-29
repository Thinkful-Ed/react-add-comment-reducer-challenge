import {ADD_COMMENT} from './actions';

const initialState = {
    comments: []
};

export default (state = initialState, action) => {
    if (action.type === ADD_COMMENT) {
        return Object.assign({}, state, {
            comments: [
                ...state.comments,
                {
                    author: action.author,
                    comment: action.comment
                }
            ]
        });
    }
    return state;
};
