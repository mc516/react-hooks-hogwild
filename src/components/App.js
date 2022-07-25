import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogList from "./HogList";
import Filter from "./Filter";


function App() {
	const [filterBy, setFilterBy] = useState("") 
	const greased = hogs.filter(element => element.greased === "true")
	const notGreased = hogs.filter(element => element.greased === "false")

	function handleFilterBy(event) {
        console.log(event.target.value)
        setFilterBy(event.target.value)
    }

	return (
		<div className="App">
			<Nav />
			<Filter handleFilterBy={handleFilterBy}/>
			<br></br>
			<HogList hogData={hogs} filterBy={filterBy} greased={greased} notGreased={notGreased}/>
		</div>
	);
}

export default App;
