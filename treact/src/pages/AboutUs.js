import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";

import SmartIconImage from "images/brain-solid.svg";
import FlexIconImage from "images/shuffle-solid.svg";
import TransparencyIconImage from "images/circle-check-regular.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading={<Subheading>About Slearn</Subheading>}
        heading="Smart learning with AI on Oraichan platform."
        description="The SLearn project is an intelligent learning and community education platform that integrates artificial intelligence, blockchain, and Web3 on the Oraichain platform. With the motto Smart - Flexibility - Transparency, the project focuses on improving user experience and bringing smart education to communities worldwide, with the vision of becoming a cutting-edge technology platform for digitizing education and fostering sustainable educational development."
        buttonRounded={false}
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
      />
      <MainFeature1
        subheading={<Subheading>Our Vision</Subheading>}
        heading="We aim to disrupt the design space."
        description="Our vision is to build an intelligent learning and community education platform that brings value and convenience to users. We hope that SLearn will not only be a smart education platform but also a powerful educational community without borders, where users can exchange, learn, and interact with each other. We aim to deliver value to users, contribute to improving the quality of education, and foster sustainable societal development.

        We aspire to be one of the pioneering organizations in implementing new technologies to drive the progress of education. We believe that by harnessing AI, Blockchain, and Web3 technologies, we can enhance the quality of education and provide opportunities for everyone to access knowledge, learning, and development in an easy and efficient manner."
        buttonRounded={false}
        primaryButtonText="Contact Us"
        imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
        textOnLeft={false}
      />
      <Features
        subheading={<Subheading>Our Values</Subheading>}
        heading="We follow these."
        description="We propose SLearn with the aim of building an intelligent learning and educational community platform based on the principles of Smart - Flexibility - Transparency."
        cards={[
          {
            imageSrc: SmartIconImage,
            title: "Smart",
            description: "AI is being applied to enhance the learning process for users through automated personalized learning methods, and providing individualized feedback for each lesson"
          },
          {
            imageSrc: FlexIconImage,
            title: "Flexibility",
            description: "Users can choose subjects, courses, and topics based on their preferences and needs. They can also select the learning format and suitable time in a flexible manner. This allows users to have a better learning experience and reduce time pressure."
          },
          {
            imageSrc: TransparencyIconImage,
            title: "Transparency",
            description: "The platform applies blockchain technology to store decentralized user data such as learning progress, results, and issued certifications, enabling users to track and manage their learning profiles."
          },
        ]}
        linkText=""
      />
      <TeamCardGrid 
        subheading={<Subheading>Our Team</Subheading>}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
