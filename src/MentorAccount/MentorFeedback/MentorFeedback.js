import style from './MentorFeedback.module.scss'
import intern_photo from '../../images/intern.jpg';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import React from "react";
import {Form, useFormik} from "formik";
import {Rating} from "@mui/material";

const MentorFeedback = () => {
    let intern = {
        name: 'Никита Марсельев',
        age: '18',
        description: 'Трудолюбивый, общительный и дружелюбный студент третьего курса ИТМО'
    }
    const formik = useFormik({
        initialValues: {
            comment: '',
            rating: 5,
        },
        onSubmit: (values) => {
            console.log(values);
        }
    });
    let setValue = (value) => {
        console.log(formik.values.rating);
    }
    return (
        <div className={style.container}>
            <div className={style.block}>
                <div className={style.block_top}>
                    <img className={style.img} src={intern_photo} alt=""/>
                    <div className={style.description}>
                        <h1 className={style.heading}>Ваш стажер: <br/> {intern.name}</h1>
                        <h4 className={style.age}>Возраст: {intern.age}</h4>
                        <p className={style.text}>{intern.description}</p>
                    </div>
                </div>
                <div className={style.block_bottom}>
                    <form className={style.form} onSubmit={formik.handleSubmit}>
                        <div className={style.comment}>
                            <Rating
                                id="rating"
                                name="simple-controlled"
                                value={formik.values.value}
                                size="large"
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                            />
                            <TextField
                                fullWidth
                                id="comment"
                                name="comment"
                                label="Отзыв"
                                multiline
                                rows={5}
                                placeholder={'Отзыв'}
                                value={formik.values.comment}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div className={style.submit}>
                            <h3 className={style.heading_little}>Не забудьте оставить отзыв &#128071;</h3>
                            <Button color="primary" variant="contained" fullWidth type="submit">
                                Отправить
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default MentorFeedback;