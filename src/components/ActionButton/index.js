import React from "react";

import "./index.css";

const ActionButton = (props) => {
	const { name, onClick, type } = props;
	return (
		<button className={`button ${type}`} onClick={onClick}>
			{name}
		</button>
	);
};

export default ActionButton;
