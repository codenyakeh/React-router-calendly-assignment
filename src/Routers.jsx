import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbars from "./components/Navbars";
import Individual from "./components/Individual";
import Enterprise from "./components/Enterprise";
import Teams from "./components/Teams";


function Routers() {
	return (
		<BrowserRouter>
			<Navbars />
      
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/individual" element={<Individual />} />
				<Route path="/enterprise" element={<Enterprise />} />
				<Route path="/teams" element={<Teams />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Routers;
