import React from 'react'

import Revenue from '../../Charts/Revenue'
import Satisfaction from '../../Charts/Satisfaction'
import Target from '../../Charts/Target'


const Segment2 = () => {
    return (
        <>
        
            <div className="col-span-1 md:col-span-4 lg:col-span-4 xl:col-span-4  p-0.5 md:p-3 rounded-lg hover:shadow-md hover:shadow-slate-300 overflow-hidden" data-aos={"fade-right"}>
                <div className="flex justify-between items-center" data-aos={"fade-left"} data-aos-delay={'150'}>
                    <p className="font-semibold tracking-wide">Total Revenue</p>
                </div>
                <Revenue/>
            </div>



            <div className="col-span-1 md:col-span-4 lg:col-span-4 xl:col-span-4  p-0.5 md:p-3 rounded-lg hover:shadow-md hover:shadow-slate-300 overflow-hidden" data-aos={"fade-left"}>
                <div className="flex justify-between items-center" data-aos={"fade-left"} data-aos-delay={'150'}>
                    <p className="font-semibold tracking-wide">Customer Satisfaction</p>
                </div>
                <Satisfaction/>
            </div>



            <div className="col-span-1 md:col-span-4 lg:col-span-4 xl:col-span-4  p-0.5 md:p-3 rounded-lg hover:shadow-md hover:shadow-slate-300 overflow-hidden" data-aos={"fade-left"}>
                <div className="flex justify-between items-center" data-aos={"fade-left"} data-aos-delay={'150'}>
                    <p className="font-semibold tracking-wide">Target vs Reality</p>
                </div>
                <Target/>
            </div>
        </>
    )
}

export default Segment2