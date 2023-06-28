// parameterActions.js
export const SET_BLOG_PARAMETERS = 'SET_BLOG_PARAMETERS';

export const addBlogParameters = (parameters) => ({
    type: SET_BLOG_PARAMETERS,
    payload: parameters,
});
