import '../css/app.css';
import AuthContextProvider from './contexts/authContext/AuthContextProvider';
import Router from './Router';

function App() {
	return (
		<div className="h-full w-full flex min-h-0">
			<AuthContextProvider>
				<Router />
			</AuthContextProvider>
		</div>
	);
}

export default App;
