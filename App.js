import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import { createStore } from "redux"
import reducer from "./reducer";
import Timer from "./Components/Timer";

let store = createStore(reducer);

export default class App extends React.Component{
  render() {
    return (
      <Provider store={store}>
        <Timer />
      </Provider>
    )
  }
}
