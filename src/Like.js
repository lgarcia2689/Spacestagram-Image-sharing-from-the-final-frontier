import React, { useState } from "react"
import Heart from "react-heart"
import './Like.css'

function Like() {
	const [active, setActive] = useState(false)
	return (
		<div className ="top" style={{ width: "2rem" }}>
			<Heart isActive={active} onClick={() => setActive(!active)}/>
			<p>LIKE</p>
		</div>
	);
}

export default Like;