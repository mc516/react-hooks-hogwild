import React from "react";

function HogInfo( {hogData} ) {
    
    return (
        <div>
            <div className="specialty">Specialty: {hogData.specialty}</div>
            <div className="weight">Weight: {hogData.weight}</div>
            <div className="greased">Greased: {hogData.greased.toString()}</div>
            <div className="highest-medal-achieved">Highest Medal Achieved: {hogData["highest medal achieved"]}</div>
            <br></br>
        </div>
    )
}

export default HogInfo