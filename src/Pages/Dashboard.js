import Insights from "../components/Charts/Insights"

const Dashboard = () => {
    return (

        <div className="font-Outfit mt-1 md:mt-10 px-6 py-1.5 overflow-x-hidden overflow-hidden grid w-full grid-cols-1 md:grid-cols-12 gap-7 items-stretch" data-aos={"fade-left"}>

            <div className="col-span-1 md:col-span-7 items-stretch p-0.5 md:p-3 rounded-lg hover:shadow-md hover:shadow-slate-300 overflow-y-hidden">
                <div className="flex justify-between items-center">
                    <div className="text-indigo-900 mx-2 cursor-default">
                        <p className="font-semibold tracking-wide">Today's Sales</p>
                        <p className="font-light text-xs tracking-wide">Sales Summary</p>
                    </div>
                    <div className="mx-2">
                        <button className="px-3 py-1 bg-slate-200 hover:shadow-md hover:shadow-gray-400 rounded-md text-xs ">
                            export <i className="bi bi-box-arrow-up"></i>
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-3 md:gap-1 xl:gap-7 items-stretch mt-5 text-indigo-900 overflow-y-hidden" data-aos={"fade-up"}>
                    <div className="col-span-2 lg:col-span-1 px-2 py-1.5 bg-opacity-25 bg-rose-400 rounded-md hover:shadow-lg hover:shadow-red-200" data-aos={"fade-up"} data-aos-delay={"150"}>
                        <div className="px-3 mx-auto py-3"><i className="bi bi-reception-4 bg-rose-400 rounded-full px-2 py-1.5"></i></div>
                        <div className="px-3 mx-auto pt-1.5 pb-0.5"><p className="text-xl font-semibold ">$1k</p></div>
                        <div className="px-3 mx-auto py-0"><p className="text-base font-medium ">Total Sales</p></div>
                        <div className="px-3 mx-auto pb-3"><p className="text-xs font-medium text-cyan-500">Totally $72,354</p></div>
                    </div>
                    <div className="col-span-2 lg:col-span-1 px-2 py-1.5 bg-opacity-25 bg-yellow-400 rounded-md hover:shadow-lg hover:shadow-amber-200" data-aos={"fade-up"} data-aos-delay={"250"}>
                        <div className="px-3 mx-auto py-3"><i className="bi bi-receipt bg-yellow-400 rounded-full px-2 py-1.5"></i></div>
                        <div className="px-3 mx-auto pt-1.5 pb-0.5"><p className="text-xl font-semibold ">30</p></div>
                        <div className="px-3 mx-auto py-0"><p className="text-base font-medium ">Total Orders</p></div>
                        <div className="px-3 mx-auto pb-3"><p className="text-xs font-medium text-cyan-500">Totally 1890</p></div>
                    </div>
                    <div className="col-span-2 lg:col-span-1 px-2 py-1.5 bg-opacity-25 bg-green-400 rounded-md hover:shadow-lg hover:shadow-teal-200" data-aos={"fade-up"} data-aos-delay={"350"}>
                        <div className="px-3 mx-auto py-3"><i className="bi bi-tag bg-green-400 rounded-full px-2 py-1.5"></i></div>
                        <div className="px-3 mx-auto pt-1.5 pb-0.5"><p className="text-xl font-semibold ">5</p></div>
                        <div className="px-3 mx-auto py-0"><p className="text-base font-medium ">Products Sold</p></div>
                        <div className="px-3 mx-auto pb-3"><p className="text-xs font-medium text-cyan-500">Totally 2389</p></div>
                    </div>
                    <div className="col-span-2 lg:col-span-1 px-2 py-1.5 bg-opacity-25 bg-purple-400 rounded-md hover:shadow-lg hover:shadow-violet-200" data-aos={"fade-up"} data-aos-delay={"450"}>
                        <div className="px-3 mx-auto py-3"><i className="bi bi-person-heart bg-purple-400 rounded-full px-2 py-1.5"></i></div>
                        <div className="px-3 mx-auto pt-1.5 pb-0.5"><p className="text-xl font-semibold ">8</p></div>
                        <div className="px-3 mx-auto py-0"><p className="text-base font-medium ">New Customer</p></div>
                        <div className="px-3 mx-auto pb-3"><p className="text-xs font-medium text-cyan-500">Totally 512</p></div>
                    </div>
                </div>
            </div>


            <div className="col-span-1 md:col-span-5  p-0.5 md:p-3 rounded-lg hover:shadow-md hover:shadow-slate-300 overflow-hidden" data-aos={"fade-left"}>
                <div className="flex justify-between items-center" data-aos={"fade-left"} data-aos-delay={'150'}>
                    <p className="font-semibold tracking-wide">Visitor Insights</p>
                </div>
                <Insights/>
            </div>

        </div>

    )
}

export default Dashboard