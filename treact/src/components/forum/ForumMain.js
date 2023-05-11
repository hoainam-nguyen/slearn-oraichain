import React from "react";

import ThreadSummary from "./ThreadSumary";
import SearchBar from "./SearchBar";
import CreateNewThreadBtn from "./CreateNewThreadBtn";

import "./styles.css"


const Forum = ({
    data = [
        {
            "id": "32_address",
            "owner": "user_id",
            "metadata": {
                "title": "Fix bug for React code",
                "content": "I have a problem with my code...",
                "images": [],
                "likes": "5",
                "views": "20",
                "post_at": "1/1/2023"
            },
            "comments": [
                {
                    "created_by": "",
                    "content": "",
                    "images": [],
                    "upvoting": 1,
                    "downvoting": 1
                }
            ],
            "config": {}
        }
    ]
}) => {

    const [newdata, setNewData] = React.useState(data)

    const handleLike = (threadId, newLikes) => { // Tìm thread có id tương ứng trong biến data
        const updatedData = data.map(thread => {
            if (thread.id === threadId) { // Cập nhật giá trị likes
                return {
                    ...thread,
                    metadata: {
                        ...thread.metadata,
                        likes: newLikes.toString()
                    }
                };
            }
            return thread;
        });

        // Cập nhật biến data với giá trị mới
        setNewData(updatedData);
    };

    return (
        <>
            <div className="header-forum">
                <SearchBar/>
                    <br></br>
                    <CreateNewThreadBtn/>
                </div>

                <div className="latest-threads">
                    Latest threads
                </div>

                <div className="list-thread">
                    {
                    newdata.map((value, index) => {

                        return (
                            <ThreadSummary id={
                                    value.id
                                }
                                title={
                                    value.metadata.title
                                }
                                content={
                                    value.metadata.content
                                }
                                author={
                                    value.owner
                                }
                                datePost={
                                    value.metadata.post_at
                                }
                                replies={
                                    value.comments.length
                                }
                                likes={
                                    value.metadata.likes
                                }
                                views={
                                    value.metadata.views
                                }
                                onLike={handleLike}/>
                        )
                    })
                } </div>

            </>
    );
};

export default Forum;
