Redux - state management tool(state container)
 -. global state
    모든 components 에 영향을 줌(login etc...)
 -. local state
    
createStore를 이용하여 store를 생성하고
Provider를 이용하여 child에게 store의 값을 전달한다

index.js에서는 store에 관련된 작업을하고 presenter.js에서는 View작업만함