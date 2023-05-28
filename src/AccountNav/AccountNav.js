import React from 'react';
import Button from '@material-ui/core/Button';
import style from './AccountNav.module.scss'
import {NavLink} from "react-router-dom";


const AccountNav = (props) => {
    let links = props.links;
    const accountLinks = links.map(link => (
        <li key = {link[0]} className={style.accountLink}>
            <NavLink to={'' + link[1]}>
                {link[0]}
            </NavLink>
        </li>
    ))

    return (
        <nav className={style.nav}>
            <ul className={style.nav_list}>
                {accountLinks}
            </ul>
        </nav>
    );
};

export default AccountNav;