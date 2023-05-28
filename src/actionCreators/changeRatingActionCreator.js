const CHANGE_RATING_INTERN = "CHANGE_RATING_INTERN"
const CHANGE_RATING_MENTOR = "CHANGE_RATING_MENTOR"

export function changeRatingActionCreator(value){
    if (value.person === 'mentor'){
        return {
            type:CHANGE_RATING_MENTOR,
            rating:value.rating
        }
    }else{
        return {
            type:CHANGE_RATING_INTERN,
            rating:value.rating
        }
    }

}

export {CHANGE_RATING_INTERN, CHANGE_RATING_MENTOR};
export default changeRatingActionCreator