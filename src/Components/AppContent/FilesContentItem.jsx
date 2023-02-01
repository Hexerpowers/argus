import React, {Component} from 'react';
import {Scrollbar} from "react-scrollbars-custom";

class FilesContentItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height:document.getElementById('v-linear').offsetHeight,
            width:document.getElementById('h-linear').offsetWidth-document.getElementById('apppage_div').getBoundingClientRect().left
        }
        this.e_id = 3
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
        this.setState({ height: document.getElementById('v-linear').offsetHeight });
        this.setState({ width: document.getElementById('h-linear').offsetWidth-document.getElementById('apppage_div').getBoundingClientRect().left });
    }

    updateDimensions = () => {
        this.setState({ height: document.getElementById('v-linear').offsetHeight });
        this.setState({ width: document.getElementById('h-linear').offsetWidth-document.getElementById('apppage_div').getBoundingClientRect().left });
    };

    render() {
        let active = this.props.active === this.e_id ? "appcontent-files appcontent-active" : "appcontent-files"
        return (
            <div className={active}>
                <Scrollbar noScrollX style={{width: this.state.width, height: this.state.height-20}}>
                    <div className="files-scroll-holder" id="files-scroll-holder">
                    <h2>Материалы для отборочного этапа:</h2>
                    <div className="table-holder">
                        <div className="table-row">
                            <div className="table-row-name">Регламент (от 01.02.23)</div>
                            <div className="table-row-text"><a target="_blank" rel="noreferrer"
                                                               href="https://argus.hxps.ru/files/reglament_01_02_23.pdf">Документ
                                (PDF)</a></div>
                        </div>
                        <div className="table-row">
                            <div className="table-row-name">Тестовые изображения</div>
                            <div className="table-row-text">Будут доступны позднее</div>
                        </div>
                    </div>
                    <h2>Справочные материалы:</h2>
                    <div className="table-holder">
                        <div className="table-row">
                            <div className="table-row-name">Документация на OpenCV</div>
                            <div className="table-row-text"><a target="_blank" rel="noreferrer"
                                                               href="https://docs.opencv.org/">https://docs.opencv.org/</a>
                            </div>
                        </div>
                        <div className="table-row">
                            <div className="table-row-name">Документация на NuclearTools</div>
                            <div className="table-row-text"><a target="_blank" rel="noreferrer"
                                                               href="https://pypi.org/project/NuclearTools/">https://pypi.org/project/NuclearTools/</a>
                            </div>
                        </div>
                    </div>
                    <h2>Правовая информация:</h2>
                    <div className="table-holder">
                        {/*<div className="table-row">*/}
                        {/*    <div className="table-row-name">Условия использования</div>*/}
                        {/*    <div className="table-row-text"><a href="#">Документ (PDF) (В ПРОЦЕССЕ)</a></div>*/}
                        {/*</div>*/}
                        <div className="table-row">
                            <div className="table-row-name">Политика конфиденциальности</div>
                            <div className="table-row-text"><a target="_blank" rel="noreferrer"
                                                               href="https://argus.hxps.ru/legal/privacy_policy.pdf">Документ
                                (PDF)</a></div>
                        </div>
                        <div className="table-row">
                            <div className="table-row-name">Согласие на обработку персональных данных</div>
                            <div className="table-row-text"><a target="_blank" rel="noreferrer"
                                                               href="https://argus.hxps.ru/legal/agreement.pdf">Документ
                                (PDF)</a></div>
                        </div>
                    </div>
                    </div>
                </Scrollbar>
            </div>
        );
    }
}

export default FilesContentItem;
