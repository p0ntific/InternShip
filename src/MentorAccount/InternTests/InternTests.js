import style from "./InternTests.module.scss";


const InternTests = () => {
    let intern = {
        tests: [
            {
                name: 'личное собеседование',
                comment: 'положительное впечатление, приятный человек',
                score: 78
            },
            {
                name: 'онлайн СТЕПИК',
                comment: null,
                score: 80
            },

        ]
    }
    let tests = intern.tests.map(test => (
        <div className={style.test}>
            <h3 className={style.heading}>{test.name}</h3>
            {(test.comment !== '' && test.comment !== ' ' && test.comment !== null && test.comment !== undefined) ? (
                <div className={style.comment}>
                    <p className={style.text}>
                        <span className={style.heading_little}>Отзыв: </span>{test.comment}
                    </p>
                </div>
            ) : null
            }
            <div className={style.score}>ОЧКИ: <span className={style.heading_score}>{test.score}</span> </div>
        </div>
    ))

    return (
        <div className={style.tests}>
            {tests}
        </div>
    )
}

export default InternTests;