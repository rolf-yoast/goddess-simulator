import { combineReducers } from "redux";
import symbionCountReducer from "./symbiontCountReducer";
import goddessVoiceReducer from "./goddessVoiceReducer";

const rootReducer = combineReducers({
  symbionCount: symbionCountReducer,
  goddessVoice: goddessVoiceReducer
})

export default rootReducer;