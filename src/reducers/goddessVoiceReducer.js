import { v4 as uuid } from 'uuid';

const initialState = [
	{
		id: uuid(),
		message: ""
	}
]

const goddessVoiceReducer = (state = initialState, action) => {
	const { type, payload } = action;
  
	switch (type) {
	  default:
		return state;
	}
  };
  
  export default goddessVoiceReducer;