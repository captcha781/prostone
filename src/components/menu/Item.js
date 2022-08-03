import {Link } from "react-router-dom"

const Item = ({setItem, item, icon, placeholder, target}) => {
    return (
        <Link to={target} onClick={() => {
            setItem(target)
        }}>
            {item === target ? <div className="px-3 py-1.5 rounded-lg mt-3 text-sm flex justify-start items-center w-full xl:w-3/4 mx-auto bg-indigo-500 text-white">
            <i className={`bi text-sm [font-size:1rem] mx-1 ${icon}`}></i>
                <p className="ml-2 md:ml-1 text-xs">
                    {placeholder}
                </p>
            </div> : <div className="duration-300 px-3 py-1.5 rounded-lg mt-3 text-sm flex justify-start items-center w-full xl:w-3/4 mx-auto hover:bg-indigo-200  ">
            <i className={`bi text-sm [font-size:1rem] mx-1 ${icon}`}></i>
                <p className="ml-2 md:ml-1 text-xs">
                    {placeholder}
                </p>
            </div>}
        </Link>
    )
}

export default Item;