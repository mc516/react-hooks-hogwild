import React from "react";
import Hog from "./Hog"

function HogList( {hogData, filterBy} ) {
    console.log(hogData)

   const hogsToDisplay = hogData.filter(hog => {
    if (filterBy === "All") return true
    if (filterBy === "true") return hog.greased == true
    if (filterBy === "false") return hog.greased == false
   })

    return (
        <div>
            

            { hogsToDisplay.map(element => { return <Hog hog={element}/> })}
            

        </div>
    )
}

export default HogList