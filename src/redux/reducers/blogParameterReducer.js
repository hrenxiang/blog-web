// blogParameterReducer.js
const initialState = {};

const blogParameterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BLOG_PARAMETERS':
            return action.payload;
        default:
            return state;
    }
};

export default blogParameterReducer;