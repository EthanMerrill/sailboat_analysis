/* eslint-disable */
import React, { useEffect, useState } from "react";

const DataSection = (props) => {
    // destructure props
    const { sectionTitle } = props
    const { sectionSubtitle } = props
    const { tableData } = props
    // State Variables
    const [units, setUnits] = useState("metric")

    //Use Effects
    //useEffect desc
    useEffect(() => {

    }, [])
    // JSX return
    return (
        <>
            <section className="data-section">
                <h2 className='data-section-title'>{sectionTitle}</h2>
                {/* <h4 className="data-section-subtitle">{sectionSubtitle}</h4> */}
                <div className='table-container'>
                    {tableData && Object?.keys(tableData).map((title, value) => {
                        return(
                         
                        <div key = {value} className="table-row">
                            <div className="table-cell">
                               <p className="data-title">{title}</p>
                            </div>
                            <div className="table-cell">
                                    <p className="data-number">{tableData[title]}</p>
                            </div>
                        
                        </div>
                          
                        )
                })}

                </div>

            </section>
        </>
    )
}

export default DataSection
