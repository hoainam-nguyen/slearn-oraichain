import React from "react";
import ThreadSummary from "./ThreadSumary";
import Answer from "./OthersUserAnswer";
// import MyAnswer from "./MyAnswer";
import SearchBar from "./SearchBar";
import CreateNewThreadBtn from "./CreateNewThreadBtn";
import "./styles.css";
import { makeStyles, TextField, Button, Grid, Avatar } from "@material-ui/core";

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

const ThreadInfo = ({
    data = [
        {
            id: "1",
            owner: "user_id",
            metadata: {
                title: "Fix bug for React code",
                content: "I have a problem with my code...",
                images: [],
                likes: "5",
                views: "20",
                post_at: "1/1/2023",
            },
            comments: [
                {
                    id_cmt: "1",
                    created_by: "henry",
                    content: "You should do this...",
                    datePost: "1/1/2023",
                    images: [],
                    upvoting: 3,
                    downvoting: 1,
                },
                {
                    id_cmt: "2",
                    created_by: "Tom",
                    content: "You should do this...",
                    datePost: "1/1/2023",
                    images: [],
                    upvoting: 1,
                    downvoting: 1,
                },
            ],
            config: {},
        },
    ],
}) => {
    const [newdata, setNewData] = React.useState(data);
    const [commentText, setCommentText] = React.useState("");

    const classes = useStyles();

    const handleLike = (threadId, newLikes) => {
        const updatedData = data.map((thread) => {
            if (thread.id === threadId) {
                return {
                    ...thread,
                    metadata: {
                        ...thread.metadata,
                        likes: newLikes.toString(),
                    },
                };
            }
            return thread;
        });

        setNewData(updatedData);
        console.log(updatedData);
    };

    const handleUpvote = (cmtId, newUpvotes) => {
        const updatedData = data.map((thread) => {
            if (thread.id === newdata[0].id) {
                const updatedComments = thread.comments.map((cmt) => {
                    if (cmt.id_cmt === cmtId) {
                        return {
                            ...cmt,
                            upvoting: newUpvotes.toString(),
                        };
                    }
                    return cmt;
                });

                return {
                    ...thread,
                    comments: updatedComments,
                };
            }
            return thread;
        });

        setNewData(updatedData);
        console.log(updatedData);
    };

    const handleDownvote = (cmtId, newDownvotes) => {
        const updatedData = data.map((thread) => {
            if (thread.id === newdata[0].id) {
                const updatedComments = thread.comments.map((cmt) => {
                    if (cmt.id_cmt === cmtId) {
                        return {
                            ...cmt,
                            downvoting: newDownvotes.toString(),
                        };
                    }
                    return cmt;
                });

                return {
                    ...thread,
                    comments: updatedComments,
                };
            }
            return thread;
        });

        setNewData(updatedData);
        console.log(updatedData);
    };

    const handleSubmitBtn = (event) => {
        event.preventDefault();
        if (commentText.trim() === "") {
            return;
        }

        const newcomment = {
            id_cmt: (newdata[0].comments.length + 1).toString(),
            created_by: "Me",
            content: commentText,
            datePost: "1/1/2023",
            images: [],
            upvoting: 0,
            downvoting: 0,
        };

        setNewData((newdata) => [
            {
                ...newdata[0],
                comments: [...newdata[0].comments, newcomment],
            },
        ]);
        setCommentText("");
    };
    // console.log(newdata)
    // updateData chua data moi nhat
    return (
        <>
            <div className="header-forum">
                <SearchBar />
                <br></br>
                <CreateNewThreadBtn />
            </div>

            <div className="question">
                <ThreadSummary
                    id={newdata[0].id}
                    title={newdata[0].metadata.title}
                    content={newdata[0].metadata.content}
                    author={newdata[0].owner}
                    datePost={newdata[0].metadata.post_at}
                    replies={newdata[0].comments.length}
                    likes={newdata[0].metadata.likes}
                    views={newdata[0].metadata.views}
                    onLike={handleLike}
                />
            </div>

            <div className="answer">
                {newdata[0].comments.map((value, index) => {
                    return (
                        <Answer
                            id={value.id_cmt}
                            content={value.content}
                            author={value.created_by}
                            datePost={value.datePost}
                            userAvatar={value.userAvatar}
                            upvotes={value.upvoting}
                            downvotes={value.downvoting}
                            onUpvote={handleUpvote}
                            onDownvote={handleDownvote}
                        />
                    );
                })}{" "}
            </div>

            <div className="my-answer">
                {/* <MyAnswer userAvatar="https://i.imgur.com/8Km9tLL.png" /> */}

                <div className={classes.commentContainer}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>
                            <Avatar
                                className={classes.avatar}
                                src={"https://i.imgur.com/8Km9tLL.png"}
                            />
                        </Grid>
                        <Grid item xs>
                            <TextField
                                variant="outlined"
                                multiline
                                rows={4}
                                placeholder="Write your comment..."
                                className={classes.textField}
                                value={commentText}
                                onChange={(event) =>
                                    setCommentText(event.target.value)
                                }
                            />
                        </Grid>
                    </Grid>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.submitButton}
                        onClick={handleSubmitBtn}
                    >
                        Comment
                    </Button>
                </div>
            </div>
        </>
    );
};

export default ThreadInfo;
