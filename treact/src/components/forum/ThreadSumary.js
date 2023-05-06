import React from "react";
import tw from "twin.macro";
import {useNavigate} from 'react-router-dom';


import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./styles.css"
import LikeFeatures from "./LikeFeatures";
import ViewFeatures from "./ViewFeatures";


const ThreadContainer = tw.div `bg-white rounded-md shadow-md p-4 mt-4`;
const ThreadTitle = tw.h2 ` text-2xl font-bold text-gray-800 mb-2`;
const ThreadContent = tw.p `text-lg text-gray-700 mb-4`;
const ThreadAuthor = tw.p `text-gray-600 font-medium`;
const ThreadDate = tw.p `text-gray-600`;
const ThreadStats = tw.div `flex justify-between items-center text-gray-600`;
const InteractButton = tw.button `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-blue-500`;
const TopicHagtagButton = tw.button `bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-green-500`;


const ThreadSummary = ({
    id,
    title,
    topic,
    content,
    author,
    datePost,
    replies,
    views
}) => {

    const navigate = useNavigate();

    const handleThreadClick = () => {
        navigate(`/forum/thread/${id}`);
    };

    const handleNotifyBtn = () => { // do something when the Notify button is clicked
        toast('Notification has been enabled successfully!');
    };


    return (
        <div className="thread-sumary">
            <ThreadContainer>
                <div className="sub-thread-sumary"
                    onClick={handleThreadClick}>
                    <ThreadTitle>{title}</ThreadTitle>
                    <TopicHagtagButton>{topic}</TopicHagtagButton>
                    <ThreadContent>{content}</ThreadContent>
                    <ThreadAuthor>Start by: {author}</ThreadAuthor>
                    <ThreadDate>At: {datePost}</ThreadDate>
                </div>

                <ThreadStats>
                    <span>{replies}replies</span>
                </ThreadStats>
                <br></br>

                <ThreadStats>
                    <LikeFeatures id={id}/>
                    <ViewFeatures view_num={views}/>
                    <InteractButton onClick={handleNotifyBtn}>Turn on Notify</InteractButton>
                </ThreadStats>
                
                <ToastContainer/>

            </ThreadContainer>
        </div>
    );
};

export default ThreadSummary;
