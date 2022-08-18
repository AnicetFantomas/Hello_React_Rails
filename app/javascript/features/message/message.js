import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessage } from './messageSlice';


export default function Message() {
  const message = useSelector(state => state.message.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMessage());
  }, [dispatch]);
  return (
    <div>

      <h1>{message}</h1>
    </div>
  );
}