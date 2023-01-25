import React, {Component} from 'react';
import "../Assets/Styles/AppContainer.css"

class AppContainer extends Component {
    render() {
        return (
            <div className="app-container">
                {this.props.children}
            </div>
        );
    }
}

export default AppContainer;
