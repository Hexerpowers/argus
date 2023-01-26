import React, {Component} from 'react';
import {Scrollbar} from 'react-scrollbars-custom';
import Coords_img from "../../Assets/Img/demo_coords.png"

class CodeContentItem extends Component {
    constructor(props) {
        super(props);
        this.e_id = 2
    }

    render() {
        let active = this.props.active === this.e_id ? "appcontent-code appcontent-active" : "appcontent-code"
        return (
            <div className={active}>
                <Scrollbar style={{width: '100%', height: '83vh'}}>
                    <h2>Загрузка кода на проверку</h2>
                    <h3>Напишите программу. Тестируется через stdin → stdout</h3>
                    <div className="code-load-info font-firacode">
                        <div className="code-load-limits">
                            <div><span className="text-bold">Time Limit: </span>100 секунд</div>
                            <div><span className="text-bold">Memory Limit: </span>256 MB</div>
                        </div>
                        <select className="code-load-select font-firacode">
                            <option selected value="grapefruit">Python 3.10</option>
                            <option value="lime">C++</option>
                            <option value="coconut">C</option>
                        </select>
                    </div>
                    <textarea className="code-input" placeholder="Put your code here..."></textarea>
                    <div className="code-check">Проверить</div>
                    <hr className="code-hr"/>
                    <h2>История тестирования</h2>
                    <div className="test-table">
                        <div className="test-table-row">
                            <div className="test-table-cell-id">#</div>
                            <div className="test-table-cell-status">Статус</div>
                            <div className="test-table-cell">Результат</div>
                        </div>
                        <div className="test-table-row">
                            <div className="test-table-cell-id">3</div>
                            <div className="test-table-cell-status">Сборка успешна</div>
                            <div className="test-table-cell">100/100</div>
                        </div>
                        <div className="test-table-row">
                            <div className="test-table-cell-id">2</div>
                            <div className="test-table-cell-status">Вывод не соответствует требуемому формату</div>
                            <div className="test-table-cell">0/100</div>
                        </div>
                        <div className="test-table-row">
                            <div className="test-table-cell-id">1</div>
                            <div className="test-table-cell-status">Сборка неуспешна</div>
                            <div className="test-table-cell">0/100</div>
                        </div>
                    </div>

                    <hr className="code-hr"/>
                    <h2>Задание</h2>
                    <div className="code-task-container">
                        <h3>Введение</h3>
                        <div className="code-task-text">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                            ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                            consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                            arcu.
                        </div>
                        <h3>Собственно, задание</h3>
                        <div className="code-task-text">
                            Вашей программе требуется получить на вход фотографию склада и проанализировать её.
                            <br/><br/>
                            На вход (stdin) ваша программа получит путь до изображения, которое представляет из себя
                            фотографию складского стеллажа с расположенными на нём&nbsp;
                            <a className="text-italic" href="/obj">объектами</a>.
                            <br/><br/>
                            От программы требуется определить координаты (в пикселях)&nbsp;
                            <span className="text-italic">x1, y1, x2, y2</span> для
                            левого верхнего и правого нижнего углов описанного прямоугольника (далее
                            bbox)
                            для каждого найденного на изображении объекта.
                            <br/><br/>
                            Начало координат на изображении находится в левом верхнем углу, ось абсцисс направленна
                            вправо,
                            и соответствует координате “x”, а ось ординат – вниз и соответствует координате “y”.
                            <br/><br/>
                            <img className="code-task-img" alt="demo" src={Coords_img}/>
                            <br/><br/>
                            После завершения обработки, ваша программа должна вывести&nbsp;
                            <span className="text-italic">n</span>&nbsp;строк вида<br/>
                            &nbsp;&nbsp;<span className="text-italic">k:x1;y1;x2;y2</span><br/>
                            где <span className="text-italic">n</span> - количество объектов, найденных на
                            изображении,&nbsp;
                            <span className="text-italic">k</span> - номер объекта из <a className="text-italic"
                                                                                         href="/obj">легенды</a>,&nbsp;
                            <span className="text-italic">x1, y1, x2, y2</span> - координаты каждого из высчитанных
                            bbox, соответственно.
                        </div>
                        <h3>Пример ввода:</h3>
                        <div className="code-task-sample font-firacode">
                            /input/img_01.jpeg
                        </div>
                        <h3>Пример вывода:</h3>
                        <div className="code-task-sample font-firacode">
                            0:2344;10;2777;1890<br/>
                            3:0;0;1034;500<br/>
                            44:2647;1345;2953;2034<br/>
                        </div>
                    </div>
                    <hr className="code-hr"/>
                    <h2>Информация о тестовой среде</h2>
                    <div className="code-task-container">
                        <h3>Python</h3>
                        <div className="code-task-text">
                            Для тестирования используется Python 3.10 с набором стандартных библиотек. Также доступен
                            набор дополнительных библиотек, список которых перечислен <a className="text-italic"
                                                                                         href="/obj">здесь</a>.
                            <br/>
                            Использование мультипроцессной обработки, Numba и других нестандартных решений на данном
                            этапе недоступно.
                        </div>
                        <h3>C++</h3>
                        <div className="code-task-text">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                            ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                            consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                            arcu.
                        </div>
                        <h3>C</h3>
                        <div className="code-task-text">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                            ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                            consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                            arcu.
                        </div>
                    </div>

                </Scrollbar>
            </div>
        );
    }
}

export default CodeContentItem;
