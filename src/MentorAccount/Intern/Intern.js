import style from './Intern.module.scss'
import {connect} from "react-redux";
import Card from "../../Card/Card";
import intern_photo from '../../images/intern.jpg'

const Intern = (props) => {
        let intern = {
            name: 'Никита Марсельев Ростиславович',
            age: '18',
            description: 'Трудолюбивый, общительный и дружелюбный студент третьего курса ИТМО',
            resume: 'Равным образом новая модель организационной деятельности играет важную роль ' +
                'в формировании систем массового участия. Равным образом реализация намеченных плановых ' +
                'заданий требуют от нас анализа новых предложений. Таким образом укрепление и развитие ' +
                'структуры играет важную роль в формировании существенных финансовых и административных условий.' +
                ' Задача организации, в особенности же дальнейшее развитие различных форм деятельности требуют ' +
                'от нас анализа системы обучения кадров, соответствует насущным потребностям.',
            tests: [
                {
                    name: 'личное собеседование',
                    comment: 'положительное впечатление, приятный человек',
                    score: 78
                },
                {
                    name: 'онлайн СТЕПИК',
                    comment: null,
                    score: 80
                },

            ],
            status: 'На рассмотрении',
            contacts: [
                ['email', 'somemail@gmail.com'],
                ['phone', '89992223311'],
                ['telegram', '@abobus']
            ],
        }

        let links = intern.contacts.map(el => (
            <li className={style.link_item}>{el[0]}:<a className={style.link} href={el[1]}>{el[1]}</a></li>
        ))


        return (
            <div className={style.container_wrapper}>
                <div className={style.container}>
                    <img className={style.img} src={intern_photo} alt=""/>
                    <h2 className={style.heading}>{intern.name}</h2>
                    <div className={style.info}>
                        <div className={style.block_left}>
                            <h4 className={style.age}>Возраст: {intern.age}</h4>
                            <p className={style.description}>{intern.description}</p>
                        </div>
                        <div className={style.block_right}>
                            <h4 className={style.contacts}>Контакты: </h4>
                            <ul className={style.links}>
                                {links}
                            </ul>
                        </div>
                    </div>
                    <h2 className={style.heading_resume}>Резюме</h2>
                    <p className={style.resume}>{intern.resume}</p>

                </div>
            </div>
        );
    }
;

//const MyInfo_connect = connect(mapStateToProps, mapDispatchToProps)(MyInfo);
export default Intern;