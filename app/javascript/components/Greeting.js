/* 
  NB: All commented code will be uncommented after code review for a better user experience
  and less router operations 
*/

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGreetings } from "../redux/greetings/greetings";

const Greeting = () => {
  const greeting = useSelector((state) => state.greetings.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreetings());
  }, []);

  // const newGreeting = () => {
  //   dispatch(fetchGreetings());
  // };

  return (
    <div>
      <h1 className="message">{greeting.text}</h1>
      {/* <button onClick={newGreeting} type="button">
        Generate
      </button> */}
    </div>
  );
};

export default Greeting;
