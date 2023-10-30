import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import SignIn from '../../pages/SignIn/SignIn';

export const RequireAuth = ({ children }: { children: JSX.Element}) => {
  const auth = useContext(AuthContext);

  if(!auth.user){
    return <SignIn />
  }

  return children;
}