import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Navigate } from 'react-router-dom';
import {loginSuccess} from '../login/loginSlice'
import {fetchNewAccessJWT} from '../../api/userApi'
import DefaultLayout from '../../layout/DefaultLayout'
import {getUserProfile} from "../../pages/dashboard/userActions"
const PrivateRoute = ({ children }) => {
    const { isAuth } = useSelector(state => state.login);
    const { user } = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
      const updateAccessJWT = async () => {
        const result = await fetchNewAccessJWT();
        result && dispatch(loginSuccess());
      };
  
      !user._id && dispatch(getUserProfile());
      !sessionStorage.getItem("accessJWT") && updateAccessJWT();
    }, [dispatch, user._id]);
  
    return isAuth ? <DefaultLayout>{children}</DefaultLayout> : <Navigate to="/" />;
  };
  

export default PrivateRoute
