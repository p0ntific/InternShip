import React from 'react';
import Button from '@material-ui/core/Button';
import style from './ErrorPage.module.scss'
import {NavLink} from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className={style.container}>
            <h1>Ооой!</h1>
            <span>Извините, данной страницы не существует</span>
            <Button variant="contained" color={"primary"}>
                <NavLink
                    to="/"
                >
                    <div className={style.button_wrapper}>
                        Вернуться на Главную
                    </div>
                </NavLink>
            </Button>
        </div>
    );
};

export default ErrorPage;