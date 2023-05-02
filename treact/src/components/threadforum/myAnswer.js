import React from "react";
import {
  makeStyles,
  TextField,
  Button,
  Grid,
  Avatar,
} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  commentContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "16px 0",
  },
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  textField: {
    width: "100%",
  },
  submitButton: {
    marginTop: "16px",
  },
}));



const MyAnswer = ({ userAvatar }) => {
  const classes = useStyles();

  return (
    <div className={classes.commentContainer}>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Avatar className={classes.avatar} src={userAvatar} />
        </Grid>
        <Grid item xs>
          <TextField
            variant="outlined"
            multiline
            rows={4}
            placeholder="Write your comment..."
            className={classes.textField}
          />
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="primary"
        className={classes.submitButton}
      >
        Comment
      </Button>
    </div>
  );
};

export default MyAnswer;
