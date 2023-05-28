import React from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import style from './Login.module.scss'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import mapStateToProps from "../mapStateToProps";
import mapDispatchToProps from "../mapDispatchToProps";


const DOMEN_SITE = 'http://localhost:3000/';

const validationSchema = yup.object({
    email: yup
        .string('Введите вашу почту')
        .email('Почта недействительна')
        .required('Необходимо ввести почту'),
    password: yup
        .string('Введите пароль')
        .min(8, 'Пароль должен содержать как минимум 8 символов')
        .required('Необходимо ввести пароль'),
});

const Login = (props) => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            props.login({mail: values.email, password: values.password});
            window.location.href = DOMEN_SITE
        },
    });

    return (
        <div className={style.login}>
            <div className={style.button_wrapper}>
                <NavLink
                    to="/"
                >
                    {'<='} на главную
                </NavLink>
            </div>
            <form className={style.form} onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    placeholder={'ivanov2023@gmail.com'}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    placeholder={'somePassword&1_'}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    className={style.inputArea}
                />
                <Button color="primary" variant="contained" fullWidth type="submit">
                    Войти
                </Button>
            </form>
            <div className={style.registration_wrapper}>
                <NavLink
                    to="/registration"
                >
                    Ещё нет аккаунта? Зарегистрироваться
                </NavLink>
            </div>
        </div>
    );
};

const Login_connect = connect(mapStateToProps('login'), mapDispatchToProps('login'))(Login);
export default Login_connect;