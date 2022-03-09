import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import ScrollPaginaton from "./components/ScrollPaginaton";
import { applyMiddleware, createStore } from "redux";
import { ScrollPaginationStore } from "./redux/ScrollPaginationStore";
import thunk from "redux-thunk";
const store = createStore(ScrollPaginationStore, applyMiddleware(thunk));
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ScrollPaginaton />
      </Provider>
    </div>
  );
}

export default App;
