import {MY_INFO} from "../actionCreators/myInfoActionCreator";

const initialState = {
    userInfo:
        {
            id: 0,
            firstName: 'Андрей',
            lastName: 'Горошко',
            mail: 'abobus@mail.ru',
            password: '12345678',
            phone:'8 (960) 258 06 05',
            role:'КАНДИДАТ',
            resume : ' ',
            login: true,
            university: '',
            testingStage:2,
            careerSchool:true,
        }
}


function myInfoReducer(state = initialState, action) {
    switch (action.type) {
        case MY_INFO:
            let newInfo = {
                id: state.userInfo.id,
                login: true,
                mail: action.mail,
                password: state.userInfo.password,
                firstName: action.firstName,
                lastName: action.lastName,
                phone:action.phone,
                resume:action.resume,
                university: action.university
            }
            let newState = {...state, userInfo: newInfo}
            return newState
        default:
            return state
    }
}


export default myInfoReducer;