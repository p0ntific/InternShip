import style from './CareerSchool.module.scss'
import Button from "@material-ui/core/Button";
import SendIcon from '@mui/icons-material/Send';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import {connect} from "react-redux";
import mapStateToProps from "../../mapStateToProps";
import mapDispatchToProps from "../../mapDispatchToProps";

const CareerSchool = (props) => {
    let heading = ((props.careerSchool) ?
            <div className={style.heading_block}>
                <h2 className={style.heading}>Вы уже прошли нашу карьерную школу!!!</h2>
                <h3 className={style.heading_little}>Мы гордимся вами! &#128522;</h3>
            </div>
            :
            <div className={style.heading_block}>
                <h2 className={style.heading}>Вы еще не проходили нашу карьерную школу?!</h2>
                <h3 className={style.heading_little}>Попробуйте! &#128572;</h3>
            </div>
    )

    return (
        <div className={style.container}>
            <div className={style.block}>
                {heading}
                <Button className={style.button} variant="outlined" endIcon={<Diversity3OutlinedIcon/>}> Наша Карьерная
                    школа </Button>
                <Button className={style.button} variant="outlined" endIcon={<SendIcon/>}> Наш Телеграм Канал </Button>
            </div>
        </div>
    )
}

const CareerSchool_connect = connect(mapStateToProps('career_school'))(CareerSchool);
export default CareerSchool_connect;