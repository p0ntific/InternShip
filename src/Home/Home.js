import React from 'react';
import Button from '@material-ui/core/Button';
import style from './Home.module.scss'
import Nav from "../Nav/Nav";
import {Outlet} from "react-router-dom";

const Home = (props) => {

    return (
        <div className={style.home}>
            <Nav/>
            <div className={style.block_wrapper}>
                <div className={style.block}>
                    Здесь будут странички либо какаято хрень
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default Home;