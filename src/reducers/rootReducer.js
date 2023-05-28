import {combineReducers} from "redux";
import loginReducer from "./loginReducer";
import registrationReducer from "./registrationReducer";
import myInfoReducer from "./myInfoReducer";
import cardReducer from "./cardReducer";
import taskReducer from "./taskReducer";
import feedbackReducer from "./feedbackReducer";


const rootReducer = combineReducers({
        login:loginReducer,
        registration:registrationReducer,
        myInfo:myInfoReducer,
        cards:cardReducer,
        tasks:taskReducer,
        feedback:feedbackReducer,
})

export default rootReducer;