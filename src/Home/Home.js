import React from 'react';
import Button from '@material-ui/core/Button';
import style from './Home.module.scss'
import Nav from "../Nav/Nav";
import {Step, StepLabel, Stepper} from "@material-ui/core";

const Home = (props) => {
    let steps = [
        'РЕГИСТРАЦИЯ',
        'ПРОХОЖДЕНИЕ КАРЬЕРНОЙ ШКОЛЫ',
        'ТЕСТИРОВАНИЕ',
        'ЛИЧНОЕ СОБЕСЕДОВАНИЕ',
        'СТАЖИРОВКА МЕЧТЫ'
    ]
    return (
        <div className={style.home}>
            <Nav/>
            <div className={style.block_wrapper}>
                <div className={style.block}>
                    <div className={style.header}>
                        <h1 className={style.heading}>СТАЖИРОВКА.РУ</h1>
                        <p className={style.text}>СТАЖИРОВКА.РУ - это платформа для студентов, кураторов, наставников и компаний.
                            Юные стажеры выбирают специальность и вместе с куратором
                            и опытным наставником проходят карьерную школу
                            и получают прекрасную стажеровку в Москве! &#128523;</p>
                    </div>
                    <div className={style.info}>
                        <h2 className={style.heading_little}>
                            Путь к <span className={style.word_bright}>КЛАССНОЙ</span> стажировке начинается здесь! <br/>
                            &#128071;&#128071;&#128071;&#128071;

                        </h2>
                        <Stepper className={style.bar} activeStep={0} alternativeLabel>
                            {steps.map((label) => (
                                <Step key={label} className={style.step}>
                                    <StepLabel><div className={style.step_text}>{label}</div></StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;