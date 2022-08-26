import { useRef, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setAuthStatus, setUser } from "../features/data"
import { Navigate, useNavigate } from "react-router"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/bootstrap.css";
import axios from "axios"

const Signup = () => {
  const showPasswordHandler = (e) => {
    let pass = document.getElementById("password_id")
    let passx = document.getElementById("password_idx")
    let icon = document.getElementById("icon")
    let iconx = document.getElementById("iconx")

    if (pass.getAttribute("type") === "password") {
      pass.setAttribute("type", "text")
      passx.setAttribute("type", "text")
    } else {
      pass.setAttribute("type", "password")
      passx.setAttribute("type", "password")
    }
    icon.classList.toggle("bi-eye")
    icon.classList.toggle("bi-eye-slash")
    iconx.classList.toggle("bi-eye")
    iconx.classList.toggle("bi-eye-slash")
  }



  const authSts = useSelector(state => state.data.authStatus)

  let date = new Date()

  const [showModal, setShowModal] = useState(false)
  const [createRes, setCreateRes] = useState("")
  const [redirect, setRedirect] = useState(false)
  const [countryCode, setCountryCode] = useState("+91")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const addressRef = useRef("")
  const countryRef = useRef("+91")
  return (
    <> {authSts && !redirect ? <Navigate to={"/u/dashboard"} /> :
      <>
        {showModal ?
          <div className="absolute w-full mt-12 font-Outfit">
            {createRes.auth ?
              <>
                <div
                  className="w-11/12 md:w-max rounded-md text-center h-auto mx-auto bg-white shadow-sm shadow-green-400 border-b-4 border-green-500"
                  data-aos={"fade-in"}
                >
                  <p className="text-sm font-semibold  p-3"><i className="bi bi-check-lg bg-green-400 p-0.5 px-1 rounded-full text-white mr-2"></i>{createRes.message}</p>
                </div>
              </>
              :
              <>
                <div
                  className="w-11/12 md:w-max rounded-md text-center h-auto mx-auto bg-white shadow-sm shadow-red-400 border-b-4 border-red-500"
                  data-aos={"fade-in"}
                >
                  <p className="text-sm font-semibold  p-3"><i className="bi bi-check-lg bg-red-400 p-0.5 px-1 rounded-full text-white mr-2"></i>{createRes.message}</p>
                </div>
              </>
            }
          </div> : <></>
        }

        <div className="w-full h-screen bg-gradient-to-br from-indigo-200 to-indigo-500 grid grid-cols-1 md:grid-cols-8 xl:grid-cols-10 justify-center place-items-center md:place-items-center items-center  md:py-auto md:items-center font-Outfit">
          <div className="md:col-span-2 lg:col-span-3 xl:col-span-4 py-5 xl:py-0"></div>
          <div className="col-span-1 md:col-span-4 lg:col-span-2 xl:col-span-2 w-10/12 md:w-full md:h-3/4 h-full xl:h-2/4 overflow-auto grid grid-cols-1 md:grid-cols-1 rounded-2xl  shadow-sm shadow-slate-400 mx-auto  bg-white lg:py-3">
            <form className="w-11/12 lg:w-10/12 mx-auto p-3 py-5" id="signup_form">
              <h2 className="text-xl text-gray-600 font-semibold mb-5">Sign Up<span className="mx-2  text-sm font-normal bg-gradient-to-r from-indigo-300 to-violet-500 bg-clip-text fill-transparent text-transparent">Create it now!</span></h2>

              <div>
                <label className="font-normal">
                  First Name <span className="text-red-600">*</span>
                </label>
                <input
                  type={"text"}
                  name={"firstname"}
                  required={true}
                  className="font-normal rounded-md p-1 outline-hidden bg-slate-100 focus:bg-slate-200 focus:outline-1 outline-slate-600 w-full"
                />
              </div>
              {/* <Button type={"primary"}>Primary</Button> */}
              <div className="mt-3">
                <label className="font-normal">
                  Last Name <span className="text-red-600">*</span>
                </label>
                <input
                  type={"text"}
                  name={"lastname"}
                  required={true}
                  className="font-normal rounded-md p-1 outline-hidden bg-slate-100 focus:bg-slate-200 focus:outline-1 outline-slate-600 w-full"
                />
              </div>

              <div className="mt-3">
                <label className="font-normal">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type={"email"}
                  name={"email"}
                  required={true}
                  className="font-normal rounded-md p-1 outline-hidden bg-slate-100 focus:bg-slate-200 focus:outline-1 outline-slate-600 w-full"
                />
              </div>

              <div className="mt-3">
                <label className="font-normal">
                  Username <span className="text-red-600">*</span>
                </label>
                <input
                  type={"text"}
                  name={"username"}
                  required={true}
                  className="font-normal rounded-md p-1 outline-hidden bg-slate-100 focus:bg-slate-200 focus:outline-1 outline-slate-600 w-full"
                />
              </div>

              <div className="mt-3">
                <label className="font-normal">
                  Your Profession or Role <span className="text-red-600">*</span>
                </label>
                <input
                  type={"text"}
                  name={"role"}
                  required={true}
                  className="font-normal rounded-md p-1 outline-hidden bg-slate-100 focus:bg-slate-200 focus:outline-1 outline-slate-600 w-full"
                />
              </div>

              <div className="mt-3">
                <label className="font-normal">
                  Password <span className="text-red-600">*</span>
                </label>
                <input
                  type={"password"}
                  name={"password"}
                  required={true}
                  id={"password_id"}
                  className="font-normal rounded-md p-1 outline-hidden bg-slate-100 focus:bg-slate-200 focus:outline-1 outline-slate-600 w-full"
                />
                <i className=" mt-1 -ml-5 bi bi-eye" id="icon" onClick={showPasswordHandler}></i>
                <p className="text-xs text-gray-500 mt-1">Your password should contain 1 uppercase, 1 lowercase, 1 symbol, 1 number and minimum 8 to maximum 25 characters </p>
              </div>

              <div className="mt-3">
                <label className="font-normal">
                  Confirm Password <span className="text-red-600">*</span>
                </label>
                <input
                  type={"password"}
                  name={"confirmpassword"}
                  required={true}
                  id={"password_idx"}
                  className="font-normal rounded-md p-1 outline-hidden bg-slate-100 focus:bg-slate-200 focus:outline-1 outline-slate-600 w-full"
                />
                <i className="mt-1 -ml-5 bi bi-eye" id={"iconx"} onClick={showPasswordHandler}></i>
              </div>

              <div className="mt-3">
                <label className="font-normal">
                  Country Code <span className="text-red-600">*</span>
                </label>
                {/* <input
                  type={"tel"}

                  required
                  className="font-normal rounded-md p-1 outline-hidden bg-slate-100 focus:bg-slate-200 focus:outline-1 outline-slate-600 w-full"
                /> */}
                <PhoneInput
                  inputClass="h-7 max-w-full bg-slate-100 font-Outfit cursor-pointer"
                  inputProps={{ "disabled": true, "name": "countryCode", "style": { backgroundColor: "rgb(241, 245, 249)", cursor: "default", outline: "hidden", width: "100%" }, "ref": countryRef }}
                  containerClass="h-7 bg-transparent w-7/12 border-none outline-hidden"
                  containerStyle={{ border: "none", outline: "hidden", width: "100%" }}
                  buttonClass="h-8 bg-slate-100 mt-1"
                  placeholder="Country Code here"
                  country={"in"}
                  enableSearch={true}
                  value={countryCode}
                  onChange={(countryCode) => {
                    setCountryCode(`+${countryCode}`)
                  }} />
              </div>

              <div className="mt-3">
                <label className="font-normal">
                  Phone Number <span className="text-red-600">*</span>
                </label>
                <input
                  type={"tel"}
                  name={"phonenumber"}
                  required={true}
                  className="font-normal rounded-md p-1 outline-hidden bg-slate-100 focus:bg-slate-200 focus:outline-1 outline-slate-600 w-full"
                />
              </div>

              <div className="mt-3">
                <label className="font-normal">
                  Date of Birth <span className="text-red-600">*</span>
                </label>
                <input
                  type={"date"}
                  min={"1950-01-01"}
                  max={`${date.toLocaleDateString("en-UK", { year: "numeric" })}-${date.toLocaleDateString("en-UK", { month: "2-digit" })}-${date.toLocaleDateString("en-UK", { day: "2-digit" })}`}
                  name={"dateOfBirth"}
                  required={true}
                  className="font-normal rounded-md p-1.5 outline-hidden bg-slate-100 focus:bg-slate-200 focus:outline-1 outline-slate-600 w-full"
                />
              </div>

              <div className="mt-3">
                <label className="font-normal">
                  Address <span className="text-red-600">*</span>
                </label>
                <textarea
                  type={"text"}
                  rows={"4"}
                  name={"address"}
                  required={true}
                  maxLength={200}
                  ref={addressRef}
                  className="font-normal rounded-md p-1 outline-hidden bg-slate-100 focus:bg-slate-200 focus:outline-1 outline-slate-600 w-full resize-none"
                />
              </div>

              <div className="mt-3">
                <button type="reset" className="px-4 py-1.5 bg-amber-300 rounded-md shadow-md shadow-amber-100  border border-transparent text-white hover:text-amber-300 hover:border-amber-600 hover:bg-transparent transition-all duration-150" >Reset</button>

                <button type="submit" className="px-4 py-1.5 bg-blue-600 rounded-md shadow-md shadow-blue-300 float-right border border-transparent text-white hover:text-blue-600 hover:border-blue-600 hover:bg-transparent transition-all duration-150" onClick={(e) => {
                  e.preventDefault()
                  setRedirect(false)
                  let form = new FormData(document.getElementById("signup_form"))
                  let data = {}

                  for (const pair of form.entries()) {
                    if (pair[1].length < 1) {
                      alert("Please Fillout all the fields...")
                      return
                    }
                    data[pair[0]] = pair[1]
                  }
                  // data.phonenumber = parseInt(data.phonenumber)

                  data["countryCode"] = countryRef.current.value
                  data["address"] = addressRef.current.value
                  console.table(data);
                  axios.post("/signup", data)
                    .then(response => {
                      // console.log(response);
                      dispatch(setUser(response.data.user))
                      setCreateRes(response.data)
                      setShowModal(true)
                      if (response.data.auth && response.data.creation) {
                        localStorage.setItem("jwt", response.data.token)
                      }
                      setTimeout(() => {
                        dispatch(setAuthStatus(response.data.auth))

                        setShowModal(false)
                        if (response.data.auth) {
                          navigate("/u/dashboard")
                        }
                      }, 5000)
                    })
                    .catch(err => {

                    })

                }} >Create</button>
              </div>

            </form>

          </div>
          <div className="md:col-span-2 lg:col-span-3 xl:col-span-4 py-5 xl:py-0"></div>
        </div>
      </>
    }</>
  )
}

export default Signup