import React, {Component} from 'react';

class NewsContentItem extends Component {
    constructor(props) {
        super(props);
        this.e_id = 0
    }

    componentDidMount() {
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.innerHTML = "VK.Widgets.Group(\"vk_groups\", {mode: 4, wide: 1, width: \"1000\", height: \"900\"}, 216384572);";
        document.body.appendChild(s);
    }

    render() {
        let active = this.props.active===this.e_id ? "appcontent-news appcontent-active":"appcontent-news"
        return (
            <div className={active}>
                <div id="vk_groups"></div>
            </div>
        );
    }
}

export default NewsContentItem;
