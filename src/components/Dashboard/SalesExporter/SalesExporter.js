

const SalesExporter = () => {
    return (
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
    )
}

export default SalesExporter