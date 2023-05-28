const FEEDBACK_INTERN = "FEEDBACK_INTERN"
const FEEDBACK_MENTOR = "FEEDBACK_MENTOR"
export function feedbackActionCreator(value){
    if (value.person === 'mentor'){
        return {
            type:FEEDBACK_MENTOR,
            text:value.text,
            rating:value.rating,
        }
    }else{
        return {
            type:FEEDBACK_INTERN,
            text:value.text,
            rating:value.rating,
        }
    }

}

export {FEEDBACK_INTERN, FEEDBACK_MENTOR};
export default feedbackActionCreator