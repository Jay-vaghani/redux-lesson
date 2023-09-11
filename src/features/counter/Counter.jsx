import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  reset,
} from "./counterSlice";
import { Add, Remove } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Stack } from "@mui/system";

function Counter() {
  const counter = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();


  return (
    <Stack spacing={2}>
      <Button
        variant="contained"
        endIcon={<Add />}
        color="primary"
        onClick={() => dispatch(increment())}
      >
        increment by 1 ({counter})
      </Button>
      <Button
        variant="contained"
        endIcon={<Add />}
        color="primary"
        onClick={() => dispatch(incrementByAmount(5))}
      >
        increment by 5 ({counter})
      </Button>
      <Button
        variant="contained"
        endIcon={<Remove />}
        color="primary"
        onClick={() => dispatch(decrement())}
      >
        decrement by 1 ({counter})
      </Button>
      <Button
        variant="contained"
        endIcon={<Remove />}
        color="primary"
        onClick={() => dispatch(decrementByAmount(5))}
      >
        decrement by 5 ({counter})
      </Button>
      <Button variant="outlined" onClick={() => dispatch(reset())}>
        reset
      </Button>
    </Stack>
  );
}

export default Counter;
