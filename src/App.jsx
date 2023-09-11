import { Box, Stack } from "@mui/system";
import Counter from "./features/counter/Counter";

function App() {
  return (
    <Stack minHeight={"100vh"} alignItems={"center"} justifyContent={"center"}>
      <Counter />
    </Stack>
  );
}

export default App;
