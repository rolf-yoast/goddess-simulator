import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Larvea = () => {
	const dispatch = useDispatch();
	const larvea = useSelector((state) => state.larvea)[0];
	const energy = useSelector((state) => state.energy)[0];

	const spawnLarvea = () => {
		if( energy.energy > 0){
			dispatch({
				type: "ADD_LARVEA",
				payload: {
					amount: 1
				}
			});
			dispatch({
				type: "REMOVE_ENERGY",
				payload: {
					amount: 1
				}
			});
			dispatch({
				type: "ADD_SYMBIONT",
				payload: {
					amount: 1
				}
			});
		}
	}

	return (
		<p>
			Current larvea: {larvea.count}<br />
			<button onClick={spawnLarvea}>Spawn larvea</button>
		</p>
	)
};

export default Larvea;