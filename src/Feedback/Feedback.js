import React from 'react';
import {useFormik} from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import style from './Feedback.module.scss'
import avatar from '../images/avatar.svg'
import {Rating} from "@mui/material";
import cat from '../images/comment_sticker.png'

const Feedback = (props) => {
    const handleChangeRating = (value) => {
        props.changeRating(value)
    }

    const formik = useFormik({
        initialValues: {
            comment_rating: props.comment_rating,
            comment_text: props.comment_text,
        },
        onSubmit: (values) => {
            console.log(props)
            props.submitFeedback({text: values.comment_text, rating: values.comment_rating})
        }
    });
    let person_img = props.img

    return (
        <div className={style.container_wrapper}>
            <div className={style.container}>
                <h2 className={style.heading}>Пожалуйста, оставьте отзыв &#128591;</h2>

                <div className={style.block}>
                    <div className={style.block_top}>
                        <div className={style.avatar}>
                            <img className={style.avatar_img}
                                 src={(person_img === '' || person_img === null || person_img === undefined) ? avatar : person_img}
                                 alt=""/>
                        </div>
                        <div className={style.info}>
                            <h2 className={style.heading_little}>
                                {props.firstName + ' ' + props.lastName}
                            </h2>
                            <p className={style.text}>
                                {props.info}
                            </p>
                            <Rating size={"large"} name="read-only" value={props.rating} readOnly/>
                        </div>
                    </div>
                    <div className={style.block_bottom}>
                        <div className={style.comment}>
                            <form onSubmit={formik.handleSubmit}>
                                <Rating
                                    name="simple-controlled"
                                    value={props.comment_rating}
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

export default Feedback;