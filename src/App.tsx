import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from '@/routes/ProtectedRoute';

import {Home, Login, Bets} from '@/pages';

import { useAuth } from '@/ContextApi/Auth';


const App: React.FC = (): React.ReactElement => {
  const {protectedRoute} = useAuth()
  return (
    <Routes>
      <Route path='/' element={protectedRoute.isAuthenticated ? <Navigate to='/home'/> : <Login/> } />
      <Route path='/home' element={<ProtectedRoute {...protectedRoute} outlet={<Home/>}/>} />
      <Route path='/bets' element={<ProtectedRoute {...protectedRoute} outlet={<Bets/>}/>} />
    </Routes>
  );
}

export default App;
