import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./features/data";
import { Provider } from "react-redux";
import axios from "axios";
import MainRoute from "./Pages/MainRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:3001";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

const client = new QueryClient();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <MainRoute />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
