import React from 'react';
import style from './MentorAccount.module.scss'
import {connect} from "react-redux";
import AccountNav from "../AccountNav/AccountNav";
import {Outlet} from "react-router-dom";
import Nav from "../Nav/Nav";

const MentorAccount = (props) => {
    let links = [
        ['Информация о Стажере', 'info'],
        ['Оставить Отзыв', 'feedback'],
        ['Результаты тестов', 'tests'],
    ]
    return (
        <div className={style.intern_account}>
            <Nav/>
            <AccountNav links = {links}/>
            <div className={style.block_wrapper}>
                <div className={style.block}>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default MentorAccount;