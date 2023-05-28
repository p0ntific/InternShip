import Feedback from "../../Feedback/Feedback";
import mapStateToProps from "../../mapStateToProps";
import mapDispatchToProps from "../../mapDispatchToProps";
import {connect} from "react-redux";

const MentorFeedback = (props) => {

    return (
        <Feedback {...props}/>
    )
}
const MentorFeedback_connect = connect(mapStateToProps('feedback_mentor'), mapDispatchToProps('feedback_mentor'))(MentorFeedback);
export default MentorFeedback_connect;