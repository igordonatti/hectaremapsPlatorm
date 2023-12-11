import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { User } from "../../types/User";
import { useApi } from "../../hooks/useApi";

export const AuthProvider = ({ children }: { children: JSX.Element}) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const api = useApi();

  useEffect(() => {
    const validateToken = async () => {
      const storageData = localStorage.getItem('token');
      if(storageData) {
        const data = await api.validateToken(storageData);

        if(data) {
          setUser(data);
        }
      }
    }
    validateToken();
  })

  const signIn = async (email: string, pwd: string) => {
    const data = await api.signIn(email, pwd);
    if(data) {
      if(data.name && data.access_token) {
        setUser(data);
        setToken(data.access_token);
        localStorage.setItem('token', data.access_token);
        localStorage.setItem('user', JSON.stringify(data)); 
        return true;
      }
    }
    return false;
  }

  const signOut = async () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}