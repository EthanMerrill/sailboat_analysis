import React, { useEffect, useState } from "react";
import DataSection from "../../components/DataSection";
import {useRouter} from 'next/router'
import { supabase } from '../api/supabaseClient';

const Boats = ({ boat}) => {
    // destructure props
    // const {propName} = props
    boat = (boat?.[0])
    console.log(boat)
    // boat = boat[0]
    // State Variables
    // const [variableName, setVariableName] = useState(null)
    // JSX return
    return(
        <>
            <h1>{boat?.boat_name}</h1>
            <DataSection 
            sectionTitle = "my first data block" 
            sectionSubtitle="subtitle about the data here"
            tableData={boat}
            /> 
            <DataSection
                sectionTitle="Performance"
                sectionSubtitle="subtitle about the data here"
                tableData={boat}
            /> 
        </>
    )
}

export async function getStaticProps(context) {
    const res = await supabase
        .from('Boats')
        .select()
        .match({"Boat Name": context.params.id})
    const boat = res.data
    return { props: { boat }, }
}

export async function getStaticPaths() {
    const res = await supabase
        .from('Boats')
        .select()
    console.log(res.data)
    return {
        paths: [
            { params: { id: "STRING", message: "HELLO!" } }
        ],
        fallback: true // false or 'blocking'
    };
}
export default Boats