import { Link } from "react-router-dom"

const Landing = () => {
  

  return (
    
    <div className="w-full h-screen bg-gray-100 flex justify-around items-center">
      
      <Link to={"/signup"}>
        <button className="px-6 py-2.5 bg-indigo-600 font-Outfit font-medium text-sm text-white rounded-md shadow-lg shadow-indigo-300 border border-transparent hover:border-indigo-600 hover:bg-white hover:text-indigo-600 duration-300">Signup</button>
      </Link>
      <Link to={"/signin"}>
        <button className="px-6 py-2.5 bg-indigo-600 font-Outfit font-medium text-sm text-white rounded-md shadow-lg shadow-indigo-300 border border-transparent hover:border-indigo-600 hover:bg-white hover:text-indigo-600 duration-300">Signin</button>
      </Link>
      <Link to={"/signout"}>
        <button className="px-6 py-2.5 bg-indigo-600 font-Outfit font-medium text-sm text-white rounded-md shadow-lg shadow-indigo-300 border border-transparent hover:border-indigo-600 hover:bg-white hover:text-indigo-600 duration-300">Signout</button>
      </Link>
    </div>
    
  )
}

export default Landing