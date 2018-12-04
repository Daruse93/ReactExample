import {combineReducers} from 'redux';
import ArticlesReducers from './Articles';
import ArticleDetail from './ArticleDetail';


const allReducers = combineReducers ({
    Articles: ArticlesReducers,
    ArticleDetail: ArticleDetail,
});

export default allReducers;