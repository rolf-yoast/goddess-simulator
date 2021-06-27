import { combineReducers } from "redux";


import energyReducer from "./energyReducer";
import goddessVoiceReducer from "./goddessVoiceReducer";
import larveaReducer from "./larveaReducer";
import symbionCountReducer from "./symbiontCountReducer";

const rootReducer = combineReducers({
	energy: energyReducer,
	goddessVoice: goddessVoiceReducer,
	larvea: larveaReducer,
	symbionCount: symbionCountReducer
  
})

export default rootReducer;