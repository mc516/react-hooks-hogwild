import React, { useState} from "react";
import HogInfo from "./HogInfo";

function Hog( {hog} ) {
    const [showHogInfo, setshowHogInfo] = useState(false)

    function handleShowHogInfo() {
        setshowHogInfo((showHogInfo) => !showHogInfo)
    }

    return (
        <div>
            <div className="name">{hog.name}</div>
            <img src={hog.image} alt="Hog" onClick={handleShowHogInfo} />
            { showHogInfo ? <HogInfo hogData={hog}/> : null }
        </div>
    )
}

export default Hog