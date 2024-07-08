import { PropsWithChildren } from 'react';
import { AuthContext, AuthContextType } from './AuthContext';

function AuthContextProvider({ children }: PropsWithChildren) {
	const contextValue: AuthContextType = {
		user: null,
	};

	return (
		<AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
	);
}

export default AuthContextProvider;
