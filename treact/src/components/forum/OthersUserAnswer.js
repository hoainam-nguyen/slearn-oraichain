import React from "react";
import "./styles.css"
import UpvoteFeatures from "./UpvoteFeatures";
import DownvoteFeatures from "./DownvoteFeatures";

import tw from "twin.macro";


const ThreadContainer = tw.div `
  bg-white rounded-md shadow-md p-4 mt-4`;

// const ThreadTitle = tw.h2`
// text-2xl font-bold text-gray-800 mb-2`;

const ThreadContent = tw.p `
  text-lg text-gray-700 mb-4`;

// const ThreadAuthor = tw.p`
// text-gray-600 font-medium`;

// const ThreadDate = tw.p`
// text-gray-600`;

const ThreadStats = tw.div `
  flex items-center text-gray-600`;

// const InteractButton = tw.button`
// bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-blue-500`;


const Answer = ({
    id,
    content,
    author,
    datePost,
    userAvatar
}) => {
    const handleThreadClick = () => {};

    return (
        <div className="thread-summary">
            <div className="user-info">
                <div className="avatar">
                    <img src={userAvatar}
                        alt="User Avatar"/>
                </div>
                <div className="author-info">
                    <div className="author-name">
                        {author}</div>
                    <div className="post-date">
                        {datePost}</div>
                </div>
            </div>
            <div className="thread-info">
                <ThreadContainer onClick={handleThreadClick}>
                    <ThreadContent>{content}</ThreadContent>
                    <ThreadStats> {/* <InteractButton className="up-down-vote-btn">Upvote</InteractButton> */}
                        <UpvoteFeatures id={id}/>
                        <DownvoteFeatures id={id}/> {/* <InteractButton className="up-down-vote-btn">Downvote</InteractButton> */} </ThreadStats>
                </ThreadContainer>
            </div>
        </div>
    );
};


export default Answer;
