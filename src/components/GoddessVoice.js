import React from 'react';
import { useSelector } from 'react-redux';

const GoddessVoice = () => {
	const goddessMessage = useSelector((state) => state.goddessVoice);

	return (
		<div id="goddess-voice">
			{goddessMessage.map(message => {
				return (
					<div key={message.id}>
						{message.message}
					</div>
				)
			})}
		</div>
	)
};

export default GoddessVoice;