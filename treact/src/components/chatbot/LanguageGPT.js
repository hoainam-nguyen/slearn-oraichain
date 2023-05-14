import React, { useState, useEffect, useRef } from "react";
import tw, { styled } from "twin.macro";
import { useParams } from "react-router-dom";
import Header from "../headers/light.js";
import Footer from "../footers/FiveColumnWithInputForm.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import fetch from "node-fetch";
// import { Spinner } from 'react-bootstrap';
import "./styles.css";

export const ChatbotContainer = styled.div`
    ${tw`rounded-t-lg
  m-4
  border-2
  border-gray-300
  w-7/12
  mx-auto
  `};
`;

export const ChatHeader = tw.div`
  flex
  justify-between
  items-center
  px-4
  py-2
  border-b
  border-gray-300
`;

const ChatTitle = tw.h3`
  font-bold
  text-lg
`;

const ChatBody = tw.div`
  px-4
  py-2
  h-128
  overflow-y-auto
`;

const ChatInput = tw.input`
  w-full
  p-2
  border-2
  border-gray-300
  rounded-lg
  text-gray-900
`;

const ChatButton = tw.button`
  w-full
  mt-2
  p-2
  bg-blue-500
  text-white
  rounded-lg
`;
const TextReq = tw.div`
    bg-gray-200
    rounded-lg
    m-2
    p-2
`;
const Message = tw.div`p-2 my-2 mx-auto max-w-md rounded-xl shadow-md`;
const TextRep = tw.div`
    rounded-lg
    m-2
    p-2
`;
function postData(url = "", data = {}) {
    return fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then((response) => response.json());
}

const Chatbot = ({ type = "slearn" }) => {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const containerRef = useRef(null);

    const handleChange = (e) => {
        setMessage(e.target.value);
    };

    useEffect(() => {
        const container = containerRef.current;
        container.scrollTo(0, container.scrollHeight);
    }, [messages]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (message !== "") {
            setMessages([
                ...messages,
                { sender: "user", text: message },
                { sender: "bot", text: "Loading ..." },
            ]);
            setMessage("");
            setIsLoading(true);

            const data = await postData(
                "https://aiclub.uit.edu.vn/namnh/multi_bot/chat",
                { bot_id: type, prompt: message }
            );
            // console.log(data)
            if (data.msg == "Finish!" && data.status_code == 200) {
                setMessages([
                    ...messages,
                    { sender: "user", text: message },
                    { sender: "bot", text: data.content.answer },
                ]);
            } else {
                setMessages([
                    ...messages,
                    { sender: "user", text: message },
                    { sender: "bot", text: `ERROR: ${data}` },
                ]);
            }
            setIsLoading(false);
            // console.log(message);
            // Call API to send message and get response
            // Add response to messages state
        }
    };

    return (
        <AnimationRevealPage>
            <Header />
            <div className="chatbot">
                <ChatbotContainer>
                    <ChatHeader>
                        <ChatTitle>Experience diversity, versatility in chatbots - Let us help you!</ChatTitle>
                    </ChatHeader>
                    <ChatBody ref={containerRef}>
                        {messages.map((message, index) => (
                            <div key={index}>
                                {message.sender === "user" ? (
                                    <TextReq>
                                        <span>You:</span> {message.text}
                                    </TextReq>
                                ) : (
                                    <TextRep>
                                        <span></span> {message.text}
                                    </TextRep>
                                )}
                            </div>
                        ))}
                    </ChatBody>
                    <form onSubmit={handleSubmit}>
                        <ChatInput
                            type="text"
                            value={message}
                            placeholder="Write question here ..."
                            onChange={handleChange}
                        />
                        <ChatButton type="submit">Send</ChatButton>
                    </form>
                </ChatbotContainer>
            </div>
            <Footer />
        </AnimationRevealPage>
    );
};

export default Chatbot;
