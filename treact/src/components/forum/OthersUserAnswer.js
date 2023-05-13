import React from "react";
import "./styles.css";
import UpvoteFeatures from "./UpvoteFeatures";
import DownvoteFeatures from "./DownvoteFeatures";

import tw from "twin.macro";
import { ReactComponent as UpvoteSolid } from "images/chevron-up-solid.svg";
import { ReactComponent as DownvoteSolid } from "images/chevron-down-solid.svg";

const ThreadContainer = tw.div`
  bg-white rounded-md shadow-md p-4 mt-4`;

// const ThreadTitle = tw.h2`
// text-2xl font-bold text-gray-800 mb-2`;

const ThreadContent = tw.p`
  text-lg text-gray-700 mb-4`;

// const ThreadAuthor = tw.p`
// text-gray-600 font-medium`;

// const ThreadDate = tw.p`
// text-gray-600`;

const ThreadStats = tw.div`
  flex items-center text-gray-600`;

// const InteractButton = tw.button`
// bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-blue-500`;

const UpvoteIcon = tw(
    UpvoteSolid
)`top-0 left-0  w-5 fill-current text-green-500`;
const DownvoteIcon = tw(
    DownvoteSolid
)`top-0 left-0  w-5 fill-current text-red-500`;

const InteractButton = tw.button`
  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-blue-500`;

const Answer = ({
    id,
    content,
    author,
    datePost,
    userAvatar,
    upvotes,
    downvotes,
    onUpvote,
    onDownvote,
}) => {
    const handleThreadClick = () => {};

    // upvoting code
    const [upvotenumber, setUpvoteNumber] = React.useState(upvotes);
    const [downvotenumber, setDownvoteNumber] = React.useState(downvotes);

    const onClickUpvote = (e) => {
        e.preventDefault();
        const newUpvotes = Number(upvotes) + 1;
        setUpvoteNumber(newUpvotes.toString());
        onUpvote(id, newUpvotes.toString());
        // console.log()
    };

    const onClickDownvote = (e) => {
        e.preventDefault();
        const newDownvotes = Number(downvotes) + 1;
        setDownvoteNumber(newDownvotes.toString());
        onDownvote(id, newDownvotes.toString());
    };

    // downvoting code

    return (
        <div className="thread-summary">
            <div className="user-info">
                <div className="avatar">
                    <img src={userAvatar} alt="User Avatar" />
                </div>
                <div className="author-info">
                    <div className="author-name">{author}</div>
                    <div className="post-date">{datePost}</div>
                </div>
            </div>
            <div className="thread-info">
                <ThreadContainer onClick={handleThreadClick}>
                    <ThreadContent>{content}</ThreadContent>
                    <ThreadStats>
                        {/* upvoting part */}
                        <div>
                            <div>
                                <span style={{ display: "flex" }}>
                                    <span style={{ display: "flex" }}>
                                        <UpvoteIcon />
                                        <span style={{ margin: "0 5px" }}>
                                            {upvotenumber}{" "}
                                        </span>
                                    </span>

                                    <div>
                                        {" "}
                                        {upvotenumber <= 1 ? (
                                            <span>Upvote</span>
                                        ) : (
                                            <span>Upvotes</span>
                                        )}{" "}
                                    </div>
                                </span>
                            </div>
                            <div className="up-down-button">
                                <InteractButton onClick={onClickUpvote}>
                                    Upvote
                                </InteractButton>
                            </div>
                        </div>
                        {/* Downvoteing part */}
                        <div>
                            <div>
                                <span style={{ display: "flex" }}>
                                    <span style={{ display: "flex" }}>
                                        <DownvoteIcon />
                                        <span style={{ margin: "0 5px" }}>
                                            {downvotenumber}{" "}
                                        </span>
                                    </span>

                                    <div>
                                        {" "}
                                        {downvotenumber <= 1 ? (
                                            <span>Downvote</span>
                                        ) : (
                                            <span>Downvotes</span>
                                        )}{" "}
                                    </div>
                                </span>
                            </div>
                            <div className="up-down-button">
                                <InteractButton onClick={onClickDownvote}>
                                    Downvote
                                </InteractButton>
                            </div>
                        </div>
                    </ThreadStats>
                </ThreadContainer>
            </div>
        </div>
    );
};

export default Answer;
