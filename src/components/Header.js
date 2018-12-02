import React, {Component} from 'react';

class Header extends Component {

    render() {
        const props = this.props;
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <span className="navbar-brand">
                        {props.siteName}
                    </span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>
            </header>
        )
    }
}

export default Header;