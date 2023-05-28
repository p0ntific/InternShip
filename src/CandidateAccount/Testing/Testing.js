import style from './Testing.module.scss';
import {Step, StepLabel, Stepper} from "@material-ui/core";
import {connect} from "react-redux";
import mapStateToProps from "../../mapStateToProps";


const Testing = (props) => {
    let activeStep = props.stage
    let steps = [
        "Зарегистрироваться на платформе ",
        "1 Этап собеседования",
        "2 Этап собеседования",
        "3 Этап собеседования",
        "Подписание договора:)",
    ]
    return (
        <div className={style.testing}>
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
            </div>
        </div>
    )
}
const Testing_connect = connect(mapStateToProps('testing'))(Testing);
export default Testing_connect;