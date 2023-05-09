import React from "react";
import tw from "twin.macro";

const ChatbotBox = tw.div`
  relative
  p-4
  bg-white
  rounded-lg
  shadow-md
  transition-all
  duration-300
  hover:shadow-lg
  hover:-translate-y-1
  hover:scale-105
`;

const ChatbotBadge = tw.div`
  absolute
  top-0
  left-0
  bg-blue-500
  text-white
  font-bold
  text-sm
  px-2
  py-1
  rounded-tr-lg
  rounded-bl-lg
`;

const ChatbotName = tw.h3`
  text-lg
  font-bold
  mb-2
  truncate
`;

const ChatbotDescription = tw.p`
  text-gray-600
  text-sm
  mb-2
  truncate
`;

const ChatbotLink = tw.a`
  inline-block
  text-blue-500
  hover:text-blue-700
`;

const Title = tw.h1 `text-2xl font-bold mb-4`;

const ChatbotList = ({ chatbots }) => {
  return (
    <div >
      <Title>Chatbots</Title>
      {chatbots.map((chatbot, index) => (
        <div className="chatbot-sumary">
          <ChatbotBox
            key={chatbot.name}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            {/* <ChatbotBadge>New!</ChatbotBadge> */}
            <ChatbotName>{chatbot.name}</ChatbotName>
            <ChatbotDescription>{chatbot.discription}</ChatbotDescription>
            <ChatbotLink href={chatbot.link}>Learn more</ChatbotLink>
          </ChatbotBox>
        </div>

      ))}
    </div>
  );
};

export default ChatbotList;
