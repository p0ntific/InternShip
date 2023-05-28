import Feedback from "../../Feedback/Feedback";
import mapStateToProps from "../../mapStateToProps";
import {connect} from "react-redux";
import mapDispatchToProps from "../../mapDispatchToProps";

const InternFeedback = (props) => {
    return (
        <Feedback {...props}/>
    );
};

const InternFeedback_connect = connect(mapStateToProps('feedback_intern'), mapDispatchToProps('feedback_intern'))(InternFeedback);
export default InternFeedback_connect;