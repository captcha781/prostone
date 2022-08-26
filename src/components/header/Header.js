import { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"



const Header = () => {
    const header = useSelector(state => state.data.headerVal)
    const user = useSelector(state => state.data.user)
    const [langMenu, setLangMenu] = useState(false)
    const [profiler, setProfiler] = useState(false)
    const [notify, setNotify] = useState(false)

    return (
        <div className=" px-3 py-1.5 w-full font-Outfit grid grid-cols-1 md:grid-cols-12 items-center overflow-y-hidden gap-y-5 md:gap-y-0" data-aos={"fade-down"}>
            <div className="text-lg font-semibold tracking-wide col-span-1 md:col-span-7 text-indigo-900 grid grid-cols-3 md:grid-cols-12 px-1 md:px-3 items-center">
                <div className="text-sm lg:text-lg col-span-1 md:col-span-4">{header}</div>
                <div className="col-span-2 md:col-span-8 font-medium"><input type={"search"} className="rounded-md outline-none focus:border focus:border-gray-300 border px-2 py-1.5 text-sm w-11/12 bg-slate-100 mx-auto focus:bg-slate-300" placeholder="Search" /></div>
            </div>
            <div className="text-sm lg:text-lg font-semibold tracking-wide col-span-1 md:col-span-5 text-indigo-900 grid grid-cols-12 items-center">
                <div className="col-span-4">
                    <div className="w-8/12 rounded-md  flex justify-center px-1.5 py-1.5 items-center cursor-pointer" id="menu-button" aria-expanded="true" aria-haspopup="true" onClick={() => {
                        setLangMenu(!langMenu)
                        setNotify(false)
                        setProfiler(false)
                    }}>

                        <div className="text-xs">Quick links</div>
                        <div className="text-indigo-900 text-xs mx-1"><i className="bi bi-caret-down-fill"></i></div>
                    </div>
                    {langMenu && <div className="origin-top-right absolute right-30 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1" data-aos={"fade-down"}>
                        <div className="py-1" role="none">
                            <Link to="/" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Some Option</Link>
                            <Link to="/" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Some Option</Link>
                            <Link to="/" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Some Option</Link>



                        </div>
                    </div>}
                </div>
                <div className="col-span-3"><div className="w-8/12 rounded-md  flex justify-center px-1.5 py-1.5 items-center cursor-pointer" id="menu-button" aria-expanded="true" aria-haspopup="true" onClick={() => {
                    setNotify(!notify)
                    setProfiler(false)
                    setLangMenu(false)
                }}>

                    <div className="text-xs">Notifications</div>
                    <div className=" text-xs mx-1.5 text-yellow-500"><i className="bi bi-bell"></i></div>
                </div>
                {notify && <div className="origin-top-right absolute right-30 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1" data-aos={"fade-down"}>
                        <div className="py-1" role="none">

                            <Link to="/" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Some Notify</Link>
                            <Link to="/" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Some Notify</Link>
                            <Link to="/" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Some Notify</Link>

                        </div>
                    </div>}
                </div>
                
                <div className="col-span-5"><div className="w-full xl:w-8/12 rounded-md bg-slate-100 flex justify-center px-1.5 items-center cursor-pointer" id="menu-button" aria-expanded="true" aria-haspopup="true" onClick={() => {
                    setProfiler(!profiler)
                    setLangMenu(false)
                    setNotify(false)
                }}>
                    <div className="w-7 h-7 rounded-md shadow-sm shadow-slate-500"><img className="rounded" src={"https://unsplash.com/photos/WNoLnJo7tS8/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8bWFufGVufDB8fHx8MTY1OTU3OTQ2NQ&force=true&w=640"} alt={"profile"} /></div>
                    <div className="text-xs px-1.5 py-1"><p className="text-sm font-medium">{user.username}</p><p className="font-extralight text-gray-500">{user.role}</p></div>
                    <div className="text-indigo-900 text-xs mx-1"><i className="bi bi-caret-down-fill"></i></div>
                </div>
                    {profiler && <div className="origin-top-right absolute right-30 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1" data-aos={"fade-down"}>
                        <div className="py-1" role="none">

                            <Link to="/" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Some Option</Link>
                            <Link to="/" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Some Option</Link>
                            <Link to="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Some Option</Link>

                        </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Header