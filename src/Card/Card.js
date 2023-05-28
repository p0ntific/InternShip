import style from './Card.module.scss';
import card1 from '../images/card1.jpeg'
import EmojiFlagsOutlinedIcon from '@mui/icons-material/EmojiFlagsOutlined';
import Button from "@material-ui/core/Button";
import {Rating} from "@mui/material";
import {connect} from "react-redux";
import mapStateToProps from "../mapStateToProps";
import mapDispatchToProps from "../mapDispatchToProps";

const Card = (props) => {
    let handleClick = () => {
        props.requestInvite({id:props.id, status: props.status});
    }

    let button;
    if (props.status === 'ОТКАЗАНО') {
        return null;
    } else if (props.status === 'НА РАССМОТРЕНИИ') {
        button = <Button onClick={handleClick} className={style.cancel} variant="outlined" endIcon={<EmojiFlagsOutlinedIcon/>}>Отменить заявку</Button>
    } else if (props.status === 'ПРИНЯТО') {
        button = <div className={style.accepted}>Вы приняты &#128077;</div>
    } else {
        button = <Button onClick={handleClick} variant="outlined" endIcon={<EmojiFlagsOutlinedIcon/>}>Подать заявку</Button>
    }
    return (
        <div className={style.container}>
            <div>
                <img className={style.img} src={props.img} alt=""/>
            </div>
            <div className={style.block}>
                <div className={style.info_block}>
                    <h3 className={style.heading}>{props.place}</h3>
                    <p className={style.text}>{props.description}</p>

                </div>
                <div className={style.button_wrapper}>
                    <Rating className={style.rating} name="half-rating-read" defaultValue={props.rating} precision={0.5}
                            readOnly/>
                    <h5 className={style.heading_little}>Подайте заявку на стажировку:</h5>
                    {button}
                </div>
            </div>
        </div>
    )
}
const Card_connect = connect(mapStateToProps('card'), mapDispatchToProps('card'))(Card);
export default Card_connect;