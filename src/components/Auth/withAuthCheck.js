// withAuthCheck.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

const withAuthCheck = (WrappedComponent) => {
  const AuthCheckWrapper = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/');
      } else {
        const decodedToken = jwtDecode(token);
        if (decodedToken.exp < Date.now() / 1000) {
          localStorage.clear();
          navigate('/');
        }
      }
    }, [navigate]);

    return <WrappedComponent {...props} />;
  };

  return AuthCheckWrapper;
};

export default withAuthCheck;
