import {LOGIN} from "../actionCreators/loginActionCreator";

const initialState = {
    candidates: [
        {
            id: 0,
            firstName: 'andrey',
            lastName: 'Ivanov',
            mail: 'abobus@mail.ru',
            password: '12345678',
            login: true,
        }
    ]
}


function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            let newState = {...state};
            newState.candidates = {...state.candidates}
            newState.candidates[0] = {
                ...state.candidates[0],
                login: !(state.candidates[0].login),
                mail: action.mail,
                password: action.password
            }
            alert(newState.candidates[0].mail + ' вошел в аккаунт')
            return newState
        default:
            return state
    }
}


export default loginReducer;