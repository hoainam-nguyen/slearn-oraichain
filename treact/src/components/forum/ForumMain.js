import React from "react";

import ThreadSummary from "./ThreadSumary";
import SearchBar from "./SearchBar";
import CreateNewThreadBtn from "./CreateNewThreadBtn";

import "./styles.css"


const Forum = ({
    data = [
        {
            id: "1",
            title: "Fix bug for React code",
            topic: "React",
            content: "I have a problem with my code...",
            author: "Davis",
            datePost: "1/1/2023",
            replies: "4",
            views: "100"
        }, {
            id: "2",
            title: "Fix bug for React code",
            topic: "Python",
            content: "I have a problem with my code...",
            author: "Davis",
            datePost: "1/1/2023",
            replies: "4",
            views: "100"
        }, {
            id: "3",
            title: "Fix bug for React code",
            topic: "Machine Learning",
            content: "I have a problem with my code...",
            author: "Davis",
            datePost: "1/1/2023",
            replies: "4",
            views: "100"
        }
    ]
}) => {

    return (
        <>
            <div className="header-forum">
                <SearchBar/>
                <br></br>
                <CreateNewThreadBtn/>
            </div>

                    <div className="Latest-threads">
                        Latest threads
                    </div>

                    <div className="list-thread">
                        {
                        data.map((value, index) => {

                            return (
                                <ThreadSummary id={
                                        value.id
                                    }
                                    title={
                                        value.title
                                    }
                                    topic={
                                        value.topic
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
                                    replies={
                                        value.replies
                                    }
                                    views={
                                        value.views
                                    }/>
                            )
                        })
                    } </div>

                </>
    );
};

export default Forum;
