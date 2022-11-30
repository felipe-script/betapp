import React, {
    createContext,
    useContext,
    useState,
    useEffect,
  } from 'react';
  
  import {useLocalStorage} from '@/hooks/useLocalStorage'

  type ProtectedRouteType = {
    isAuthenticated: boolean,
    authenticationPath: string,
  };

  type TypeContext = {
    protectedRoute: ProtectedRouteType,
    logout: () => void,
    login: () => void,
  }

  type AuthProviderProps = {
    children: React.ReactNode;
  };
  const AuthContext = createContext<TypeContext | null>(null);

  const AuthProvider: React.FC<AuthProviderProps> = ({
    children,
  }: AuthProviderProps) => {

    const [auth, setAuth] = useLocalStorage<string>("auth", "");

    const [protectedRoute, setProtectedRoute] = useState({
      isAuthenticated: false,
      authenticationPath: '/',
    });
  
    useEffect(() =>{
      if(auth) setProtectedRoute({...protectedRoute, isAuthenticated: true})
    },[])
  
  
    const logout =  ():void => {
      localStorage.removeItem('auth')
      setProtectedRoute({...protectedRoute, isAuthenticated: false})
    };

    const login = ():void => {
      setAuth('true')
      setProtectedRoute({...protectedRoute, isAuthenticated: true})
    };
  
    return (
      <AuthContext.Provider
        value={{
          protectedRoute,
          logout,
          login,
        }}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  const useAuth = (): TypeContext => {
    const context = useContext(AuthContext);
  
    if (!context) {
      throw new Error('useAuth must be used AuthProvider');
    }
    return context;
  };
  
  export {AuthProvider, useAuth};