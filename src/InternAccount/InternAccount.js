import React from 'react';
import style from './InternAccount.module.scss'
import {connect} from "react-redux";
import AccountNav from "../AccountNav/AccountNav";
import {Outlet} from "react-router-dom";
import Nav from "../Nav/Nav";

const InternAccount = (props) => {
    let links = [
        ['Приглашения', 'invites'],
        ['Задания', 'tasks'],
        ['Карта', 'map'],
        ['Оставить Отзыв', 'feedback']
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

export default InternAccount;