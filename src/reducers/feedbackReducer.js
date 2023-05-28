import {MY_INFO} from "../actionCreators/myInfoActionCreator";
import mentor_img from '../images/mentor.jpg'
import {FEEDBACK_MENTOR} from "../actionCreators/feedbackActionCreator";
import {CHANGE_RATING_MENTOR} from "../actionCreators/changeRatingActionCreator";
import {FEEDBACK_INTERN} from "../actionCreators/feedbackActionCreator";
import {CHANGE_RATING_INTERN} from "../actionCreators/changeRatingActionCreator";
import intern from '../images/intern.jpg'

const initialState = {
    intern:
        {
            firstName: 'Алексей',
            lastName: 'Шаров Борисович',
            info: 'Товарищи! Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции способствует подготовки и реализации позиций, занимаемых участниками в отношении поставленных задач.',
            img: intern,
            rating: 5
        },
    mentor:
        {
            firstName: 'Василий',
            lastName: 'Мимозов Аркадьевич',
            info: 'Товарищи! Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции способствует подготовки и реализации позиций, занимаемых участниками в отношении поставленных задач.',
            img: mentor_img,
            rating: 4,
        },
    comment_mentor: {
        comment_text: '',
        comment_rating: 5,
    },
    comment_intern: {
        comment_text: '',
        comment_rating: 4,
    }
}


function feedbackReducer(state = initialState, action) {

    switch (action.type) {
        case FEEDBACK_MENTOR:
            let new_state = {...state}
            new_state.comment_mentor = {
                ...state.comment_mentor,
                comment_text: action.text,
                comment_rating: action.rating
            }
            return new_state

        case FEEDBACK_INTERN:
            let new_state_2 = {...state}
            new_state_2.comment_intern = {
                ...state.comment_intern,
                comment_text: action.text,
                comment_rating: action.rating
            }
            return new_state_2

        case CHANGE_RATING_MENTOR:
            let new_state_3 = {...state}
            new_state_3.comment_mentor = {...state.comment_mentor, comment_rating: action.rating}
            return new_state_3

        case CHANGE_RATING_INTERN:
            let new_state_4 = {...state}
            new_state_4.comment_intern = {...state.comment_intern, comment_rating: action.rating}
            return new_state_4
        default:
            return state
    }
}


export default feedbackReducer;