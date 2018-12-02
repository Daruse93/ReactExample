import React, {Component} from 'react';
// import './App.css';
import Header from './Header';
import ArticleList from './ArticleList';
import articles from '../fixtures';
import configSite from '../config';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {

    getConfigName = (value) => configSite[value];

    render() {
        return (
            <div>
                <Header siteName={this.getConfigName('siteName')}/>
                <ArticleList articles={articles}/>
            </div>
        )
    }
}

export default App;
