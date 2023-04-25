import React, { useState, useEffect, useRef } from 'react';
import tw, {styled} from 'twin.macro';

import Header from "../headers/light.js";
import Footer from "../footers/FiveColumnWithInputForm.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

export const ChatbotContainer = styled.div`
  ${tw`rounded-t-lg
  m-4
  border-2
  border-gray-300`};
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
  h-64
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
`
const TextRep = tw.div`
    rounded-lg
    m-2
    p-2
`

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const containerRef = useRef(null);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    const container = containerRef.current;
    container.scrollTo(0, container.scrollHeight);
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message !== '') {
      setMessages([...messages, { sender: 'user', text: message },{sender:'bot', text:'Nguyễn Minh Lý là sinh viên UIT, độc thận vui tính ngày ngày thả thính :))'}]);
      setMessage('');
      // Call API to send message and get response
      // Add response to messages state
    }
  };

  return (
    <AnimationRevealPage>
        <Header/>
        <ChatbotContainer>
            <ChatHeader>
                <ChatTitle>BotQuizz</ChatTitle>
            </ChatHeader>
            <ChatBody ref={containerRef}>
                {messages.map((message, index) => (
                <div key={index}>
                    {message.sender === 'user' ? (
                    <TextReq>
                        <span>You:</span> {message.text}
                    </TextReq>
                    ) : (
                    <TextRep>
                        <span>Chatbot:</span> {message.text}
                    </TextRep>
                    )}
                </div>
                ))}
            </ChatBody>
            <form onSubmit={handleSubmit}>
                <ChatInput type="text" value={message} placeholder="Write question here ..." onChange={handleChange} />
                <ChatButton type="submit">Send</ChatButton>
            </form>
        </ChatbotContainer>
        <Footer/>
    </AnimationRevealPage>
  )
}

export default Chatbot;
