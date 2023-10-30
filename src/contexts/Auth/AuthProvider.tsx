import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { User } from "../../types/User";

export const AuthProvider = ({ children }: { children: JSX.Element}) => {
  const [user, setUser] = useState<User | null>(null);

  const signIn = (email: string, pwd: string) => {}

  const signOut = () => {}

  return (
    <AuthContext.Provider value={{}}>
      {children}
    </AuthContext.Provider>
  );
}