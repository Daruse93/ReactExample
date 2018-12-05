import React, {Component} from 'react';
import ArticleList from '../components/Articles/ArticleList';
import Header from "../components/Header";

class Home extends Component {

    render() {
        return (
            <div>
                <Header/>
                <ArticleList/>
            </div>
        );
    }
}

export default Home;