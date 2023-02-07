import React, {Component} from 'react';
import Swal from "sweetalert2";
import {Scrollbar} from 'react-scrollbars-custom';

class TeamContentItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height:document.getElementById('v-linear').offsetHeight,
            width:document.getElementById('h-linear').offsetWidth-document.getElementById('apppage_div').getBoundingClientRect().left
        }
        this.e_id = 1
        this.toggleSave = this.toggleSave.bind(this)
        this.saveTeamData = this.saveTeamData.bind(this)
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

    toggleSave() {
        document.getElementById("team-save").classList.add("team-caption-save-active")
    }

    saveTeamData() {
        const Toast = Swal.mixin({
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
        let team_name = document.getElementById("team-name").value
        let team_city = document.getElementById("team-city").value
        let team_vuz = document.getElementById("team-vuz").value
        let team_crew_1 = document.getElementById("team-crew-1").value
        let team_crew_2 = document.getElementById("team-crew-2").value
        let team_crew_3 = document.getElementById("team-crew-3").value
        let team_crew_4 = document.getElementById("team-crew-4").value
        let team_crew_5 = document.getElementById("team-crew-5").value
        let team_sizes = document.getElementById("team-sizes").value
        let team_comm = document.getElementById("team-comm").value

        if (team_name.length < 2 || team_name.length > 50) {
            Toast.fire({
                icon: 'error',
                title: 'Название команды должно быть не менее 2 и не более 50 символов в длину'
            })
            return
        }
        if (team_city.length < 2 || team_city.length > 50) {
            Toast.fire({
                icon: 'error',
                title: 'Название города команды должно быть не менее 2 и не более 50 символов в длину'
            })
            return
        }
        if (team_vuz.length < 2 || team_vuz.length > 100) {
            Toast.fire({
                icon: 'error',
                title: 'Название ВУЗа команды должно быть не менее 2 и не более 100 символов в длину'
            })
            return
        }
        if (team_crew_1.length < 2 || team_crew_1.length > 50) {
            Toast.fire({
                icon: 'error',
                title: 'Имя капитана должно быть указано'
            })
            return
        }

        fetch("https://api.hxps.ru/argus/update_info", {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                uuid: this.props.uuid,
                team_name: team_name.trim(),
                team_city: team_city.trim(),
                team_vuz: team_vuz.trim(),
                team_crew_1: team_crew_1.trim(),
                team_crew_2: team_crew_2.trim(),
                team_crew_3: team_crew_3.trim(),
                team_crew_4: team_crew_4.trim(),
                team_crew_5: team_crew_5.trim(),
                team_sizes: team_sizes.trim(),
                team_comm: team_comm.trim(),
            })
        })
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                    if (data['msg'] !== 'accepted') {
                        Toast.fire({
                            icon: 'error',
                            title: 'Ошибка при обновлении данных'
                        })
                    } else {
                        this.props.elevateUpdate()
                        Toast.fire({
                            icon: 'success',
                            title: 'Данные обновлены'
                        })
                    }
                }
            )
    }

    renderStatus() {
        switch (this.props.status) {
            case 0:
                return <div className="team-status team-status-ok">Допущена до участия в отборочном этапе</div>;
            case 1:
                return <div className="team-status team-status-ok">Допущена до участия в заключительном этапе</div>;
            case 2:
                return <div className="team-status team-status-wait">Данные команды проходят проверку</div>;
            case 3:
                return <div className="team-status team-status-err">Указаны неверные или не указаны необходимые
                    данные</div>;
            default:
                return <div className="team-status team-status-err">Не указаны данные</div>
        }
    }

    render() {
        let active = this.props.active === this.e_id ? "appcontent-team appcontent-active" : "appcontent-team"
        let info = JSON.parse(this.props.team_info)
        return (
            <div className={active}>
                <Scrollbar noScrollX style={{width: this.state.width, height: this.state.height-20}}>
                    <div className="team-scroll-holder" id="team-scroll-holder">
                        <h2>Статус команды</h2>
                        {this.renderStatus()}
                        <div className="team-caption">
                            <h2>Информация о команде</h2>
                            <div onClick={this.saveTeamData} id="team-save" className="team-caption-save">Сохранить
                            </div>
                        </div>
                        <div className="table-holder">
                            <h3 className="table-caption">Общая информация (все поля обязательны для заполнения)</h3>
                            <div className="table-row">
                                <div className="table-row-name">Название</div>
                                <input onChange={this.toggleSave} type="text" id="team-name" className="table-row-val"
                                       placeholder="Красиво-тяжёлые чипсы"
                                       defaultValue={typeof info['team_name'] !== 'undefined' ? info['team_name'] : ""}/>
                            </div>
                            <div className="table-row">
                                <div className="table-row-name">Город</div>
                                <input onChange={this.toggleSave} type="text" id="team-city" className="table-row-val"
                                       placeholder="Воркута"
                                       defaultValue={typeof info['team_city'] !== 'undefined' ? info['team_city'] : ""}/>
                            </div>
                            <div className="table-row">
                                <div className="table-row-name">ВУЗ</div>
                                <input onChange={this.toggleSave} type="text" id="team-vuz" className="table-row-val"
                                       placeholder="*неразборчиво*"
                                       defaultValue={typeof info['team_vuz'] !== 'undefined' ? info['team_vuz'] : ""}/>
                            </div>
                            <br/><br/>
                            <h3 className="table-caption">Информация о членах команды</h3>
                            <div className="table-row">
                                <div className="table-row-name">ФИО участника №1 (капитан)</div>
                                <input onChange={this.toggleSave} type="text" id="team-crew-1" className="table-row-val"
                                       defaultValue={typeof info['team_crew_1'] !== 'undefined' ? info['team_crew_1'] : ""}/>
                            </div>
                            <div className="table-row">
                                <div className="table-row-name">ФИО участника №2</div>
                                <input onChange={this.toggleSave} type="text" id="team-crew-2" className="table-row-val"
                                       defaultValue={typeof info['team_crew_2'] !== 'undefined' ? info['team_crew_2'] : ""}/>
                            </div>
                            <div className="table-row">
                                <div className="table-row-name">ФИО участника №3</div>
                                <input onChange={this.toggleSave} type="text" id="team-crew-3" className="table-row-val"
                                       defaultValue={typeof info['team_crew_3'] !== 'undefined' ? info['team_crew_3'] : ""}/>
                            </div>
                            <div className="table-row">
                                <div className="table-row-name">ФИО участника №4</div>
                                <input onChange={this.toggleSave} type="text" id="team-crew-4" className="table-row-val"
                                       defaultValue={typeof info['team_crew_4'] !== 'undefined' ? info['team_crew_4'] : ""}/>
                            </div>
                            <br/><br/>
                            <h3 className="table-caption">Дополнительная информация</h3>
                            <div className="table-row">
                                <div className="table-row-name">ФИО руководителя</div>
                                <input onChange={this.toggleSave} type="text" id="team-crew-5" className="table-row-val"
                                       defaultValue={typeof info['team_crew_5'] !== 'undefined' ? info['team_crew_5'] : ""}/>
                            </div>
                            <div className="table-row">
                                <div className="table-row-name">Размеры футболок (для каждого члена команды)</div>
                                <input onChange={this.toggleSave} type="text" id="team-sizes" className="table-row-val"
                                       defaultValue={typeof info['team_sizes'] !== 'undefined' ? info['team_sizes'] : ""}
                                       placeholder="2 шт. XL, 2шт XXl"/>
                            </div>
                            <div className="table-row">
                                <div className="table-row-name">Удобный метод связи</div>
                                <input onChange={this.toggleSave} type="text" id="team-comm" className="table-row-val"
                                       defaultValue={typeof info['team_comm'] !== 'undefined' ? info['team_comm'] : ""}
                                       placeholder="Telegram, @Hexerpowers"/>
                            </div>
                        </div>
                    </div>
                </Scrollbar>
            </div>
        );
    }
}

export default TeamContentItem;

