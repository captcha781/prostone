import React from "react";
import TopProduct from "../../Tables/TopProduct";
import ServiceLevel from "../../Charts/ServiceLevel";
import CountryMap from "../../Charts/Country"

const Segment3 = () => {
  return (
    <>
      <div
        className="col-span-1 md:col-span-6 lg:col-span-6 xl:col-span-6  p-0.5 md:p-3 rounded-lg hover:shadow-md hover:shadow-slate-300 overflow-hidden"
        data-aos={"fade-right"}
      >
        <div
          className="flex justify-between items-center"
          data-aos={"fade-left"}
          data-aos-delay={"150"}
        >
          <p className="font-semibold tracking-wide">Top Products</p>
        </div>
        <TopProduct/>
      </div>

      <div
        className="col-span-1 md:col-span-3 lg:col-span-3 xl:col-span-3  p-0.5 md:p-3 rounded-lg hover:shadow-md hover:shadow-slate-300 overflow-hidden"
        data-aos={"fade-right"}
      >
        <div
          className="flex justify-between items-center"
          data-aos={"fade-left"}
          data-aos-delay={"150"}
        >
          <p className="font-semibold tracking-wide">Sales Mapping by Country</p>
        </div>
        <CountryMap/>
      </div>


      <div
        className="col-span-1 md:col-span-3 lg:col-span-3 xl:col-span-3  p-0.5 md:p-3 rounded-lg hover:shadow-md hover:shadow-slate-300 overflow-hidden"
        data-aos={"fade-right"}
      >
        <div
          className="flex justify-between items-center"
          data-aos={"fade-left"}
          data-aos-delay={"150"}
        >
          <p className="font-semibold tracking-wide">Volume vs Service Level</p>
        </div>
        <ServiceLevel/>
      </div>
    </>
  );
};

export default Segment3;
