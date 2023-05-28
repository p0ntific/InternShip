import style from './Offers.module.scss'
import {connect} from "react-redux";
import Card from "../../Card/Card";
import mapStateToProps from "../../mapStateToProps";

const Offers = (props) => {
    let cards = props.works.map(work => ((work.status !== 'ПРИНЯТО' && work.status !== 'ОТКАЗАНО') ? (
        <div className={style.card_wrapper}>
            <Card
                {...work}
            />
        </div>
    ): null))
    return (
        <div className={style.offers}>
            <h2 className={style.heading}>ДОСТУПНЫЕ МЕСТА ДЛЯ СТАЖИРОВКИ</h2>
            <div className={style.container}>
                {cards}
            </div>
        </div>
    );
};

const Offers_connect = connect(mapStateToProps('candidate_invites'))(Offers);
export default Offers_connect;