import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import Signin from "./Signin";
import Signout from "./Signout";
import Signup from "./Signup";
import App from "../App";
import ErrorPGNF from "./ErrorPGNF";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setAuthStatus, setUser } from "../features/data";
import { useEffect } from "react";


const MainRoute = () => {
  let authStatus = useSelector((state) => state.data.authStatus);
  const dispatch = useDispatch();
  console.log(authStatus);

  useEffect(() => {
    axios.get("/getAuthStatus")
    .then(response => {      
      // console.log(response.data);
      dispatch(setAuthStatus(response.data.auth))
      dispatch(setUser(response.data.user))
      // return response.data
      
    })
    .catch(err => console.log(err))
  }, [dispatch])

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
