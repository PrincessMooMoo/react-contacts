import { createContext } from 'react';

const AuthContext = createContext({
    user: null,
    login: () => {},
    logout: () => {}
    }
);

AuthContext.displayName = 'AuthContext';

export default AuthContext;