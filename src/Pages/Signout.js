import axios from "axios"
import { useLayoutEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Navigate } from "react-router-dom"
import { setAuthStatus } from "../features/data"

const Signout = () => {
    const dispatch = useDispatch()
    const [redirect, setRedirect] = useState(false)
    useLayoutEffect(() => {
        axios.post("/signout", {})
            .then(response => {
                dispatch(setAuthStatus(response.data.auth))
                localStorage.removeItem("jwt")
                setRedirect(true)
            })
            .catch(err => console.log(err))
            // eslint-disable-next-line
    }, [])

    return (
        <div className="w-full h-screen justify-center items-center">
            <div className="overflow-x-hidden w-full text-center" data-aos={"fade-left"}>
                Signing Out
                {redirect ? <Navigate to={"/signin"} /> : <></>}
            </div>
        </div>
    )
}

export default Signout