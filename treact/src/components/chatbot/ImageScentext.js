import { useState, useRef } from 'react';
import tw, { styled } from 'twin.macro';
import Tesseract from 'tesseract.js';

import Header from "../headers/light.js";
import Footer from "../footers/FiveColumnWithInputForm.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { ChatbotContainer, ChatHeader } from "./LanguageGPT.js";

const Container = styled.div`
  ${tw`flex flex-col h-screen   `}
`;


const Messages = styled.div`
  ${tw`flex-1 p-4 overflow-y-auto`}
`;

const Message = styled.div`
  ${tw`mb-4`}
`;

const MessageText = styled.div`
  ${tw`p-2 bg-gray-200 rounded-lg`}
`;

const MessageImage = styled.img`
  ${tw`max-w-full rounded-lg shadow-lg border`}
`;

const Input = styled.input`
  ${tw`w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
`;

export default () => {
  const [messages, setMessages] = useState([]);
  const inputRef = useRef(null);

  function handleSendMessage() {
    const messageText = inputRef.current.value;
    setMessages([...messages, { type: 'text', text: messageText }]);
    inputRef.current.value = '';
  }

  async function handleImageUpload(event) {
    const file = event.target.files[0];
    console.log("Thái")
    if (!file) return;

    const image = URL.createObjectURL(file);

    try {
      const { data: { text } } = await Tesseract.recognize(file);
      setMessages([...messages, { type: 'image', image }, { type: 'text', text }]);
    } catch (error) {
      console.error(error);
      setMessages([...messages, { type: 'text', text: 'Failed to recognize text from image.' }]);
    }
    console.log(messages)
  }

  return (
    <AnimationRevealPage>
        <Header></Header>
        <ChatbotContainer>

            <Container>
            <ChatHeader>Bot Scentext</ChatHeader>
            <Messages>
                {messages.map((message, index) => (
                <Message key={index}>
                    {message.type === 'text' && (
                    <MessageText>{message.text}</MessageText>
                    )}
                    {message.type === 'image' && (
                    <MessageImage src={message.image} alt="Uploaded image" />
                    )}
                </Message>
                ))}
            </Messages>
            <div className="flex p-4">
                <Input type="text" placeholder="Type your message..." ref={inputRef} />
                <button onClick={handleSendMessage}>Send</button>
                <label>
                    Upload Image
                    <input type="file" accept="image/*" onChange={handleImageUpload} hidden />
                </label>
            </div>
            </Container>
        </ChatbotContainer>
        <Footer></Footer>
    </AnimationRevealPage>)
}