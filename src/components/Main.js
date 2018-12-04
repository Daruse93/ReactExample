import React, {Component} from 'react';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from '../store';

import ArticleList from './Articles/ArticleList';
import configSite from '../config';


class Main extends Component {

    getConfigName = (value) => configSite[value];

    render() {
        const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
        return (
            <Provider store={store}>
                <ArticleList/>
            </Provider>
        )
    }
}

export default Main;
