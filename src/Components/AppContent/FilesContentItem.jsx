import React, {Component} from 'react';

class FilesContentItem extends Component {
    constructor(props) {
        super(props);
        this.e_id = 3
    }

    render() {
        let active = this.props.active===this.e_id ? "appcontent-files appcontent-active":"appcontent-files"
        return (
            <div className={active}>
                <h2>Материалы для отборочного этапа:</h2>
                <div className="table-holder">
                    <div className="table-row">
                        <div className="table-row-name">Регламент (от 20.01.23)</div>
                        <div className="table-row-text"><a href="https://aliexpress.ru/">https://aliexpress.ru/</a> </div>
                    </div>
                    <div className="table-row">
                        <div className="table-row-name">Тестовые изображения</div>
                        <div className="table-row-text"><a href="https://aliexpress.ru/">https://aliexpress.ru/</a> </div>
                    </div>
                </div>
                <h2>Справочные материалы:</h2>
                <div className="table-holder">
                    <div className="table-row">
                        <div className="table-row-name">Какая-то дичь</div>
                        <div className="table-row-text"><a href="https://aliexpress.ru/">https://aliexpress.ru/</a> </div>
                    </div>
                    <div className="table-row">
                        <div className="table-row-name">Какая-то дичь</div>
                        <div className="table-row-text"><a href="https://aliexpress.ru/">https://aliexpress.ru/</a> </div>
                    </div>
                    <div className="table-row">
                        <div className="table-row-name">Какая-то дичь</div>
                        <div className="table-row-text"><a href="https://aliexpress.ru/">https://aliexpress.ru/</a> </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FilesContentItem;
