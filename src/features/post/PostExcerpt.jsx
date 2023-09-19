import React from "react";
import ReactionButton from "./ReactionButton";
import { Box } from "@mui/material";

function PostExcerpt({ post }) {
  return (
    <Box borderBottom={"1px solid #dbdbdb99"} borderRadius={3} padding={3}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <Box>
        <ReactionButton post={post} />
      </Box>
    </Box>
  );
}

export default PostExcerpt;
