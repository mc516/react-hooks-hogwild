import React from "react";
import Hog from "./Hog"

function HogList( {hogData, filterBy, greased, notGreased} ) {
    console.log(hogData)
   
    return (
        <div>
            

            { hogData.map(element => { return <Hog hog={element}/> })}
            

        </div>
    )
}

export default HogList