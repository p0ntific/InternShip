import style from './Intern.module.scss'
import {connect} from "react-redux";
import Card from "../../Card/Card";
import mapStateToProps from "../../mapStateToProps";

const Intern = (props) => {
        let intern = props.internInfo;

        let links = intern.contacts.map(el => (
            <li className={style.link_item}>{el[0]}:<a className={style.link} href={el[1]}>{el[1]}</a></li>
        ))


        return (
            <div className={style.container_wrapper}>
                <div className={style.container}>
                    <img className={style.img} src={intern.img} alt=""/>
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

const Intern_connect = connect(mapStateToProps('internInfo'))(Intern);
export default Intern_connect;