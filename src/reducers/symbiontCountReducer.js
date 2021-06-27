const initialState = [
	{
		count: 0
	}
]

const symbionCountReducer = (state = initialState, action) => {
	const { type, payload } = action;
  
	switch (type) {
		case "ADD_SYMBIONT":
			const symbiontPositive = [...state];
			symbiontPositive[0]['count'] = symbiontPositive[0]['count'] + payload.amount;
  
			return symbiontPositive;
	  default:
		return state;
	}
  };
  
  export default symbionCountReducer;