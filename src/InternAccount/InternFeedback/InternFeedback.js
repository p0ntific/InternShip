import React from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import style from './InternFeedback.module.scss'
import {connect} from "react-redux";
import avatar from '../../images/avatar.svg'
import mapStateToProps from "../../mapStateToProps";
import mapDispatchToProps from "../../mapDispatchToProps";
import {Rating} from "@mui/material";
import cat from '../../images/comment_sticker.png'

const InternFeedback = (props) => {
    const handleChangeRating = props.changeRating;

    const formik = useFormik({
        initialValues: {
            comment_rating: props.comment_rating,
            comment_text: props.comment_text,
        },
        onSubmit: props.submitFeedback({text:props.comment_text, rating:props.comment_rating})
    });
    let mentor_img = props.img
    return (
        <div className={style.container_wrapper}>
            <div className={style.container}>
                <h2 className={style.heading}>Пожалуйста, оставьте отзыв &#128591;</h2>

                <div className={style.block}>
                    <div className={style.block_top}>
                        <div className={style.avatar}>
                            <img className={style.avatar_img}
                                 src={(mentor_img === '' || mentor_img === null || mentor_img === undefined) ? avatar : mentor_img}
                                 alt=""/>
                        </div>
                        <div className={style.info}>
                            <h2 className={style.heading_little}>
                                {props.firstName + ' ' + props.lastName}
                            </h2>
                            <p className={style.text}>
                                {props.info}
                            </p>
                            <Rating size={"small"} name="read-only" value={props.rating} readOnly/>
                        </div>
                    </div>
                    <div className={style.block_bottom}>
                        <div className={style.comment}>
                            <form onSubmit={formik.handleSubmit}>
                                <Rating
                                    name="simple-controlled"
                                    value={formik.values.comment_rating}
                                    onChange={(event, newValue) => {
                                        handleChangeRating(newValue);
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    id="comment_text"
                                    name="comment_text"
                                    label="Отзыв"
                                    placeholder={'Напишите отзыв'}
                                    value={formik.values.comment_text}
                                    onChange={formik.handleChange}
                                    error={formik.touched.comment_text && Boolean(formik.errors.comment_text)}
                                    helperText={formik.touched.comment_text && formik.errors.comment_text}
                                    multiline
                                    rows={5}
                                    variant="standard"
                                />

                                <Button className={style.submit} color="inherit" variant="contained" fullWidth
                                        type="submit">
                                    Отправить
                                </Button>
                            </form>
                        </div>
                        <div className={style.sticker}>
                            <img className={style.sticker_img} src={cat} alt=""/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

const InternFeedback_connect = connect(mapStateToProps('feedback'), mapDispatchToProps('feedback'))(InternFeedback);
export default InternFeedback_connect;