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
                                    <input name="title" type="text" className="form-control" value={'Title '+Math.floor(Math.random()*(9999-1111)+9999)}/>
                                </div>
                                <div className="form-group">
                                    <label>Date:</label>
                                    <input name="date" type="text" className="form-control" value={(new Date()).toDateString()}/>
                                </div>
                                <div className="form-group">
                                    <label>Text:</label>
                                    <textarea name="text" className="form-control" rows="6">
                                        May indulgence difficulty ham can put especially. Bringing remember for supplied her why was confined. Middleton principle did she procuring extensive believing add. Weather adapted prepare oh is calling. These wrong of he which there smile to my front. He fruit oh enjoy it of whose table. Cultivated occasional old her unpleasing unpleasant. At as do be against pasture covered viewing started. Enjoyed me settled mr respect no spirits civilly.
                                    </textarea>
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
