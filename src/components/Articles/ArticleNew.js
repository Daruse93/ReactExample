import React, {Component} from 'react';

class ArticleNew extends Component {

    render() {
        return (
            <div className="py-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>
                                Add new article
                            </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <form>
                                <div className="form-group">
                                    <label>Title:</label>
                                    <input name="title" type="text" className="form-control" placeholder={'Title '+Math.floor(Math.random()*(9999-1111)+9999)}/>
                                </div>
                                <div className="form-group">
                                    <label>Date:</label>
                                    <input name="date" type="text" className="form-control" placeholder={(new Date()).toDateString()}/>
                                </div>
                                <div className="form-group">
                                    <label>Text:</label>
                                    <textarea name="text" className="form-control" rows="6" placeholder="Add Text"/>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ArticleNew;
