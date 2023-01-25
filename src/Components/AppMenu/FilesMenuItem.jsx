import React, {Component} from 'react';

class FilesMenuItem extends Component {
    constructor(props) {
        super(props);
        this.e_id = 3
    }

    render() {
        let active = this.props.active===this.e_id
        return (
            <div onClick={()=>this.props.elevate(this.e_id)}>
                <div className={active ? "appmenu-files-container appmenu-files-container-active":"appmenu-files-container"}>
                    {active &&
                        <div className="appmenu-files-active"></div>
                    }
                    <li className="appmenu-files-outer">
                        <svg className="appmenu-files-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M3 3C2.44772 3 2 3.44772 2 4V7V11V12C2 13.1046 2.89543 14 4 14H12C13.1046 14 14 13.1046 14 12V7C14 5.89543 13.1046 5 12 5H7V4C7 3.44772 6.55228 3 6 3H3Z" fill="url(#paint0_linear_3620_7504)"/>
                            <defs>
                                <linearGradient id="paint0_linear_3620_7504" x1="14" y1="3" x2="2.48866" y2="14.4896" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#51FFEA"/>
                                    <stop offset="1" stopColor="#22BAFA"/>
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="appmenu-files-text">
                            Материалы
                        </div>
                    </li>
                </div>
            </div>
        );
    }
}

export default FilesMenuItem;
