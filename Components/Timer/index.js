//connet는 store에 연결하는것을 도와줌
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Timer from "./presenter";
import { actionCreators as timerActions } from "../../reducer";

//provider에서 store의 값을 가져오는 함수
function mapStateToProps(state){
    const { isPlaying, elapsedTime, timerDuration } = state;

    return {
        isPlaying,
        elapsedTime,
        timerDuration
    }
}

//액션을 reducer로 보내는 함수
function mapDispatchToProps(dispatch){
    return  {
        startTimer: bindActionCreators(timerActions.startTimer, dispatch),
        restartTimer: bindActionCreators(timerActions.restartTimer, dispatch),
        addSecond: bindActionCreators(timerActions.addSecond, dispatch)

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
