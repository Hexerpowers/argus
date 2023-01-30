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
                        <div className="table-row-name">Регламент (от 30.01.23)</div>
                        <div className="table-row-text"><a target="_blank" rel="noreferrer" href="https://argus.hxps.ru/files/reglament_30_01_23.pdf">Скачать (PDF)</a> </div>
                    </div>
                    <div className="table-row">
                        <div className="table-row-name">Тестовые изображения</div>
                        <div className="table-row-text"><a target="_blank" rel="noreferrer" href="https://argus.hxps.ru/files/test_images.zip">Скачать (zip-архив)</a> </div>
                    </div>
                </div>
                <h2>Справочные материалы:</h2>
                <div className="table-holder">
                    <div className="table-row">
                        <div className="table-row-name">Какая-то дичь</div>
                        <div className="table-row-text"><a target="_blank" rel="noreferrer" href="https://aliexpress.ru/">https://aliexpress.ru/</a> </div>
                    </div>
                    <div className="table-row">
                        <div className="table-row-name">Какая-то дичь</div>
                        <div className="table-row-text"><a target="_blank" rel="noreferrer" href="https://aliexpress.ru/">https://aliexpress.ru/</a> </div>
                    </div>
                    <div className="table-row">
                        <div className="table-row-name">Какая-то дичь</div>
                        <div className="table-row-text"><a target="_blank" rel="noreferrer" href="https://aliexpress.ru/">https://aliexpress.ru/</a> </div>
                    </div>
                </div>
                <h2>Правовая информация:</h2>
                <div className="table-holder">
                    <div className="table-row">
                        <div className="table-row-name">Условия использования</div>
                        <div className="table-row-text"><a href="https://argus.hxps.ru/legal/terms_of_service.pdf">Документ (PDF)</a> </div>
                    </div>
                    <div className="table-row">
                        <div className="table-row-name">Политика конфиденциальности</div>
                        <div className="table-row-text"><a href="https://argus.hxps.ru/legal/privacy_policy.pdf">Документ (PDF)</a> </div>
                    </div>
                    <div className="table-row">
                        <div className="table-row-name">Согласие на обработку персональных данных</div>
                        <div className="table-row-text"><a href="https://argus.hxps.ru/legal/agreement.pdf">Документ (PDF)</a> </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FilesContentItem;
