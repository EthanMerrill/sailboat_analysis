import React, { useEffect, useState } from "react";
import DataSection from "../../components/DataSection";
import {useRouter} from 'next/router'
import { supabase } from '../api/supabaseClient';

const Boats = ({boat_pages}) => {
    // destructure props
    // const {propName} = props

    // State Variables
    // const [variableName, setVariableName] = useState(null)

    // JSX return
    return(
        <>
            <h1>Hello I am boat</h1>
            <DataSection /> 
        </>
    )
}

export async function getStaticProps(context) {
    const res = await supabase
        .from('Boats')
        .select()
    console.log(res.data)
    const boat_pages = await res.data
    return { props: { boat_pages }, }
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