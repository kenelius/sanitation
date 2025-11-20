import { createContext, useState } from "react";
import { saveToken, removeToken } from "../utils/token";


export const AuthContext = createContext();


export function AuthProvider({ children }) {
const [user, setUser] = useState(null);


const login = (email, password) => {
setUser({ email });
saveToken("dummy-token");
};


const logout = () => {
setUser(null);
removeToken();
};


return (
<AuthContext.Provider value={{ user, login, logout }}>
{children}
</AuthContext.Provider>
);
}