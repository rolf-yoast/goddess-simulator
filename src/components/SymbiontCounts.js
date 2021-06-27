import React, {useState} from 'react';
import { useSelector } from 'react-redux';

const SymbiontCounts = () => {
	const symbionCount = useSelector((state) => state.symbionCount);
	const count = symbionCount[0].count;

	return (
		<div id="symbiont-count">
			{count}
		</div>
	)
}

export default SymbiontCounts;