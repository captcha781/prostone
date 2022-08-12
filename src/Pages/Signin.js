// import { useEffect } from "react"
import axios from "axios";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { setAuthStatus } from "../features/data";
// import axios from "axios"
// import { setAuthStatus } from "../features/data"

const Signin = () => {
  let authSts = useSelector((state) => state.data.authStatus.auth);
  const [formData, setFormData] = useState({});
  const [signRes, setSignRes] = useState("")
  const [showModal, setModal] = useState(false)
  const dispatch = useDispatch()
  return (
    <>
      {authSts.auth ? (
        <Navigate to={"/u/dashboard"} />
      ) : (
        <>
          { showModal ? 
            <div className="absolute w-full mt-12">
              <div
                className="w-11/12 md:w-64 rounded-md h-20 mx-auto bg-white"
                data-aos={"fade-in"}
              >
                {signRes.auth ? <>
                  <p className="text-teal-600 text-sm p-3">{signRes.message}</p>
                </> 
                : <><p className="text-red-600 text-sm p-3">{signRes.message}</p></>}
              </div>
            </div> : <></>
          }

          <div className="w-full h-screen bg-gradient-to-br from-indigo-200 to-indigo-500 grid grid-cols-1 md:grid-cols-8 justify-center place-items-center items-center font-Outfit">
            <div className="md:col-span-1 xl:col-span-2"></div>
            <div className="col-span-1 md:col-span-6 xl:col-span-4 w-10/12 md:w-full grid grid-cols-1 md:grid-cols-2 rounded-2xl  shadow-sm shadow-slate-400 mx-auto items-stretch bg-white">
              <div
                className="hidden md:block md:col-span-1 h-96 w-full bg-cover rounded-tl-2xl rounded-bl-2xl"
                style={{
                  backgroundImage: "url('http://localhost:3000/moonnight.jpg')",
                }}
              ></div>

              <div className="col-span-1 md:col-span-1 p-6 text-slate-700">
                <h3 className="font-medium text-xl px-5 py-2.5 mb-5">
                  Sign In
                </h3>

                <label className="px-5 pt-7 pb-2">
                  Username, Email or Phone
                </label>
                <input
                  type={"text"}
                  required
                  className="mx-5 my-2 rounded-md p-1 outline-hidden bg-slate-100 focus:bg-slate-300 focus:outline-1 outline-slate-600"
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      userEntry: e.target.value.toLowerCase().trim(),
                    });
                  }}
                />

                <label className="px-5 py-2">Password</label>
                <input
                  type={"password"}
                  required
                  className="mx-5 my-2 rounded-md p-1 outline-hidden bg-slate-100 focus:bg-slate-300 focus:outline-1 outline-slate-600"
                  onChange={(e) => {
                    setFormData({ ...formData, password: e.target.value });
                  }}
                />
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
                    onClick={() => {
                      axios
                        .post("/signin", formData)
                        .then((loginResponse) => {
                          setSignRes(loginResponse.data)
                          setModal(true)
                          dispatch(setAuthStatus(loginResponse.data))
                          setTimeout(() => {
                            setModal(false)
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
      )}
    </>
  );
};

export default Signin;
