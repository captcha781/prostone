
import { useEffect, useState } from "react"
import Item from "./Item"
import { setHeader } from "../../features/data"
import { useDispatch } from "react-redux/es/exports"
import {Link} from "react-router-dom"

const Menu = () => {
    const [item, setItem] = useState("/")
    const dispatch = useDispatch()
    let loc;
    if(window.location.pathname !== "/"){
        let pather = window.location.pathname.split("/")
        loc = pather[pather.length -1 ][0].toUpperCase() + pather[pather.length -1].slice(1)    
    } else {
        loc = ""
    }

    useEffect(() => {
        setItem(window.location.pathname)
        dispatch(setHeader(loc))
        // eslint-disable-next-line
    }, [item])



    return (

        <div className="col-span-1 md:col-span-1 lg:col-span-2 bg-white p-3 duration-300 overflow-y-auto overflow-x-hidden" data-aos={"fade-right"}>

            <Link to={"/u/dashboard"} className="flex justify-between md:justify-center items-center mt-0 md:my-auto">
                <i className="bi bi-bag bg-indigo-600 py-1 px-2 text-center text-white rounded-md shadow-md shadow-slate-500"></i>
                <div className="mx-3 font-Outfit font-semibold text-lg text-gray-700 ">Laglytics</div>
                <i className="bi bi-list py-1 px-2 text-center md:hidden hover:bg-indigo-600 rounded-md" onClick={() => {
                    document.getElementById("menu").classList.toggle("hidden")
                }}></i>
            </Link>

            <div className={"hidden md:block mt-3 md:mt-10 py-4 font-Outfit font-base text-gray-500 w-8/12 mx-auto md:w-full"} id={"menu"} data-aos={"fade-in"}>

                <Item setItem={setItem} item={item} icon={"bi-pie-chart-fill"} placeholder={"Dashboard"} target={"/u/dashboard"} delay={"150"} />
                <Item setItem={setItem} item={item} icon={"bi-bar-chart"} placeholder={"LeaderBoard"} target={"/u/leaderboard"} delay={"150"} />
                <Item setItem={setItem} item={item} icon={"bi-cart3"} placeholder={"Orders"} target={"/u/order"} delay={"200"} />
                <Item setItem={setItem} item={item} icon={"bi-bag"} placeholder={"Products"} target={"/u/products"} delay={"250"} />
                <Item setItem={setItem} item={item} icon={"bi-graph-up"} placeholder={"Sales"} target={"/u/sales"} delay={"300"} />
                <Item setItem={setItem} item={item} icon={"bi-chat-left-dots"} placeholder={"Messages"} target={"/u/messages"} delay={"350"} />
                <Item setItem={setItem} item={item} icon={"bi-gear"} placeholder={"Settings"} target={"/u/settings"} delay={"400"} />
                <Item setItem={setItem} item={item} icon={"bi-box-arrow-right"} placeholder={"Signout"} target={"/signout"} delay={"450"} />

                <div className="w-full xl:w-3/4 mx-auto p-2 py-4 mt-24 text-sm bg-indigo-500 rounded-md text-center shadow-lg shadow-slate-500">
                    <i className="bi bi-bag bg-white py-1 px-2 text-center text-indigo-600 rounded-md shadow-md shadow-slate-500 font-bold"></i>
                    <p className="py-1 pt-2 text-sm text-white font-semibold">Laglytics Premium</p>
                    <p className="w-9/12 [font-size:8px;] mb-3 text-white mx-auto">Get full access to the Laglytics</p>
                    <a href="https://premium.laglytics.com" className="w-8/12 bg-white text-indigo-600 rounded-md mx-auto px-2 py-1 mt-4 font-Outfit font-semibold text-sm hover:bg-gray-300 hover:text-gray-700">Buy Now</a>
                </div>

            </div>


        </div>

    )
}

export default Menu