import {Link } from "react-router-dom"
import { setHeader } from "../../features/data"
import { useDispatch } from "react-redux/es/exports"

const Item = ({setItem, item, icon, placeholder, target, delay}) => {
    
    const dispatch = useDispatch()
    return (
        <Link to={target} onClick={() => {
            setItem(target)
            dispatch(setHeader(placeholder))
        }}>
            {window.location.pathname.startsWith(target)  ? <div className="menuitem-success" data-aos={"fade-right"} data-aos-delay={delay}>
            <i className={`bi text-sm [font-size:1rem] mx-1 ${icon}`}></i>
                <p className="ml-2 md:ml-1 text-xs">
                    {placeholder}
                </p>
            </div> : <div className="menuitem-failure" data-aos={"fade-right"} data-aos-delay={delay}>
            <i className={`bi text-sm [font-size:1rem] mx-1 ${icon}`}></i>
                <p className="ml-2 md:ml-1 text-xs">
                    {placeholder}
                </p>
            </div>}
        </Link>
    )
}

export default Item;