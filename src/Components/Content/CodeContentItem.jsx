import React, {Component} from 'react';

class CodeContentItem extends Component {
    constructor(props) {
        super(props);
        this.e_id = 2
    }

    render() {
        let active = this.props.active===this.e_id ? "appcontent-code appcontent-active":"appcontent-code"
        return (
            <div className={active}>
                <h2>Информация о тестовой среде</h2> <br/>
                <h2>Загрузка кода на проверку</h2>
            </div>
        );
    }
}

export default CodeContentItem;
