import {bindActionCreators} from 'redux';
import loginActionCreator from "./actionCreators/loginActionCreator";
import registrationActionCreator from "./actionCreators/registrationActionCreator";
import myInfoActionCreator from "./actionCreators/myInfoActionCreator";
import cardActionCreator from "./actionCreators/cardActionCreator";
import feedbackActionCreator from "./actionCreators/feedbackActionCreator";

function mapDispatchToProps(component) {
    switch (component) {
        case "login":
            return function (dispatch) {
                return {
                    login: (value) => {
                        dispatch(loginActionCreator(value))
                    }
                };
            };
        case "registration":
            return function (dispatch) {
                return {
                    pushCandidate: (value) => {
                        dispatch(registrationActionCreator(value))
                    }
                };
            };
        case "my_info":
            return function (dispatch) {
                return {
                    updateMyInfo: (value) => {
                        dispatch(myInfoActionCreator(value))
                    }
                };
            };
        case "card":
            return function (dispatch) {
                return {
                    requestInvite: (value) => {
                        dispatch(cardActionCreator(value))
                    }
                };
            };
            case "feedback":
            return function (dispatch) {
                return {
                    submitFeedback: (value) => {
                        dispatch(feedbackActionCreator(value))
                    }
                };
            };
        default:
            return undefined;
    }
}


export default mapDispatchToProps;