import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGreetingsApi } from '../redux/greetings/greetings'

const Greeting = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreetingsApi());
  }, [dispatch]);

  const message = useSelector((state) => state.greetingsReducer);
   
  return (
    <div>
     <h1>Greeting Message: {message} </h1>
    </div>
  )
}

export default Greeting