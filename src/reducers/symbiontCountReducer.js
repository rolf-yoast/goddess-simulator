const initialState = [
	{
		count: 0
	}
]

const symbionCountReducer = (state = initialState, action) => {
	const { type, payload } = action;
  
	switch (type) {
	  case "ADD_SYMBIONT":
		  const currentCount = [...state];
		  console.log(currentCount);
	  default:
		return state;
	}
  
	return state;
  };
  
  export default symbionCountReducer;