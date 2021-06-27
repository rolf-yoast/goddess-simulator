const initialState = [
	{
		energy: 500,
		limit: 500
	}
]

const energyReducer = (state = initialState, action) => {
	const { type, payload } = action;
  
	switch (type) {
	  case "ADD_ENERGY":
		const energyPositive = [...state];
		energyPositive[0]['energy'] = energyPositive[0]['energy'] + payload.amount;

		return energyPositive;
	case "REMOVE_ENERGY":
		const energyNegative = [...state];
		energyNegative[0]['energy'] = energyNegative[0]['energy'] - payload.amount;

		return energyNegative;
	  default:
		return state;
	}
  };
  
  export default energyReducer;