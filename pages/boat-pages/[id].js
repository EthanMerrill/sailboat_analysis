import React, { useEffect, useState , Suspense} from "react";
import DataSection from "../../components/DataSection";
import HeaderSection from "../../components/HeaderSection";
import PolarsSection from "../../components/PolarsSection";
import TimelineSection from "../../components/TimelineSection";
import BlurImage from "../../components/BlurImage";
import { useRouter } from 'next/router'
import { supabase } from '../api/supabaseClient';

const Boats = ({ boat }) => {
    // destructure props
    // const {propName} = props
    boat = (boat?.[0])
    console.log(boat)
    // boat = boat[0]
    // State Variables
    // const [variableName, setVariableName] = useState(null)
    // filter the data into objects for each data section component
    const quickstats = ['Length Overall_ft', 'Designer', 'Draft_ft', 'Beam_ft', 'Displacement_cu_ft', 'Rigging Type', 'Price New_USD']
    const construction_stats = [ 'Construction','Core', 'Rudder Type']
    const ratings_stats = ['PHRF']
    const dimensions_stats = ['Length Overall_ft', 'Waterline Length_ft', 'Beam_ft', 'Draft_ft', 'Airdraft_ft']

    
    function statsFilter(boat, stats) {
        let filteredStats = {}
        stats.forEach(stat => {
            filteredStats[stat] = boat?.[stat]
        })
        return filteredStats
    }
    const quickstats_data = statsFilter(boat, quickstats)
    const ratings_data = statsFilter(boat, ratings_stats)
    const construction_data = statsFilter(boat, construction_stats)
    const dimensions_data = statsFilter(boat, dimensions_stats)

    //images
    // https://leerob.io/blog/image-gallery-supabase-tailwind-nextjs

    
    // Use the JS library to create a bucket.
    // async function getBucket() {
    //     // const bucket = await supabase.bucket('boat-photos')
    //     const { data, error } = await supabase.storage.from('boat-photos').download('public/Catalina30.png')
    //     const {d, e} = await supabase.storage.from('boat-photos').list("*")
    //     console.log(d, e)
    //     console.log(data, error)
    //     console.log("TELLO")
    // }
    // getBucket()
    const image = { "href": boat?.img_href, "alt": boat?.boat_name, "src": "https://app.supabase.com/project/krkivjmbngmhokkhzxdu/storage/buckets/boat-photos" }
// JSX return
return (
    <>
        <h1>{boat?.boat_name}</h1>
        < BlurImage image= {image}/>
        <DataSection
            sectionTitle="Quick Stats"
            tableData={quickstats_data}
        />
        <DataSection
            sectionTitle="Handicap Ratings"
            tableData={ratings_data}
        />
        <DataSection
            sectionTitle="Construction"
            tableData={construction_data}
        />
        <DataSection
            sectionTitle="Dimensions"
            tableData={dimensions_data}
        />
</>
    
)
}

export async function getStaticProps(context) {
    const res = await supabase
        .from('Boats')
        .select()
        .match({ "Boat Name": context.params.id })
    const boat = res.data
    return { props: { boat }, }
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { id: "STRING", message: "HELLO!" } }
        ],
        fallback: true // false or 'blocking'
    };
}
export default Boats