import React, {Component} from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header';
import Main from './Main';
import ArticleNew from './ArticleNew';
import configSite from '../config';

class App extends Component {

    getConfigName = (value) => configSite[value];

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div className="primary-layout">
                        <Header siteName={this.getConfigName('siteName')}/>
                        <Switch>
                            <Route exact path="/" component={Main} />
                            <Route exact path="/test" component={ArticleNew} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
