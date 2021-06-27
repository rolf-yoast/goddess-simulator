import React from "react";
import { useSelector } from 'react-redux';

const EnergyCounter = () => {
	const energy = useSelector((state) => state.energy)[0];
	
	return (
		<p>
			Current energy: {energy.energy}<br />
			Max energy: {energy.limit}
		</p>
	)
};

export default EnergyCounter;