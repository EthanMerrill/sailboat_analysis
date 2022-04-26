import React, { useEffect, useState } from "react";
import DataSection from "../../components/DataSection";
import {useRouter} from 'next/router'
import { supabase } from '../api/supabaseClient';

const Boats = ({ boat}) => {
    // destructure props
    // const {propName} = props
    boat = (boat?.[0])
    // boat = boat[0]
    // State Variables
    // const [variableName, setVariableName] = useState(null)

    // JSX return
    return(
        <>
            <h1>Hello I am boat</h1>
            <h1>{boat.boat_name}</h1>
            <DataSection /> 
        </>
    )
}

export async function getStaticProps(context) {
    console.log("CONTEXT", context)
    const res = await supabase
        .from('Boats')
        .select()
        .match({boat_name: context.params.id})
    console.log(res.data)
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