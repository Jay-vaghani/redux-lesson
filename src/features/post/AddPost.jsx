import {
  Box,
  Button,
  MenuItem,
  Select,
  Stack,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../post/postSlice";

function AddPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && content) {
      console.log(user);

      dispatch(addPost(title, content));
    }
    setTitle("");
    setContent("");
  };

  return (
    <form action="" style={{ width: "100%" }} onSubmit={handleSubmit}>
      <Stack width={"100%"} spacing={2}>
        <Typography variant="h4" fontWeight={"500"}>
          Add Post
        </Typography>
        <TextField
          fullWidth
          value={title}
          id="outlined-basic"
          label="Add Title"
          variant="outlined"
          onChange={onTitleChange}
        />
        <TextField
          fullWidth
          value={content}
          id="outlined-basic"
          label="Add Comment"
          variant="outlined"
          onChange={onContentChange}
        />
        <Button type="submit" variant="contained">
          Add post
        </Button>
      </Stack>
    </form>
  );
}

export default AddPost;
