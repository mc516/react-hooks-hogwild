import react from "react";

function Filter( {handleFilterBy} ) {

    return (
        <div>
            <select className="filter-by" onChange={handleFilterBy}>
                <option value="All">All</option>
                <option value="true">Greased</option>
                <option value="false">Not Greased</option>
            </select>
        </div>
    )
}

export default Filter