import {REGISTRATION} from "../actionCreators/registrationActionCreator";

const initialState = {
    candidates: [
        {
            id: 0,
            firstName:'andrey',
            lastName:'Ivanov',
            mail: 'abobus@mail.ru',
            password: '12345678',
            login: false,
        },
    ]

}


function registrationReducer(state = initialState, action) {
    switch (action.type) {
        case REGISTRATION:
            let newState = {...state};
            let newCandidate = {id:state.candidates.at(-1).id +1 , login: true, mail:action.mail, password:action.password, firstName:action.firstName, lastName:action.lastName}
            newState.candidates=[...state.candidates, newCandidate]
            return newState
        default:
            return state
    }
}


export default registrationReducer;