import { Box, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPost,
  getPostErrors,
  getPostStatus,
  fetchPost,
} from "./postSlice";
import { addPost } from "./postSlice";
import AddPost from "./AddPost";
import PostExcerpt from "./PostExcerpt";

function Post() {
  const dispatch = useDispatch();

  const post = useSelector(selectAllPost);
  const postStatus = useSelector(getPostStatus);
  const postError = useSelector(getPostErrors);


  let content;

  if (postStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (postStatus === "success") {
    content = post.map((data) => <PostExcerpt key={data.id} post={data} />);
  } else if (postStatus === "failed") {
    content = <p>Error...</p>;
  }
  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPost());
    }
  }, [postStatus, dispatch]);

  return (
    <Stack
      spacing={3}
      justifyContent={"center"}
      alignItems={"start"}
      boxShadow={"3px 3px 3px #dbdbdb99;"}
      borderRadius={3}
      width={"70%"}
      p={3}
    >
      <AddPost />
      {content}
    </Stack>
  );
}

export default Post;
