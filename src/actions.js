export const ADD_COMMENT = 'ADD_COMMENT';
export const addComment = (author, comment) => ({
    type: ADD_COMMENT,
    author,
    comment
});
