import React from "react";
import { useDispatch } from "react-redux";
import { reactionAdded } from "./postSlice";
import { Box, Button, Stack } from "@mui/material";

function ReactionButton({ post }) {
  const reactionEmoji = {
    thumbsUp: "👍",
    wow: "😯",
    hart: "💕",
    rocket: "🚀",
  };

  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <Button
        key={name}
        size="small"
        variant="contained"
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name }))
        }
      >
        {emoji} {post.reaction[name]}
      </Button>
    );
  });

  return (
    <Stack spacing={2} direction={"row"} mt={2}>
      {reactionButtons}
    </Stack>
  );
}

export default ReactionButton;
