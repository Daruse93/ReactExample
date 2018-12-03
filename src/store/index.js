import {combineReducers} from 'redux';
import ArticlesReducers from './Articles';

const allReducers = combineReducers ({
    Articles: ArticlesReducers
});

export default allReducers;