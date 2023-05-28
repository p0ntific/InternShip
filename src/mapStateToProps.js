function mapStateToProps(component) {
    switch(component) {
        case "login": {
            return function (state) {
                 return {
                     login: state.login.candidates.at(-1).mail
                 };
             }
         }
        case "registration": {
            return function (state) {
                return {
                    name: state.login.candidates.at(-1).firstName + ' ' + state.login.candidates.at(-1).lastName
                };
            }
        }
        case "my_info": {
            return function (state) {
                let info =state.myInfo.userInfo;
                return {
                    mail:info.mail,
                    firstName:info.firstName,
                    lastName:info.lastName,
                    phone:info.phone,
                    university:info.university,
                    resume:info.resume,
                    login:true,
                };
            }
        }
        case 'nav':{
            return function (state) {
                let info = state.myInfo.userInfo;
                return {
                    firstName:info.firstName,
                    lastName:info.lastName,
                    login:info.login,
                };
            }
        }
        case 'career_school':{
            return function (state) {
                let info = state.myInfo.userInfo;
                return {
                    careerSchool:info.careerSchool
                };
            }
        }
        case 'testing':{
            return function (state) {
                let info = state.myInfo.userInfo;
                return {
                    stage:info.testingStage
                };
            }
        }
        case 'candidate_invites':{
            return function (state) {
                return {
                    works:state.cards.invites
                };
            }
        }
        case 'card':{
            return function (state) {
                return {

                };
            }
        }
        case 'tasks':{
            return function (state) {
                return {
                    tasks:state.tasks.tasks
                };
            }
        }
        case 'feedback':{
            return function (state) {
                return {
                    firstName:state.feedback.mentor.firstName,
                    lastName:state.feedback.mentor.lastName,
                    info:state.feedback.mentor.info,
                    rating:state.feedback.mentor.rating,
                    img:state.feedback.mentor.img,
                    comment_text:state.feedback.mentor.comment_text,
                    comment_rating:state.feedback.mentor.comment_rating,
                };
            }
        }
         default: return null;
     }
 }

export default mapStateToProps;