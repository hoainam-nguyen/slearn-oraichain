import React, { useState, useEffect, useRef } from 'react';
import tw from 'twin.macro';

const ChatBotContainer = tw.div`
  w-full
  max-w-md
  mx-auto
  rounded-lg
  shadow-lg
  bg-white
  overflow-hidden
`;

const ChatBotHeader = tw.div`
  px-4
  py-3
  bg-blue-500
  text-white
`;

const ChatBotBody = tw.div`
  px-4
  py-2
  h-64
  overflow-y-auto
`;

const ChatBotInput = tw.input`
  w-full
  px-4
  py-2
  border-t
  border-gray-300
  focus:outline-none
  focus:border-blue-500
`;

const ChatBotMessage = tw.div`
  mt-2
  bg-gray-200
  px-4
  py-2
  rounded-lg
`;

const ChatBotMessageBot = tw(ChatBotMessage)`
  bg-blue-500
  text-white
`;

const ChatBotMessageUser = tw(ChatBotMessage)`
  bg-gray-500
  text-white
`;

const ChatBotReply = tw.div`
  flex
  justify-end
  mt-2
  text-gray-500
`;

const ChatBotIndicator = tw.div`
  inline-block
  w-3
  h-3
  bg-blue-700
  rounded-full
  animate-ping
  ml-2
`;

export default () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isBotTyping, setIsBotTyping] = useState(false);
  const chatBotBodyRef = useRef(null);

  const handleInputKeyDown = (event) => {
    if (event.key === 'Enter') {
      setMessages([...messages, { type: 'user', text: inputValue }]);
      setInputValue("");
      setIsBotTyping(true);
    }
  };

  useEffect(() => {
    if (isBotTyping) {
      const timerId = setTimeout(() => {
        setMessages([...messages, { type: 'bot', text: 'Hello from the bot!' }]);
        setIsBotTyping(false);
      }, 1500);
      return () => clearTimeout(timerId);
    }
  }, [isBotTyping]);

  useEffect(() => {
    chatBotBodyRef.current.scrollTop = chatBotBodyRef.current.scrollHeight;
  }, [messages]);

  return (
    <ChatBotContainer>
      <ChatBotHeader>Chat Bot</ChatBotHeader>
      <ChatBotBody ref={chatBotBodyRef}>
        {messages.map((message, index) =>
          message.type === 'bot' ? (
            <ChatBotMessageBot key={index}>{message.text}</ChatBotMessageBot>
          ) : (
            <ChatBotMessageUser key={index}>{message.text}</ChatBotMessageUser>
          )
        )}
        {isBotTyping && (
          <ChatBotReply>
            Bot is typing...
            <ChatBotIndicator />
          </ChatBotReply>
        )}
      </ChatBotBody>
      <div>
        <ChatBotInput
          placeholder="Type your message here"
          onKeyDown={handleInputKeyDown}
          value={inputValue}
          onChange={(e)=> {setInputValue(e.target.value)}}
        />
    </div>
    </ChatBotContainer>
      )
}
