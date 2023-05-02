import React from "react";
// import tw from "twin.macro";
// import Thread from "./thread";
import Question from "./question";
import Answer from "./othersUsesAnswer";
import MyAnswer from "./myAnswer";

import "./styles.css"

const ThreadInfo = () => {
  return (
      <>
      <br></br>
      <br></br>
      <br></br>

      <div className="question">
        <Question 
          id="1"
          title="Fix bug for React code" 
          topic="React"
          content="I have a problem with my code..." 
          author="Davis" 
          datePost="1/1/2023" 
          replies="4" 
          views="100" 
        />
      </div>

      <div className="answer">
        <Answer
          id="1"
          content="You should do this..."
          author="Anne"
          datePost="1/1/2023"
          userAvatar="https://i.imgur.com/8Km9tLL.png"
        />
        <Answer
          id="2"
          content="You should do this..."
          author="Jennifer"
          datePost="1/1/2023"
          userAvatar="https://i.imgur.com/8Km9tLL.png"
        />
      </div>

      <div className="my-answer">
        <MyAnswer
            userAvatar="https://i.imgur.com/8Km9tLL.png"
        />
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      </>
  );
};

export default ThreadInfo;