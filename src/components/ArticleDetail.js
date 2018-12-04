import React, {Component} from 'react';
import {connect} from 'react-redux';

class ArticleDetail extends Component{
    render(){
        if (!this.props.article){
            return(
                <p>Article is not selected</p>
            )
        }
        return(
            <div>
                <h2>{this.props.article.title}</h2>
                <p>{(new Date(this.props.article.date)).toDateString()}</p>
                <p>{this.props.article.text}</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        article: state.ArticleDetail
    }
}

export default connect(mapStateToProps)(ArticleDetail);