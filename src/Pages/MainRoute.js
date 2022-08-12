import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import Signin from "./Signin";
import Signout from "./Signout";
import Signup from "./Signup";
import App from "../App";
import ErrorPGNF from "./ErrorPGNF";
import { useQuery } from "@tanstack/react-query";

import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setAuthStatus } from "../features/data";

const MainRoute = () => {
  let authStatus = useSelector((state) => state.data.authStatus);
  const dispatch = useDispatch();
  console.log(authStatus);
  
  const {data} = useQuery(["auth"], ()=> {
    return axios.get("/getAuthStatus").then(response => {
      dispatch(setAuthStatus(response.data))
      return response.data
    });
    
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signout" element={<Signout />} />
        <Route path="/u/*" element={<App />} />
        <Route path="/*" element={<ErrorPGNF />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoute;
