import {MY_INFO} from "../actionCreators/myInfoActionCreator";
import mentor_img from '../images/mentor.jpg'
import {FEEDBACK} from "../actionCreators/feedbackActionCreator";

const initialState = {
    mentor:
        {
            firstName: 'Василий',
            lastName: 'Мимозов Аркадьевич',
            info: 'Товарищи! Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции способствует подготовки и реализации позиций, занимаемых участниками в отношении поставленных задач.',
            img: mentor_img,
            rating: 4,
        },
    comment: {
        comment_text: '',
        comment_rating: 5,
    }
}


function feedbackReducer(state = initialState, action) {
    switch (action.type) {
        case FEEDBACK:
            let new_state = {...state}
            new_state.comment = {...state.comment, comment_text: action.text,comment_rating: action.rating}
            console.log(new_state)
            return new_state
        default:
            return state
    }
}


export default feedbackReducer;