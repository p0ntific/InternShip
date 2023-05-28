import React from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import style from './MyInfo.module.scss'
import {connect} from "react-redux";
import avatar from '../../images/avatar.svg'
import mapStateToProps from "../../mapStateToProps";
import mapDispatchToProps from "../../mapDispatchToProps";

const phoneRegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
const validationSchema = yup.object({
    email: yup
        .string()
        .email('Введите настоящую почту')
        .required('Необходимо ввести почту'),
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
    phoneNumber: yup
        .string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required('Необходимо ввести номер телефона')


});

const MyInfo = (props) => {

    const formik = useFormik({
        initialValues: {
            email: props.mail,
            firstName: props.firstName,
            lastName: props.lastName,
            resume: props.resume,
            university: props.university,
            phoneNumber: props.phone,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            props.updateMyInfo({
                mail: values.email, firstName: values.firstName,
                lastName: values.lastName,resume: values.resume,
                phone:values.phoneNumber, university: values.university
            });
            console.log(values)
        },
    });

    return (
        <div className={style.container_wrapper}>
            <div className={style.container}>
                <form onSubmit={formik.handleSubmit}>
                    <div className={style.block}>
                        <div className={style.block_left}>
                            <h2 className={style.heading}>Редактирование профиля</h2>
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
                                id="phoneNumber"
                                name="phoneNumber"
                                label="Номер телефона"
                                placeholder={'8(123)456-78-91'}
                                value={formik.values.phoneNumber}
                                onChange={formik.handleChange}
                                error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                                helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                            />
                            <TextField
                                fullWidth
                                id="university"
                                name="university"
                                label="Университет"
                                placeholder={'Ваш ВУЗ'}
                                value={formik.values.university}
                                onChange={formik.handleChange}
                                error={formik.touched.university && Boolean(formik.errors.university)}
                                helperText={formik.touched.university && formik.errors.university}
                            />
                        </div>
                        <div className={style.block_right}>
                            <div className={style.avatar}>
                                <img className={style.avatar_img} src={avatar} alt=""/>
                            </div>
                            <TextField
                                fullWidth
                                id="resume"
                                name="resume"
                                label="О себе"
                                placeholder={'Напишите что-то о себе'}
                                value={formik.values.info}
                                onChange={formik.handleChange}
                                error={formik.touched.info && Boolean(formik.errors.info)}
                                helperText={formik.touched.info && formik.errors.info}
                                multiline
                                rows={5}
                                variant="standard"
                            />
                            <Button className={style.submit} color="inherit" variant="contained" fullWidth type="submit">
                                Обновить
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

const MyInfo_connect = connect(mapStateToProps('my_info'), mapDispatchToProps('my_info'))(MyInfo);
export default MyInfo_connect;