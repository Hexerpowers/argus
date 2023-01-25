import React, {Component} from 'react';

class NewsMenuItem extends Component {
    constructor(props) {
        super(props);
        this.e_id = 0
    }

    render() {
        let active = this.props.active===this.e_id
        return (
            <div onClick={()=>this.props.elevate(this.e_id)}>
                <div className={active ? "appmenu-news-container appmenu-news-container-active":"appmenu-news-container"}>
                    {active &&
                        <div className="appmenu-news-active"></div>
                    }
                    <li className="appmenu-news-outer">
                        <svg className="appmenu-news-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
                            <path d="M10.6285 0.940857L2.02811 6.69415L2.94166 9.80435H4.66823V10.4755C4.66232 11.3683 5.10284 11.7468 5.99569 11.7527H8.72451C9.61736 11.7615 9.97214 11.3683 9.97805 10.4755V9.80435H13.2834L10.6285 0.940857ZM5.86856 9.80731H8.80138V10.6824H5.86856V9.80731Z" fill="white"/>
                            <path d="M11.9441 0.0509392C11.8968 0.068678 11.8465 0.0923297 11.7992 0.121894L11.2404 0.512148L14.0461 9.8812L14.7054 9.87529C15.1577 9.86938 15.4327 9.53825 15.3085 9.12139L12.7216 0.411628C12.6122 0.0479827 12.2781 -0.082102 11.9411 0.0509392H11.9441Z" fill="url(#paint0_linear_129_3989)"/>
                            <path d="M0.224652 6.68232C0.0413508 6.74736 -0.0384739 6.93657 0.017699 7.12283L1.0229 10.4962C1.07907 10.6824 1.24759 10.7977 1.4368 10.7504C1.49889 10.7356 1.56393 10.7002 1.62898 10.644L2.42722 9.96104L1.48706 6.84492L0.443431 6.66753C0.360649 6.65571 0.286738 6.66162 0.224652 6.68527V6.68232Z" fill="url(#paint1_linear_129_3989)"/>
                            <defs>
                                <linearGradient id="paint0_linear_129_3989" x1="15.3384" y1="4.24403e-07" x2="9.18576" y2="1.51015" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FC4760"/>
                                    <stop offset="1" stopColor="#FF67C3"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear_129_3989" x1="2.42722" y1="6.66162" x2="-1.01396" y2="7.86748" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FC4760"/>
                                    <stop offset="1" stopColor="#FF67C3"/>
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="appmenu-news-text">
                            Новости
                        </div>
                    </li>
                </div>
            </div>
        );
    }
}

export default NewsMenuItem;
