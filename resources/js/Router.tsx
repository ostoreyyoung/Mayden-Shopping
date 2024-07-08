import { useAuthContext } from './contexts/authContext/AuthContext';
import Login from './pages/login/Login';
import ShoppingList from './pages/shoppingList/ShoppingList';

function Router() {
	const { user } = useAuthContext();
	return user ? <Login /> : <ShoppingList />;
}

export default Router;
