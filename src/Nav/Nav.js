import React from 'react';
import Button from '@material-ui/core/Button';
import style from './Nav.module.scss'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import mapStateToProps from "../mapStateToProps";
import {Avatar} from "@material-ui/core";
import mapDispatchToProps from "../mapDispatchToProps";


const Nav = (props) => {
    let loginText = (props.login ?
        <Avatar className={style.avatar}>{props.firstName[0].toUpperCase() + props.lastName[0].toUpperCase() }</Avatar>
        :
        <div>Войти</div>
    )
    return (
        <div className={style.nav_wrapper}>
            <div className={style.header}>
                <div className={style.logo}>СТАЖИРОВКА.РУ</div>
                <nav className={style.nav}>
                    <ul className={style.nav_list}>
                        <li className={style.nav_list_item}>
                            <NavLink to="/">
                                Главная
                            </NavLink>
                        </li>
                        <li className={style.nav_list_item}>
                            <NavLink to="/about">
                                О нас
                            </NavLink>
                        </li>
                        <li className={style.nav_list_item}>
                            <NavLink to="/candidateAccount">
                                Кандидат
                            </NavLink>
                        </li>
                        <li className={style.nav_list_item}>
                            <NavLink to="/internAccount">
                                Стажер
                            </NavLink>
                        </li>
                        <li className={style.nav_list_item}>
                            <NavLink to="/mentorAccount">
                                Наставник
                            </NavLink>
                        </li>
                        <li className={style.nav_list_item}>
                            <NavLink to="/login">
                                {loginText}
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

const Nav_connect = connect(mapStateToProps('nav'))(Nav);
export default Nav_connect;