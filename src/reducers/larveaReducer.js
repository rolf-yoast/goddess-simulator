const initialState = [
	{
		count: 0
	}
]

const larveaReducer = (state = initialState, action) => {
	const { type, payload } = action;
  
	switch (type) {
	  case "ADD_LARVEA":
		  const larveaPositive = [...state];
		  larveaPositive[0]['count'] = larveaPositive[0]['count'] + payload.amount;

		  return larveaPositive;
	  default:
		return state;
	}
  };
  
  export default larveaReducer;