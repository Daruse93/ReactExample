import {combineReducers} from 'redux';
import articleDetail from './ArticleDetailReducers';
import articles from './ArticlesReducers';

const allReducers = combineReducers ({
    articleDetail,
    articles,
});

export default allReducers;