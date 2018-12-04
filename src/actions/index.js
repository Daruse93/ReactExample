export const select = (article) => {
    return{
        type: "ARTICLE_SELECTED",
        payload: article,
    }
};