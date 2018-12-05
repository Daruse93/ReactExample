import React, {Component} from 'react';
import Header from "../components/Header";
import ArticleNew from "../components/Articles/ArticleNew";

class AddArticle extends Component {

    render() {
        return (
            <div>
                <Header/>
                <ArticleNew/>
            </div>
        );
    }
}

export default AddArticle;