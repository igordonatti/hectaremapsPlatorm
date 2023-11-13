import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { User } from "../../types/User";
import { useApi } from "../../hooks/useApi";

export const AuthProvider = ({ children }: { children: JSX.Element}) => {
  const [user, setUser] = useState<User | null>(null);
  const api = useApi();

  const signIn = async (email: string, pwd: string) => {
    const data = await api.signIn(email, pwd);
    if(data.name && data.access_token) {
      setUser(data);
      setToken(data.access_token);
      return true;
    }
    return false;
  }

  const signOut = async () => {
    await api.logout();
    setUser(null);
  }

  const setToken = (token: string) => {
    localStorage.setItem('authToken', token);
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}