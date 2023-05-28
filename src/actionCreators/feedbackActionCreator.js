const FEEDBACK = "FEEDBACK"
export function feedbackActionCreator(value){
    return {
        type:FEEDBACK,
        text:value.comment_text,
        rating:value.comment_rating,
    }
}

export {FEEDBACK};
export default feedbackActionCreator