import {CARD} from "../actionCreators/cardActionCreator";
import work1 from "../images/work1.jpg";
import work2 from "../images/work2.jpg";
import work3 from "../images/work3.jpeg";

let initialState = {
    invites: [
        {
            id:0,
            place: 'Центр 1',
            status: 'НА РАССМОТРЕНИИ',
            description: 'описание работы, местоположение, особенности',
            rating: 5,
            img: work1
        },
        {
            id:1,
            place: 'Центр 2',
            status: '',
            description: 'описание работы, местоположение, особенности',
            rating: 4,
            img: work2
        },
        {
            id:2,
            place: 'Центр 3',
            status: '',
            description: 'описание работы, местоположение, особенности',
            rating: 1,
            img: work3
        },
        {
            id:3,
            place: 'Центр 4',
            status: 'НА РАССМОТРЕНИИ',
            description: 'описание работы, местоположение, особенности',
            rating: 5,
            img: work1
        },
        {
            id:4,
            place: 'Центр 5',
            status: 'ПРИНЯТО',
            description: 'описание работы, местоположение, особенности',
            rating: 4,
            img: work2
        },
        {
            id:5,
            place: 'Центр 6',
            status: 'ПРИНЯТО',
            description: 'описание работы, местоположение, особенности',
            rating: 5,
            img: work3
        },
        {
            id:6,
            place: 'Центр 7',
            status: 'НА РАССМОТРЕНИИ',
            description: 'описание работы, местоположение, особенности',
            rating: 5,
            img: work1
        },
        {
            id:7,
            place: 'Центр 8',
            status: 'ПРИНЯТО',
            description: 'описание работы, местоположение, особенности',
            rating: 3,
            img: work2
        },
        {
            id:8,
            place: 'Центр 9',
            status: 'ПРИНЯТО',
            description: 'описание работы, местоположение, особенности',
            rating: 5,
            img: work3
        }
    ]
}

function cardReducer(state = initialState, action) {
    switch (action.type) {
        case CARD:
            let new_state = {...state};
            new_state.invites = [...state.invites]
            if (action.status === 'НА РАССМОТРЕНИИ'){
                new_state.invites[action.id] = {...state.invites[action.id], status: ''}
            }
            if (action.status === ''){
                new_state.invites[action.id] = {...state.invites[action.id], status: 'НА РАССМОТРЕНИИ'}
            }
            console.log(new_state)
            return new_state;
        default:
            return state
    }
}


export default cardReducer;