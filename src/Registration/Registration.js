import React from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import style from './Registration.module.scss'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import mapStateToProps from "../mapStateToProps";
import mapDispatchToProps from "../mapDispatchToProps";


const DOMEN_SITE = 'http://localhost:3000/';

const validationSchema = yup.object({
    email: yup
        .string()
        .email('Введите настоящую почту')
        .required('Необходимо ввести почту'),
    password: yup
        .string()
        .min(8, 'Пароль должен содержать хотя бы 8 символов')
        .required('Необходимо ввести пароль'),
    firstName: yup
        .string()
        .matches(/^[a-zA-Z-а-яА-ЯёЁ\s-]*$/, 'Пожалуйста, введите имя')
        .max(20)
        .required('Необходимо ввести имя'),
    lastName: yup
        .string()
        .matches(/^[a-zA-Z-а-яА-ЯёЁ\s-]*$/, 'Пожалуйста, введите фамилию')
        .max(20)
        .required('Необходимо ввести фамилию'),
});

const Registration = (props) => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            role: 'стажер'
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            props.pushCandidate({mail: values.email, password: values.password, firstName: values.firstName, lastName: values.lastName});
            window.location.href = DOMEN_SITE + "";
        },
    });
    const roles = {
        candidate: 'кандидат на стажировку',
        intern: 'стажер',
        mentor: 'наставник',
        tutor: 'куратор',
        personnel: 'кадр организации',
    }
    return (
        <div className={style.registration}>
            <div className={style.button_wrapper}>
                <NavLink
                    to="/login"
                >
                    {'<='} назад
                </NavLink>
            </div>
            <form className={style.form} onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="firstName"
                    name="firstName"
                    label="Имя"
                    placeholder={'Иван'}
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                    helperText={formik.touched.firstName && formik.errors.firstName}
                />
                <TextField
                    fullWidth
                    id="lastName"
                    name="lastName"
                    label="Фамилия"
                    placeholder={'Иванов'}
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                    helperText={formik.touched.lastName && formik.errors.lastName}
                />
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Почта"
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
                    label="Пароль"
                    type="password"
                    placeholder={'somePassword&1_'}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    className={style.inputArea}
                />

                <Button color="primary" variant="contained" fullWidth type="submit">
                    Зарегестрироваться
                </Button>
            </form>
        </div>
    );
};

const Registration_connect = connect(mapStateToProps('registration'), mapDispatchToProps('registration'))(Registration);
export default Registration_connect;