import React, {Component} from 'react';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from '../store';

// import './App.css';
import Header from './Header';
import ArticleList from './ArticleList';
import configSite from '../config';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

    getConfigName = (value) => configSite[value];

    render() {
        const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
        return (
            <div>
                <Header siteName={this.getConfigName('siteName')}/>
                <Provider store={store}>
                    <ArticleList/>
                </Provider>
            </div>
        )
    }
}

export default App;
