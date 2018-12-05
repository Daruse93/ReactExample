export const selectArticle = (payload) => {
    return{
        type: "ARTICLE_SELECTED", // название action
        payload, // что передаем
    }
};

export const setArticles = (payload) => {
    return{
        type: "SET_ARTICLES",
        payload,
    }
};
