import React, {Component} from 'react';

class TeamMenuItem extends Component {
    constructor(props) {
        super(props);
        this.e_id = 1
    }

    render() {
        let active = this.props.active===this.e_id
        return (
            <div onClick={()=>this.props.elevate(this.e_id)}>
                <div className={active ? "appmenu-home-container appmenu-home-container-active":"appmenu-home-container"}>
                    {active &&
                        <div className="appmenu-home-active"></div>
                    }
                    <li className="appmenu-home-outer">
                        <svg className="appmenu-home-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.2333 1.09518C8.09758 0.968275 7.90242 0.968275 7.7667 1.09518L1.13514 6.29609C1.01462 6.40878 0.969112 6.59591 1.02146 6.76351C1.07381 6.93112 1.21272 7.04301 1.36844 7.04301H2.80866V13.579C2.80866 13.8115 2.97361 14 3.17708 14H12.823C13.0265 14 13.1914 13.8115 13.1914 13.579V7.04301H14.6316C14.7873 7.04301 14.9262 6.93112 14.9785 6.76351C15.0309 6.59591 14.9854 6.40878 14.8649 6.29609L8.2333 1.09518Z" fill="white"/>
                            <path d="M6 10C6 8.89543 6.89543 8 8 8V8C9.10457 8 10 8.89543 10 10V14H6V10Z" fill="url(#paint0_linear_207_785)"/>
                            <defs>
                                <linearGradient id="paint0_linear_207_785" x1="10" y1="8" x2="4.46154" y2="11.6923" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FFCF50"/>
                                    <stop offset="1" stopColor="#FF7334"/>
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="appmenu-home-text">
                            Команда
                        </div>
                    </li>
                </div>
            </div>
        );
    }
}

export default TeamMenuItem;
