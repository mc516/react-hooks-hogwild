import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogList from "./HogList";
import Filter from "./Filter";


function App() {
	const [filterBy, setFilterBy] = useState("") 

	function handleFilterBy(event) {
        console.log(event.target.value)
        setFilterBy(event.target.value)
    }

	return (
		<div className="App">
			<Nav />
			<Filter handleFilterBy={handleFilterBy}/>
			<br></br>
			<HogList hogData={hogs} filterBy={filterBy} />
		</div>
	);
}

export default App;
