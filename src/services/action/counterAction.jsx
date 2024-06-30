import {
  DEINCREMENT_COUNTER,
  INCREMENT_COUNTER,
  RESET_COUNTER,
} from "../constant/counterConstant";

export const incrementCounter = () => {
  return {
    type: INCREMENT_COUNTER,
  };
};
export const decrementCounter = () => {
  return {
    type: DEINCREMENT_COUNTER,
  };
};
export const resetCounter = () => {
  return {
    type: RESET_COUNTER,
  };
};
