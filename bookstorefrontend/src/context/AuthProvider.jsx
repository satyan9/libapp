import React, { createContext, useContext, useState } from 'react';

// Create and export the AuthContext along with the AuthProvider and useAuth hook
const AuthContext = createContext();

 export default function AuthProvider({ children }) {
    const initialAuthUser = localStorage.getItem("users");
    const [authUser, setAuthUser] = useState(
        initialAuthUser ? JSON.parse(initialAuthUser) : null
    );

    return (
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
    );
}

const useAuth = () => useContext(AuthContext);

export { AuthContext, useAuth };
