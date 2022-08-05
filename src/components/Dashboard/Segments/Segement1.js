import React from 'react'
import SalesExporter from '../SalesExporter/SalesExporter'
import CardLayout from '../CardLayout/CardLayout'
import Insights from '../../Charts/Insights'

const Segement1 = () => {
    return (
        <>
            <div className="col-span-1 md:col-span-6 lg:col-span-8 xl:col-span-7 items-stretch p-0.5 md:p-3 rounded-lg hover:shadow-md hover:shadow-slate-300 overflow-y-hidden">
                <SalesExporter />
                <CardLayout />
            </div>
            <div className="col-span-1 md:col-span-6 lg:col-span-4 xl:col-span-5  p-0.5 md:p-3 rounded-lg hover:shadow-md hover:shadow-slate-300 overflow-hidden" data-aos={"fade-left"}>
                <div className="flex justify-between items-center" data-aos={"fade-left"} data-aos-delay={'150'}>
                    <p className="font-semibold tracking-wide">Visitor Insights</p>
                </div>
                <Insights />
            </div>
        </>
    )
}

export default Segement1