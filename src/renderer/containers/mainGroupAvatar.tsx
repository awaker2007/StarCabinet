import { connect } from "react-redux";
import MainGroupAvatar from "../components/mainGroupAvatar";
import IState from "../interface/IState";
import IProfile from "../interface/IProfile";

export interface MainGroupAvatarProps {
    profile: IProfile;
}

// Redux connection
const mapStateToProps = (state: IState) => {
    return {
        profile: state.profile
    };
};

const mapDispatchToProps = _dispatch => {
    return {};
};

// Which props to inject from the global atomic state
export default connect(mapStateToProps, mapDispatchToProps)(MainGroupAvatar);
