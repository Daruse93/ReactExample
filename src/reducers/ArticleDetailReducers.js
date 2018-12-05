const article = (state = [], action) => {
    switch (action.type) {
        case 'ARTICLE_SELECTED':
            return  action.payload;
        default:
            return state
    }
};

export default article