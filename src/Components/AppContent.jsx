import React, {Component} from 'react';

import "../Assets/Styles/AppContent.css"

class AppContent extends Component {
    render() {
        return (
            <div className="appcontent">
                {this.props.children}
            </div>
        );
    }
}

export default AppContent;
