import React, {Component} from 'react';
//import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Article from "./Article";

class ArticleList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bigArticle: false,
            articleLast: 3,
            articleInterval: 3,
            showMoreButton: true,
        };
    }

    handlerArticleSize = () => {
        this.setState({
            bigArticle: !this.state.bigArticle,
        });
    };

    handlerArticleMore = () => {
        let articleLast = this.state.articleLast + this.state.articleInterval;
        let showMoreButton = true;
        if(!(articleLast < this.props.articles.length)){
            articleLast = this.props.articles.length;
            showMoreButton = false;
        }

        this.setState({
            articleLast: articleLast,
            showMoreButton: showMoreButton,
        });
    };

    render() {
        let articles = [];
        for (let i = 0; i < this.state.articleLast; i++) {
            articles.push(this.props.articles[i]);
        }

        const articleElement = articles.map(
            (article, index) => <Article bigArticle={this.state.bigArticle} key={index} article={article}/>
        );

        const textChangeButton = this.state.bigArticle ? 'Сделать меньше' : 'Сделать крупнее';
        const showMoreButton = this.state.showMoreButton;

        return (
            <section id="ArticleList" className="py-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className="">Article List</h2>
                        </div>
                        <div className="col">
                            <div className="float-right">
                                <button className="btn btn-primary" onClick={this.handlerArticleSize}>
                                    {textChangeButton}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {articleElement}
                    </div>
                    {showMoreButton &&
                    <div className="row">
                        <div className="col">
                            <div className="text-center mt-5">
                                <button className="btn btn-primary btn-lg" onClick={this.handlerArticleMore}>
                                    Показать ещё
                                </button>
                            </div>
                        </div>
                    </div>
                    }
                </div>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return{
        articles: state.Articles
    }
}

export default connect(mapStateToProps)(ArticleList);