import {CARD} from "../actionCreators/cardActionCreator";

let initialState = {
    tasks: [
        {
            name: 'Центр 1',
            stage: '3',
            link: '#'
        },
        {
            name: 'Центр 2',
            stage: '2',
            link: '#'
        },
        {
            name: 'Центр 3',
            stage: '0',
            link: '#'
        }
    ]
}

function taskReducer(state = initialState) {
    return state
}


export default taskReducer;