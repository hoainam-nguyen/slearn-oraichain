import React, {useState} from "react";

import {TextInputType1, TextInputType2, UploadButton} from "./Component.js";
import Dropdown from "./Dropdown.js";
import ButtonSubmitForm from "./SubmitBtn.js";

import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./styles.css";

const FormComponent = () => {
    const [formData, setFormData] = useState({
        name: "",
        id: "",
        charac: "",
        bio: "",
        greeting: "",
        defaultLanguage: "English",
        defaultVisibility: "Public",
        avatar: null
    });

    const placeholder = {
        "name": "Name",
        "id": "ID",
        "charac": "Characteristics",
        "bio": "Bio",
        "greeting": "Greeting"
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Form submitted!", formData);
        // show thanh cong

        // try { // Gửi dữ liệu đến máy chủ hoặc endpoint
        //     const response = await fetch("https://example.com/api/endpoint", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify(formData)
        //     });

        //     if (response.ok) {
        //         console.log("Data sent successfully!");
        //         // Xử lý phản hồi thành công (nếu cần)
        //     } else {
        //         console.log("Error:", response.status);
        //         // Xử lý lỗi (nếu cần)
        //     }
        // } catch (error) {
        //     console.log("Error:", error);
        //     // Xử lý lỗi (nếu cần)
        // }

        toast('Creating chatbot successfully!', {position: toast.POSITION.BOTTOM_RIGHT});
    };

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        setFormData((prevData) => ({
            ...prevData,
            avatar: file
        }));
    };

    const language = ["English", "Vietnamese"];
    const visibility = ["Public", "Private"];

    return (
        <div className="body-form-create-chatbot" tw="w-full max-w-md mx-auto">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <form className="main-form"
                >
                <div className="name-id-component">
                    <div className="name-id-row">
                        <div className="name-component">
                            <TextInputType1 label="BotName *" id="name" name="name" type="text" plageholder="Enter your name"
                                value={
                                    formData.name
                                }
                                onChange={handleInputChange}/>
                        </div>
                        <div className="id-component">
                            <TextInputType1 label="Bot ID* " id="id" name="id" type="text"
                                value={
                                    formData.id
                                }
                                onChange={handleInputChange}/>
                        </div>
                    </div>
                </div>

                {/* <div>
                    <TextInputType1 label="Characteristics* " id="charac" name="charac" type="text"
                        value={
                            formData.charac
                        }
                        onChange={handleInputChange}/>
                </div> */}

                <div className="bio-component">
                    <TextInputType2 label="Bio (Describe the bot you will create in a clear and specific manner. This will help increase its chances of being hired by others.)" id="bio" name="bio" type="text"
                        value={
                            formData.bio
                        }
                        onChange={handleInputChange}/>
                </div>

                <div>
                    <TextInputType2 label="Greeting* (Send a greeting when a user starts a new chat. For example: Hi, I'm [botname]. How can I assist you?)" id="greeting" name="greeting" type="text"
                        value={
                            formData.greeting
                        }
                        onChange={handleInputChange}/>
                </div>

                <div className="language-visible-file-submitbtn">

                    <div className="language-visible-component">
                        <div className="language-visible-row box">
                            <div className="language-component">
                                <span className="dropdown-title">Default language</span>
                                <br/>
                                <Dropdown options={language}
                                    selected={
                                        formData.defaultLanguage
                                    }
                                    onSelect={
                                        (value) => setFormData((prevData) => ({
                                            ...prevData,
                                            defaultLanguage: value
                                        }))
                                    }/>
                            </div>
                            <div className="visible-component">
                                <span className="dropdown-title">Default Visibility</span>
                                <br/>
                                <Dropdown options={visibility}
                                    selected={
                                        formData.defaultVisibility
                                    }
                                    onSelect={
                                        (value) => setFormData((prevData) => ({
                                            ...prevData,
                                            defaultVisibility: value
                                        }))
                                    }/>
                            </div>
                        </div>
                        <div className="box">
                            <UploadButton label="Upload relevant documents" id="avatar" name="avatar" type="file"
                                onChange={handleFileUpload}/>
                        </div>

                        <div className="box">
                            <ButtonSubmitForm onClick={handleSubmit}/>
                        </div>
                    </div>


                </div>

            </form>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <ToastContainer/>
        </div>

    );
};

export default FormComponent;
