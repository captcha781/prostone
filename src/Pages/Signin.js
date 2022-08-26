// import { useEffect } from "react"
import axios from "axios";
import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { setAuthStatus, setUser } from "../features/data";
// import axios from "axios"
// import { setAuthStatus } from "../features/data"

const Signin = () => {
  let authSts = useSelector((state) => state.data.authStatus);

  const userEntryRef = useRef("")
  const passwordRef = useRef("")

  const [signRes, setSignRes] = useState("")
  const [showModal, setModal] = useState(false)
  const [redirect, setRedirect] = useState(false)

  const dispatch = useDispatch()
  // console.log(authSts, "logging from signin")

  let navigate = useNavigate();

  // if (authSts) {
  //   return <Navigate to={"/u/dashboard"} />
  // }

  return (
    <>
      {authSts && !redirect ? <Navigate to={"/u/dashboard"} /> :
        <>
          {showModal ?
            <div className="absolute w-full mt-12 font-Outfit">


              {signRes.auth ?

                <>
                  <div
                    className="w-11/12 md:w-max rounded-md text-center h-auto mx-auto bg-white shadow-sm shadow-green-400 border-b-4 border-green-500"
                    data-aos={"fade-in"}
                  >
                    <p className="text-sm font-semibold  p-3"><i className="bi bi-check-lg bg-green-400 p-0.5 px-1 rounded-full text-white mr-2"></i>{signRes.message}</p>
                  </div>
                </>
                :

                <>
                  <div
                    className="w-11/12 md:w-max rounded-md text-center h-auto mx-auto bg-white shadow-sm shadow-red-400 border-b-4 border-red-500"
                    data-aos={"fade-in"}
                  >
                    <p className="text-sm font-semibold  p-3"><i className="bi bi-check-lg bg-red-400 p-0.5 px-1 rounded-full text-white mr-2"></i>{signRes.message}</p>
                  </div>
                </>

              }

            </div> : <></>
          }

          <div className="w-full h-screen bg-gradient-to-br from-indigo-200 to-indigo-500 grid grid-cols-1 md:grid-cols-8 justify-center place-items-center items-center font-Outfit overflow-auto py-10">
            <div className="md:col-span-1 xl:col-span-2"></div>
            <div className="col-span-1 md:col-span-6 xl:col-span-4 w-10/12 md:w-full grid grid-cols-1 md:grid-cols-2 rounded-2xl  shadow-sm shadow-slate-400 mx-auto items-stretch bg-white overflow-auto my-10">
              <div
                className="hidden md:block md:col-span-1 h-96 w-full bg-cover rounded-tl-2xl rounded-bl-2xl bg-center"
                style={{
                  backgroundImage: "url('http://localhost:3000/moonnight.jpg')",
                }}
              ></div>

              <div className="col-span-1 md:col-span-1 p-6 text-slate-700">
                <h3 className="font-medium text-xl px-5 py-2.5 mb-5">
                  Sign In
                </h3>
                <div className="w-full">
                  <label className="px-5 pt-7 pb-2">
                    Username, Email or Phone
                  </label>
                  <input
                    type={"text"}
                    ref={userEntryRef}
                    required
                    className="mx-5 my-2 rounded-md p-1 outline-hidden bg-slate-100 focus:bg-slate-300 focus:outline-1 outline-slate-600 w-3/4"
                  // onChange={(e) => {
                  //   setFormData({
                  //     ...formData,
                  //     userEntry: e.target.value.toLowerCase().trim(),
                  //   });
                  // }}
                  />
                </div>
                <div className="w-full">
                  <div>
                    <label className="px-5 py-2">Password</label>
                  </div>
                  <input
                    type={"password"}
                    ref={passwordRef}
                    required
                    className="mx-5 my-2 rounded-md p-1 outline-hidden bg-slate-100 focus:bg-slate-300 focus:outline-1 outline-slate-600 w-3/4"
                  // onChange={(e) => {
                  //   setFormData({ ...formData, password: e.target.value });
                  // }}
                  />
                </div>
                <p className="px-5 my-2 text-sm">
                  Don't know your password,{" "}
                  <Link
                    to={"/resetpassword"}
                    className="text-blue-600 underline"
                  >
                    Reset here
                  </Link>
                </p>
                <p className="px-5 my-2 text-sm">
                  Don't have an account,{" "}
                  <Link
                    to={"/signup"}
                    className="text-blue-600 underline"
                  >
                    Sign Up
                  </Link>
                </p>
                <div className="relative bottom-0 mx-5 mt-5">
                  <button
                    className="rounded-md bg-teal-500 text-white border border-transparent hover:text-teal-600 hover:bg-slate-100 hover:border-teal-600 px-4 py-1 duration-300"
                    onClick={(e) => {
                      e.preventDefault()
                      
                      axios
                        .post("/signin", { userEntry: userEntryRef.current.value, password: passwordRef.current.value })
                        .then((loginResponse) => {
                          dispatch(setUser(loginResponse.data.user))
                          setSignRes(loginResponse.data)
                          // console.log(loginResponse.data);
                          setModal(true)
                          setRedirect(true)
                          if (loginResponse.data.auth === true) {
                            localStorage.setItem("jwt", loginResponse.data.token)
                          }
                          dispatch(setAuthStatus(loginResponse.data.auth))
                          
                          setTimeout(() => {
                            setModal(false)
                            if(loginResponse.data.auth){
                              navigate("/u/dashboard")
                            }
                          }, 5000)
                        })
                        .catch((err) => {
                          console.log(err);
                        });
                      

                    }}
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </div>
            <div className="md:col-span-1 xl:col-span-2"></div>
          </div>
        </>
      }
    </>
  );
};

export default Signin;
