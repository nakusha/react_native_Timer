// Import

// Actions
const START_TIMER = "START_TIMER";
const RESTART_TIMER = "RESTART_TIMER";
const ADD_SECOND = "ADD_SECOND";

// Action Creators
function startTimer(){
    return {
        type: START_TIMER
    }
}

function restartTimer(){
    return {
        type: RESTART_TIMER
    }
}

function addSecond(){
    return {
        type: ADD_SECOND
    }
}

// Reducer
const TIME_DURATION = 25 * 60

const initialState = {
    isPlaying: false,
    elapsedTime: 0,
    timerDuration: TIME_DURATION
}

function reducer(state = initialState, action){
    switch (action.type){
        case START_TIMER:
            return applyStartTimer(state, action);
        case RESTART_TIMER:
            return applyRestartTimer(state, action);
        case ADD_SECOND:
            return applyAddSecond(state, action);
        default:
            return state;
    }
}

// Reducer functions
function applyStartTimer(state){
    return {
        // state 만 바꾸기위해서 이렇게 한다.
        ...state,
        isPlaying: true
    };
}

function applyRestartTimer(state){
    return{
        ...state,
        isPlaying: false,
        elapsedTime: 0
    }
}

function applyAddSecond(state){
    if (state.elapsedTime < TIME_DURATION){
        return {
            ...state,
            elapsedTime: state.elapsedTime + 1
        }
    }else{
        return {
            ...state,
            elapsedTime: 0,
            isPlaying: false
        }
    }
}

// export Action creator
const actionCreators = {
    startTimer,
    restartTimer,
    addSecond
}

export { actionCreators };

// Export Reducer
export default reducer