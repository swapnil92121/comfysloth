import React from "react";
import ReactDOM from "react-dom";
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import fetchDataReducer from './reducer/fetchDataReducer'
import authReducer from './reducer/auth'
import { App } from "./App";


//store
const store = configureStore({
  reducer: {
    fetchData: fetchDataReducer,
    auth: authReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
})





ReactDOM.render(<>
  <Provider store={store}>
    <App />
  </Provider>
</>, document.getElementById('root'))