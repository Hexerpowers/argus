import React, {Component} from 'react';

import "../Assets/Styles/AppPage.css"

class AppPage extends Component {
    render() {
        return (
            <div className="apppage">
                <div id="apppage_div" className="apppage-holder">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default AppPage;
