import style from './Map.module.scss'
const Map = ()=>{
    return(
        <div className={style.container}>
            <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A9170ee6747e70969ae10a6208bc53c03f4d00bf3ead37b09b50c379bbe9ac0f6&amp;source=constructor"
                width="100%" height="720" frameBorder="0"></iframe>
        </div>
    )
}

export default Map;