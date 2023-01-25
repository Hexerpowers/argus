import React, {Component} from 'react';

class CodeMenuItem extends Component {
    constructor(props) {
        super(props);
        this.e_id = 2
    }

    render() {
        let active = this.props.active===this.e_id
        return (
            <div onClick={()=>this.props.elevate(this.e_id)}>
                <div className={active ? "appmenu-code-container appmenu-code-container-active":"appmenu-code-container"}>
                    {active &&
                        <div className="appmenu-code-active"></div>
                    }
                    <li className="appmenu-code-outer">
                        <svg className="appmenu-code-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.02481 1.79585C8.83075 0.734718 7.30968 0.734717 7.11562 1.79585C6.97221 2.57998 5.99693 2.86635 5.45235 2.28423C4.71541 1.49646 3.43581 2.31881 3.84624 3.31641C4.14954 4.0536 3.4839 4.82179 2.71105 4.62649C1.6652 4.36221 1.03333 5.74581 1.91795 6.36315C2.57165 6.81934 2.42699 7.82545 1.67125 8.07899C0.648534 8.42209 0.865005 9.92767 1.94295 9.96875C2.73952 9.9991 3.16177 10.9237 2.66307 11.5456C1.9882 12.3871 2.98429 13.5367 3.91332 12.9884C4.59984 12.5833 5.45494 13.1329 5.37162 13.9256C5.25887 14.9985 6.71832 15.427 7.20347 14.4635C7.56199 13.7515 8.57844 13.7515 8.93696 14.4635C9.42211 15.427 10.8816 14.9985 10.7688 13.9256C10.6855 13.1329 11.5406 12.5833 12.2271 12.9884C13.1561 13.5367 14.1522 12.3871 13.4774 11.5456C12.9787 10.9237 13.4009 9.9991 14.1975 9.96875C15.2754 9.92767 15.4919 8.42209 14.4692 8.07899C13.7134 7.82545 13.5688 6.81934 14.2225 6.36315C15.1071 5.74581 14.4752 4.36221 13.4294 4.62649C12.6565 4.82179 11.9909 4.0536 12.2942 3.31641C12.7046 2.31881 11.425 1.49646 10.6881 2.28423C10.1435 2.86635 9.16821 2.57998 9.02481 1.79585ZM8.07022 11.9724C10.196 11.9724 11.9193 10.2491 11.9193 8.12334C11.9193 5.99756 10.196 4.27427 8.07022 4.27427C5.94443 4.27427 4.22114 5.99756 4.22114 8.12334C4.22114 10.2491 5.94443 11.9724 8.07022 11.9724Z" fill="#F6F6F6"/>
                            <circle cx="8" cy="8" r="2" fill="url(#paint0_linear_207_706)"/>
                            <defs>
                                <linearGradient id="paint0_linear_207_706" x1="10.3532" y1="9.39" x2="6.5646" y2="5.45623" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#4BA1FC"/>
                                    <stop offset="1" stopColor="#EC2AED"/>
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="appmenu-code-text">
                            Код
                        </div>
                    </li>
                </div>
            </div>
        );
    }
}

export default CodeMenuItem;
