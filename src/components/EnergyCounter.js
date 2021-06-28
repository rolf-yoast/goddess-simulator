import React, {useEffect, useCallback} from "react";
import { useSelector, useDispatch } from 'react-redux';

const EnergyCounter = () => {
	const dispatch = useDispatch();
	const energy = useSelector((state) => state.energy)[0];
	const MINUTE_MS = 1000;
	const upEnergy = useCallback(() => {
		if( energy.energy < energy.limit){
			dispatch({
				type: "ADD_ENERGY",
				payload: {
					amount: 1
				}
			});
		}
	}, [energy.energy, energy.limit, dispatch]);
	
	useEffect(() => {
		const interval = setInterval(() => {
			upEnergy();
		}, MINUTE_MS);

		return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
	}, [upEnergy])
	
	return (
		<p>
			Current energy: {energy.energy}<br />
			Max energy: {energy.limit}
		</p>
	)
};

export default EnergyCounter;