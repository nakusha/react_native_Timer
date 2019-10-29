//connet는 store에 연결하는것을 도와줌
import { connect } from "react-redux";
import Timer from "./presenter";


function mapStateToProps(state){
    const { isPlaying, elapsedTime, timerDuration } = state;

    return {
        isPlaying,
        elapsedTime,
        timerDuration
    }
}

export default connect(mapStateToProps)(Timer);
