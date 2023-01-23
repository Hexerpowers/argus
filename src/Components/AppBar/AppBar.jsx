import React, {Component} from 'react';

import "../../Assets/Styles/AppBar.css"

class AppBar extends Component {
    render() {
        return (
            <div className="appbar">
                <div className="appbar-holder">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default AppBar;
