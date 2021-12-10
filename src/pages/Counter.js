import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Increment, Decrement } from "../redux/actions/appActions";

const Counter = () => {
  const AppReducer = useSelector((state) => state.AppReducer);
  const dispatch = useDispatch();
  return (
    <>
      <div className="qty mt-5 text-center">
        <button className="btn btn-primary m-3" onClick={() => dispatch(Decrement())}>
          -
        </button>
        <input
          className="form"
          type="number"
          value={AppReducer}
          readOnly
          aria-label="default input example"
        />
        <button className="btn btn-primary m-3" onClick={() => dispatch(Increment())}>
          +
        </button>
      </div>
    </>
  );
};

export default Counter;
