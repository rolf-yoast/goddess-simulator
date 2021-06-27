import './scss/style.scss';
import EnergyCounter from './components/EnergyCounter';
import GoddessVoice from './components/GoddessVoice';
import Larvea from './components/Larvea';
import SymbiontCounts from './components/SymbiontCounts';


function App() {
  return (
    <div className="container">
		<GoddessVoice />
		<SymbiontCounts />
		<div className="grid grid__col-3">
			<div>
				<EnergyCounter />
				<Larvea />
			</div>
			<div>
				
			</div>
			<div>
				
			</div>
		</div>
	</div>
  );
}

export default App;
