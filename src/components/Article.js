import React, {Component} from 'react';

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

    render() {
        const article = this.props.article;
        const bigArticle = this.props.bigArticle ? 'col-6' : 'col-4';
        let customStyles = {
            backgroundColor: this.state.cardStyle.background,
            color: this.state.cardStyle.text,
            height: '100%',
        };
        return (
            <div className={bigArticle}>
                <div className="card mt-4">
                    <div className="card-body" style={customStyles}>
                        <h3>{article.title}</h3>
                        <p className="card-text">
                            {(article.text).substr(0,200)}
                            {((article.text).length > 200) ? '...' : ''}
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" onClick={this.handleChangeColor} className="btn btn-sm btn-outline-secondary">Change Color</button>
                                {/*<button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>*/}
                            </div>
                            <small className="text-muted">{(new Date(article.date)).toDateString()}</small>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Article;
