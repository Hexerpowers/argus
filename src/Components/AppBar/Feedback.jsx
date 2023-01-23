import React, {Component} from 'react';
import Swal from 'sweetalert2'
import '@sweetalert2/theme-dark/dark.css';

class Feedback extends Component {
    render() {
        return (
            <div className="appbar-feedback">
                <a className="appbar-feedback-a" href="https://vk.com/im?sel=-216384572">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-inside-1_238_903" fill="white">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M5.50012 3.66663C3.98134 3.66663 2.75012 4.89785 2.75012 6.41663V11.4583H2.7501V18.7917L6.25015 15.5833H14.6668C16.1856 15.5833 17.4168 14.3521 17.4168 12.8333V6.41663C17.4168 4.89784 16.1856 3.66663 14.6668 3.66663H5.50012Z"></path>
                        </mask>
                        <path
                            d="M2.75012 11.4583V12.9583H4.25012V11.4583H2.75012ZM2.7501 11.4583V9.95834H1.2501V11.4583H2.7501ZM2.7501 18.7917H1.2501V22.2015L3.76369 19.8974L2.7501 18.7917ZM6.25015 15.5833V14.0833H5.66668L5.23657 14.4776L6.25015 15.5833ZM4.25012 6.41663C4.25012 5.72627 4.80977 5.16663 5.50012 5.16663V2.16663C3.15291 2.16663 1.25012 4.06942 1.25012 6.41663H4.25012ZM4.25012 11.4583V6.41663H1.25012V11.4583H4.25012ZM2.75012 9.95834H2.7501V12.9583H2.75012V9.95834ZM1.2501 11.4583V18.7917H4.2501V11.4583H1.2501ZM3.76369 19.8974L7.26374 16.689L5.23657 14.4776L1.73652 17.6859L3.76369 19.8974ZM14.6668 14.0833H6.25015V17.0833H14.6668V14.0833ZM15.9168 12.8333C15.9168 13.5236 15.3571 14.0833 14.6668 14.0833V17.0833C17.014 17.0833 18.9168 15.1805 18.9168 12.8333H15.9168ZM15.9168 6.41663V12.8333H18.9168V6.41663H15.9168ZM14.6668 5.16663C15.3571 5.16663 15.9168 5.72627 15.9168 6.41663H18.9168C18.9168 4.06941 17.014 2.16663 14.6668 2.16663V5.16663ZM5.50012 5.16663H14.6668V2.16663H5.50012V5.16663Z"
                            fill="#E3E3E3" mask="url(#path-1-inside-1_238_903)"></path>
                        <rect x="5.50012" y="6.41663" width="9.16667" height="0.916667" fill="#E3E3E3"></rect>
                        <rect x="5.50012" y="8.25" width="7.33333" height="0.916667" fill="#E3E3E3"></rect>
                        <rect x="5.50012" y="10.0833" width="8.25" height="0.916667" fill="#E3E3E3"></rect>
                        <rect x="5.50012" y="11.9166" width="3.66667" height="0.916667" fill="#E3E3E3"></rect>
                    </svg>
                    <div className="appbar-feedback-text">Обратная связь</div>
                </a>
            </div>
        );
    }
}

export default Feedback;