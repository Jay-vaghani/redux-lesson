import { Box, Stack } from "@mui/system";
import Post from "./features/post/Post";

function App() {
  return (
    <Stack minHeight={"100vh"} alignItems={"center"} justifyContent={"start"} pt={2}>
      <Post />
    </Stack>
  );
}

export default App;
