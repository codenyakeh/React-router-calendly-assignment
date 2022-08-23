 import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navbars() {
	return (
		<Nav defaultActiveKey="/home" as="ul">
			<Nav.Item as="li">
				<Link className="nav" to="/">
					<img src="Images/logo.png"/>
				</Link>
			</Nav.Item>
			<Nav.Item as="li">
				<Link className="navv" to="/individual">
					Individual
				</Link>
			</Nav.Item>
			<Nav.Item as="li">
				<Link className="navv" to="/enterprise">
					Enterprise
				</Link>
			</Nav.Item>
			<Nav.Item as="li">
				<Link className="navv" to="/teams">
					Teams
				</Link>
			</Nav.Item>
		</Nav>
	);
}

export default Navbars;
