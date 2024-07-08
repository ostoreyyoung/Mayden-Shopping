import { useAuthContext } from './contexts/authContext/AuthContext';
import Login from './pages/login/Login';
import ShoppingList from './pages/shoppingList/ShoppingList';

function Router() {
	const { user } = useAuthContext();
	// Permenately route to shopping list while we did not sort out auth
	return user ? <Login /> : <ShoppingList />;
}

export default Router;
