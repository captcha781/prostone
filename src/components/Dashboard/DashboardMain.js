import Segment1 from "./Segments/Segement1"
import Segment2 from "./Segments/Segment2"
import Segment3 from "./Segments/Segment3"


const DashboardMain = () => {
    return (

        <div className="font-Outfit mt-1 md:mt-10 px-6 py-1.5 overflow-x-hidden overflow-hidden grid w-full grid-cols-1 md:grid-cols-12 gap-7 items-stretch" data-aos={"fade-left"}>
            <Segment1/>
            <Segment2/>
            <Segment3/>
        </div>

    )
}

export default DashboardMain