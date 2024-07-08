import { createContext, useContext } from 'react';

export type AuthContextType = {
	user: User | null;
};

export const AuthContext = createContext<AuthContextType>({
	user: null,
});

export const useAuthContext = () => useContext(AuthContext);
