import React from "react";
import tw from "twin.macro";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./styles.css";
// import LikeFeatures from "./LikeFeatures";
import ViewFeatures from "./ViewFeatures";
import { ReactComponent as HeartSolid } from "images/heart-solid.svg";

const ThreadContainer = tw.div`bg-white rounded-md shadow-md p-4 mt-4`;
const ThreadTitle = tw.h2` text-2xl font-bold text-gray-800 mb-2`;
const ThreadContent = tw.p`text-lg text-gray-700 mb-4`;
const ThreadAuthor = tw.p`text-gray-600 font-medium`;
const ThreadDate = tw.p`text-gray-600`;
const ThreadStats = tw.div`flex justify-between items-center text-gray-600`;
const InteractButton = tw.button`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-blue-500`;
const TopicHagtagButton = tw.button`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-green-500`;

// like component
const HeartIcon = tw(HeartSolid)`top-0 left-0  w-5 fill-current text-red-500`;
const LikeButton = tw.button`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-blue-500`;

const ThreadSummary = ({
    id,
    title,
    content,
    author,
    datePost,
    replies,
    likes,
    views,
    onLike,
}) => {
    const [likenumber, setLikenumber] = React.useState(likes);

    const onClickLike = (e) => {
        e.preventDefault();
        const newLikes = Number(likes) + 1;
        setLikenumber(newLikes.toString());
        onLike(id, newLikes.toString());
    };

    const navigate = useNavigate();

    const handleThreadClick = () => {
        navigate(`/forum/thread/${id}`);
    };

    const handleNotifyBtn = () => {
        // do something when the Notify button is clicked
        toast("Notification has been enabled successfully!", {
            position: toast.POSITION.BOTTOM_RIGHT,
        });
    };

    return (
        <div className="thread-sumary">
            <ThreadContainer>
                <div className="sub-thread-sumary" onClick={handleThreadClick}>
                    <ThreadTitle>{title}</ThreadTitle>
                    {/* <TopicHagtagButton>{topic}</TopicHagtagButton> */}
                    <ThreadContent>{content}</ThreadContent>
                    <ThreadAuthor>Start by: {author}</ThreadAuthor>
                    <ThreadDate>At: {datePost}</ThreadDate>
                </div>

                <ThreadStats>
                    <span>{replies} replies</span>
                </ThreadStats>
                <br></br>

                <ThreadStats>
                    {" "}
                    {/* <LikeFeatures likes={likes}/> */}
                    {/* Like */}
                    <div>
                        <div>
                            <span style={{ display: "flex" }}>
                                <span style={{ display: "flex" }}>
                                    <HeartIcon />
                                    <span style={{ margin: "0 5px" }}>
                                        {likenumber}{" "}
                                    </span>
                                </span>

                                <div>
                                    {" "}
                                    {likenumber <= 1 ? (
                                        <span>Like</span>
                                    ) : (
                                        <span>Likes</span>
                                    )}{" "}
                                </div>
                            </span>
                        </div>
                        <div className="like-button">
                            <LikeButton onClick={onClickLike}>Like</LikeButton>
                        </div>
                    </div>
                    {/* View */}
                    <ViewFeatures view_num={views} />
                    <InteractButton onClick={handleNotifyBtn}>
                        Turn on Notify
                    </InteractButton>
                </ThreadStats>

                <ToastContainer />
            </ThreadContainer>
        </div>
    );
};

export default ThreadSummary;
