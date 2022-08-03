
import { useEffect, useState } from "react"
import Item from "./Item"

const Menu = ({ url }) => {
    const [item, setItem] = useState("")
    useEffect(() => {
        setItem(window.location.pathname)
    }, [])


    return (

        <div className="col-span-1 md:col-span-1 lg:col-span-2 bg-white p-3 duration-300">

            <div className="flex justify-between md:justify-center items-center mt-0 md:my-auto">
                <i className="bi bi-bag bg-indigo-600 py-1 px-2 text-center text-white rounded-md shadow-md shadow-slate-500"></i>
                <div className="mx-3 font-Outfit font-semibold text-lg text-gray-700 ">Prostone</div>
                <i className="bi bi-list py-1 px-2 text-center md:hidden hover:bg-indigo-600 rounded-md" onClick={() => {
                    document.getElementById("menu").classList.toggle("hidden")
                }}></i>
            </div>

            <div className={"hidden md:block mt-3 md:mt-10 py-4 font-Outfit font-base text-gray-500 w-8/12 mx-auto md:w-full "} id={"menu"}>

                <Item setItem={setItem} item={item} icon={"bi-pie-chart-fill"} placeholder={"Dashboard"} target={"/"} />
                <Item setItem={setItem} item={item} icon={"bi-bar-chart"} placeholder={"LeaderBoard"} target={"/leaderboard"} />
                <Item setItem={setItem} item={item} icon={"bi-cart3"} placeholder={"Orders"} target={"/order"} />
                <Item setItem={setItem} item={item} icon={"bi-bag"} placeholder={"Products"} target={"/products"} />
                <Item setItem={setItem} item={item} icon={"bi-graph-up"} placeholder={"Sales"} target={"/sales"} />
                <Item setItem={setItem} item={item} icon={" bi-chat-left-dots"} placeholder={"Messages"} target={"/messages"} />
                <Item setItem={setItem} item={item} icon={"bi-gear"} placeholder={"Settings"} target={"/settings"} />
                <Item setItem={setItem} item={item} icon={"bi-box-arrow-right"} placeholder={"Signout"} target={"/signout"} />

            </div>

        </div>

    )
}

export default Menu