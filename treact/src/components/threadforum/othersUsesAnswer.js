import React from "react";
import "./styles.css"

import tw from "twin.macro";



const ThreadContainer = tw.div`
  bg-white rounded-md shadow-md p-4 mt-4`;

// const ThreadTitle = tw.h2` 
//   text-2xl font-bold text-gray-800 mb-2`;

const ThreadContent = tw.p`
  text-lg text-gray-700 mb-4`;

const ThreadAuthor = tw.p`
  text-gray-600 font-medium`;

const ThreadDate = tw.p`
  text-gray-600`;

const ThreadStats = tw.div`
  flex justify-between items-center text-gray-600`;

const InteractButton = tw.button`
  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-blue-500`;

//   const TopicHagtagButton = tw.button`
//   bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-green-500`;

// const Answer = ({ content, author, datePost}) => {
//   const handleThreadClick = () => {
//   };

//   return (
//     <div className="thread-sumary">
//       <ThreadContainer onClick={handleThreadClick}>
//       <ThreadContent>{content}</ThreadContent>
//       <ThreadAuthor> Start by: {author}</ThreadAuthor>
//       <ThreadDate>At: {datePost}</ThreadDate>
//       <ThreadStats>
//       <InteractButton>Like</InteractButton>
//       </ThreadStats>
//       </ThreadContainer>
//     </div>
//   );
// };

const Answer = ({ content, author, datePost, userAvatar }) => {
    const handleThreadClick = () => {};
  
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
              <InteractButton>Like</InteractButton>
            </ThreadStats>
          </ThreadContainer>
        </div>
      </div>
    );
  };

  

export default Answer;