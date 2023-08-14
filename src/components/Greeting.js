import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/greetingSlice';

function Greeting() {
  const { message, isLoading } = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>{message}</div>;
}

export default Greeting;
