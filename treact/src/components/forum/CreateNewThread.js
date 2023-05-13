import React from "react";

// import ThreadSummary from "./threadSumary";
// import SearchBar from "./SearchBar";
// import CreateNewThreadBtn from "./createNewThreadBtn";

import "./styles.css"
import FormComponent from "./InputTitle";


const CreateNewThread = () => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);

    const handleSubmitBtn = (event) => {
        event.preventDefault();
        const newThread = {
            owner: "user_id",
            metadata: {
                title: { title },
                content: { content },
                images: [{ image }],
                likes: "0",
                views: "0",
                post_at: "1/1/2023",
            },
            comments: [],
            config: {},
        };
        console.log(newThread);
    };

    return (
        <>
            <div className="create-new-thread">
                Crate New Thread
            </div>

            <FormComponent/>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

            </>
    );
};

export default CreateNewThread;
