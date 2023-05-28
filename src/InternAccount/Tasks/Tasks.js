import style from './Tasks.module.scss';
import {Step, StepLabel, Stepper} from "@material-ui/core";
import {connect} from "react-redux";
import mapStateToProps from "../../mapStateToProps";
import TaskComponent from "./TaskComponent";


const Tasks = (props) => {


    let activeStep = props.stage
    let steps = [
        "Зарегистрироваться на платформе ",
        "1 Этап собеседования",
        "2 Этап собеседования",
        "3 Этап собеседования",
        "Подписание договора:)",
    ]
    return (
        <div className={style.container}>
            <div className={style.block}>
                <h2 className={style.heading}>Вы еще не прошли {activeStep} этап тестирования &#128552;</h2>
                <a href="#" className={style.link}>&#128073;&#127996; Перейти на {activeStep} этап &#128072;&#127996;
                </a>
            </div>
            <div className={style.block}>
                <div className={style.progress}>Прогресс тестирования:</div>
                <Stepper activeStep={activeStep} className={style.bar} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </div>
            <div className={style.tasks}>
                <h2>У вас есть тестовые задания: <br/>
                    &#11015;&#65039;&#11015;&#65039;&#11015;&#65039;
                </h2>
                <TaskComponent/>
            </div>
        </div>
    )
}

const Tasks_connect = connect(mapStateToProps('testing'))(Tasks);
export default Tasks_connect;