import React, {Component} from 'react';
import {connect} from "react-redux";
import {selectArticle} from "../../actions/ArticleActions";
import axios from "axios";

class Article extends Component {

    constructor(props){
        super(props);
        this.cardStyle = {
            style1: {
                text: "#000",
                background: "#ccc",
            },
            style2: {
                text: "#117d00",
                background: "#dbcfff",
            },
            style3: {
                text: "#001575",
                background: "#cc843b",
            },
            style4: {
                text: "#fff",
                background: "#000",
            },
        };
        this.state ={
            cardStyle: this.cardStyle.style1,
            cardStyleCounter: 1,
        };
    }

    handleChangeColor = () =>{
        let newCardStyleCounter = this.state.cardStyleCounter < Object.keys(this.cardStyle).length ? (this.state.cardStyleCounter + 1) : 1;
        this.setState({
            cardStyle: this.cardStyle['style'+newCardStyleCounter],
            cardStyleCounter: newCardStyleCounter,
        });
    };

    showArticle = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`)
            .then(response => {
                console.log(response.data);
                this.props.dispatch(selectArticle(response.data))
            })
    };

    render() {
        const bigArticle = this.props.bigArticle ? 'col-12 col-sm-12 col-md-6' : 'col-6 col-sm-6 col-md-4';
        let customStyles = {
            backgroundColor: this.state.cardStyle.background,
            color: this.state.cardStyle.text,
            height: '100%',
        };
        const {title,body} = this.props;
        return (
            <div className={bigArticle}>
                <div className="card mt-4">
                    <div className="card-body" style={customStyles}>
                        <h3>
                            {((title).length > 15) ? (title).substr(0,15)+'...' : title}
                            </h3>
                        <p className="card-text">
                            {((body).length > 100) ? (body).substr(0,100)+'...' : body}
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" onClick={this.showArticle} data-toggle="modal" data-target="#moreModal" className="btn btn-sm btn-outline-secondary">View</button>
                                <button type="button" onClick={this.handleChangeColor} className="btn btn-sm btn-outline-secondary">Change Color</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        article: state.ArticleDetail
    }
}

export default connect(mapStateToProps)(Article)