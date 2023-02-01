import React, {Component} from 'react';

class NewsContentItem extends Component {
    constructor(props) {
        super(props);
        this.e_id = 0
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
        let height = document.getElementById('v-linear').offsetHeight
        let width = document.getElementById('h-linear').offsetWidth-document.getElementById('apppage_div').getBoundingClientRect().left
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.innerHTML = "VK.Widgets.Group(\"vk_groups\", {mode: 4, wide: 1, width: "+width+", height: "+height+"}, 216384572);";
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
