import React from 'react';
import style from './CandidateAccount.module.scss'
import {connect} from "react-redux";
import AccountNav from "../AccountNav/AccountNav";
import {Outlet} from "react-router-dom";
import Nav from "../Nav/Nav";

const CandidateAccount = (props) => {
    let links = [
        ['Информация о себе', 'myInfo'],
        ['Карьерная школа', 'careerSchool'],
        ['Пройти Тестирование', 'Testing'],
        ['Актуальные Заявки', 'requests'],
        ['Приглашения', 'invites'],
    ]
    return (
        <div className={style.candidate_account}>
            <Nav/>
            <AccountNav links={links}/>
            <div className={style.block}>
                <Outlet/>
            </div>
        </div>
    );
};

export default CandidateAccount;