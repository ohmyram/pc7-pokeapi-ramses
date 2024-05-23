import { AppRouter } from './AppRouter';
import { PokemonProvider } from './context/PokemonPorvider';

function App() {
	return (
		<PokemonProvider>
			<AppRouter />
		</PokemonProvider>
	);
}

export default App;