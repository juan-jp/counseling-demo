import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import {useAuthStatus} from '../hooks/useAuthStatus'
export default function PrivateRoute() {
    const {loggedIn, checkingStatus} = useAuthStatus();
    if(checkingStatus){
        return <h3>로딩 중...</h3>
    }
  return loggedIn ? <Outlet/> :<Navigate to="/sign-in" />
}
