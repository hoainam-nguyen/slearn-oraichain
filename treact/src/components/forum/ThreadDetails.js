import React from "react";
// import tw from "twin.macro";
// import Thread from "./thread";
import Question from "./QuestionContent";
import Answer from "./OthersUserAnswer";
import MyAnswer from "./MyAnswer";
import SearchBar from "./SearchBar";
import CreateNewThreadBtn from "./CreateNewThreadBtn";

import "./styles.css"

const ThreadInfo = () => {

    const question_fake_data = {
        id: "1",
        title: "Fix bug for React code",
        topic: "React",
        content: "I have a problem with my code...",
        author: "Davis",
        datePost: "1/1/2023",
        replies: "4",
        views: "100"
    }

    const answer_fake_data = [
        {
            id: "1",
            content: "You should do this...",
            author: "Anne",
            datePost: "1/1/2023",
            userAvatar: "https://i.imgur.com/8Km9tLL.png"
        }, {
            id: "2",
            content: "You should do this...",
            author: "Anne",
            datePost: "1/1/2023",
            userAvatar: "https://i.imgur.com/8Km9tLL.png"
        }
    ]


    return (
        <>
            <div className="header-forum">
                <br></br>
                <br></br>
                <SearchBar/>
                    <br></br>


                    <CreateNewThreadBtn/>
                        <br></br>
                        <br></br>


                    </div>


                    <br></br>
                    <br></br>

                    <br></br>

                    <div className="question">
                        <Question id={
                                question_fake_data.id
                            }
                            title={
                                question_fake_data.title
                            }
                            topic={
                                question_fake_data.topic
                            }
                            content={
                                question_fake_data.content
                            }
                            author={
                                question_fake_data.author
                            }
                            datePost={
                                question_fake_data.datePost
                            }
                            replies={
                                question_fake_data.replies
                            }
                            views={
                                question_fake_data.views
                            }/>
                    </div>

                    <div className="answer">
                        {
                        answer_fake_data.map((value, index) => {
                            return (
                                <Answer id={
                                        value.id
                                    }
                                    content={
                                        value.content
                                    }
                                    author={
                                        value.author
                                    }
                                    datePost={
                                        value.datePost
                                    }
                                    userAvatar={
                                        value.userAvatar
                                    }/>
                            )
                        })
                    } </div>

                    <div className="my-answer">
                        <MyAnswer userAvatar="https://i.imgur.com/8Km9tLL.png"/>
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
