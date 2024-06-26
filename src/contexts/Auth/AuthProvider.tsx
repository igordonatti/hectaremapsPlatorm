import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { User } from "../../types/User";
import { useAuth } from "../../hooks/api/useAuth";

export const AuthProvider = ({ children }: { children: JSX.Element}) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const apiAuth = useAuth();

  useEffect(() => {
    const validateToken = async () => {
      const storageUser = localStorage.getItem('user');

      if(storageUser) {
        const data = await apiAuth.validateToken(JSON.parse(storageUser).access_token);

        if(data) {
          setUser(JSON.parse(storageUser));
          setToken(JSON.parse(storageUser).access_token);
        }
      }
    }
    validateToken();
  }, [])

  const signIn = async (email: string, pwd: string) => {
    const data = await apiAuth.signIn(email, pwd);
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