import React, {Component} from 'react';

class TeamContentItem extends Component {
    constructor(props) {
        super(props);
        this.e_id = 1
    }

    renderStatus(){
        switch(this.props.status){
            case 0: return <div className="team-status team-status-ok">Допущены до участия в отборочном этапе</div>;
            case 1: return <div className="team-status team-status-ok">Допущены до участия в заключительном этапе</div>;
            case 2: return <div className="team-status team-status-wait">Данные команды проходят проверку</div>;
            case 3: return <div className="team-status team-status-err">Указаны неверные или не указаны необходимые данные</div>;
            default: return <div className="team-status team-status-err">Не указаны данные</div>
        }
    }

    render() {
        let active = this.props.active===this.e_id ? "appcontent-team appcontent-active":"appcontent-team"
        return (
            <div className={active}>
                <h2>Статус команды:</h2>
                {this.renderStatus()}
                <h2>Информация о команде</h2>
                <div className="table-holder">
                    <h3 className="table-caption">Общая информация (все поля обязательны для заполнения)</h3>
                    <div className="table-row">
                        <div className="table-row-name">Название</div>
                        <input type="text" id="team-name" className="table-row-val" defaultValue="АЧЬКО ГЕНДАЛЬФА" />
                    </div>
                    <div className="table-row">
                        <div className="table-row-name">Город</div>
                        <input type="text" id="team-name" className="table-row-val" defaultValue="Караганда" />
                    </div>
                    <div className="table-row">
                        <div className="table-row-name">ВУЗ</div>
                        <input type="text" id="team-name" className="table-row-val" defaultValue="Палитех" />
                    </div>
                    <br/><br/>
                    <h3 className="table-caption">Информация о членах команды</h3>
                    <div className="table-row">
                        <div className="table-row-name">ФИО участника 1 (капитан)</div>
                        <input type="text" id="team-name" className="table-row-val" defaultValue="Смихуедов Павел Иванович" />
                    </div>
                    <div className="table-row">
                        <div className="table-row-name">ФИО участника 2</div>
                        <input type="text" id="team-name" className="table-row-val" defaultValue="Бендер О. И." />
                    </div>
                    <div className="table-row">
                        <div className="table-row-name">ФИО участника 3</div>
                        <input type="text" id="team-name" className="table-row-val" defaultValue="А вам зачем?" />
                    </div>
                    <br/><br/>
                    <h3 className="table-caption">Дополнительная информация</h3>
                    <div className="table-row">
                        <div className="table-row-name">Температура очька</div>
                        <input type="text" id="team-name" className="table-row-val" defaultValue="458 в неизвестных единицах" />
                    </div>
                    <div className="table-row">
                        <div className="table-row-name">Цвет РГБ подсветки</div>
                        <input type="text" id="team-name" className="table-row-val" defaultValue="как у мси" />
                    </div>
                    <div className="table-row">
                        <div className="table-row-name">ы?</div>
                        <input type="text" id="team-name" className="table-row-val" defaultValue="42" />
                    </div>
                </div>

            </div>
        );
    }
}

export default TeamContentItem;

