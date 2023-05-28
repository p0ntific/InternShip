import {connect} from "react-redux";
import mapStateToProps from "../../mapStateToProps";
import style from "./Tasks.module.scss";

const TaskComponent = (props) => {
    let tasks = props.tasks
    let task_components = tasks.map(test => (
        <div className={style.test}>
            <h4 className={style.task_heading}>{test.name}</h4>
            <h6 className={style.task_heading_little}>Вы на {test.stage} этапе</h6>
            <div className={style.next_step}>Для прохождения следующего этапа перейдите по ссылке:</div>
            <a className={style.task_link} href={test.link}>{test.name + ' - ' + test.stage + ' этап'}</a>
        </div>
    ))
    return (
        <div className={style.tasks}>
            {task_components}
        </div>
    )
}

const TaskComponent_connect = connect(mapStateToProps('tasks'))(TaskComponent);
export default TaskComponent_connect