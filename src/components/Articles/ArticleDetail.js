import React, {Component} from 'react';
import {connect} from 'react-redux';

class ArticleDetail extends Component {
    render() {
        console.log('ArticleDetail ',this.props.article);
        return (
            !this.props.article
                ?<p>Article is not selected</p>
                :<div>
                    <h4>{this.props.article.title}</h4>
                    <p>
                        {this.props.article.body}
                    </p>
                </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        article: state.articleDetail
    }
}

export default connect(mapStateToProps)(ArticleDetail);