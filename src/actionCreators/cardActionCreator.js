const CARD = "CARD"

export function cardActionCreator(value) {
    return {
        type: CARD,
        id: value.id,
        status: value.status
    }
}

export {CARD};
export default cardActionCreator