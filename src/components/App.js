import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {HashRouter, Route, Switch} from 'react-router-dom';
import store from '../store';
import Home from '../pages/Home';
import AddArticle from '../pages/AddArticle';

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <HashRouter>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/add-article" component={AddArticle} />
                    </Switch>
                </HashRouter>
            </Provider>
        );
    }
}

export default App;