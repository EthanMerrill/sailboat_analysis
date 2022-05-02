/* eslint-disable */
import React, { useEffect, useState } from "react";

const HeaderSection = (props) => {
    // destructure props
    const {builder} = props

    // State Variables
    // const [variableName, setVariableName] = useState(null)

    //Use Effects
        //useEffect desc
    useEffect(()=> {
        
    },[])
    // JSX return
    return(
        <>
            <header className="base-block">
                <h2>{props.title}</h2>
                <div className="builder-section">
                    <h3 className="builder bold">Builder: </h3>
                    <h3 className="builder">{builder}</h3>
                </div>
                <div className="length-section">
                    <h3 className="length bold">Length: </h3>
                    <h3 className="length">{props.length_overall}</h3>
                </div>
                <div className="Production-section">
                    <h3 className="Production bold">Production: </h3>
                    <h3 className="Production">{props.production-start} - {props.production-end}</h3>
                </div>
            </header>
        </>
    )
}

export default HeaderSection