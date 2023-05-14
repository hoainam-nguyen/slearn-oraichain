import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import TabGrid from "components/cards/TabCardGrid.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import DownloadApp from "components/cta/DownloadApp.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";

import chefIconImageSrc from "images/chef-icon.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import shopIconImageSrc from "images/shop-icon.svg";
import chatbotImage from "images/chatbot-image.jpeg";
import forumImage from "images/forum-image.jpg";
import whyChooseUsImage from "images/why-choose-us.jpg";

export default () => {
    const Subheading = tw.span`tracking-wider text-sm font-medium`;
    const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
    const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
    const Description = tw.span`inline-block mt-8`;
    const imageCss = tw`rounded-4xl`;
    return (
        <AnimationRevealPage>
            <Hero
                heading={
                    <>
                        Smart AI Chatbot{" "}
                        <HighlightedText>Your best tutor.</HighlightedText>
                    </>
                }
                description="The chatbot will interact with you like a friend, allowing for discussions on various topics just like two friends conversing. However, the knowledge of the chatbot is that of an expert, proficient in multiple fields, enabling it to provide you with accurate information."
                imageSrc={chatbotImage}
                imageCss={imageCss}
                imageDecoratorBlob={true}
                // primaryButtonText="Order Now"
                // watchVideoButtonText="Meet The Chefs"
            />
            <MainFeature
                subheading={<Subheading>Community</Subheading>}
                heading={
                    <>
                        Academic Forum
                        <wbr />{" "}
                        <HighlightedText>
                            exchange, learn, and grow
                        </HighlightedText>
                    </>
                }
                description={
                    <Description>
                        {/* <span styles="text-align: justify;"> */}A forum is a
                        place for asking questions, discussing difficult issues,
                        and learning new things from other users, thereby
                        further developing oneself. With the use of blockchain
                        technology for storing information, it will be an
                        excellent platform to validate one's knowledge.
                        {/* </span> */}
                    </Description>
                }
                buttonRounded={false}
                textOnLeft={false}
                primaryButtonText="Latest Offers"
                imageSrc={forumImage}
                imageCss={imageCss}
                imageDecoratorBlob={true}
                imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
            />
            {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
            <TabGrid heading={<>Our Chatbot</>} />
            {/* <Features
                heading={
                    <>
                        Amazing <HighlightedText>Services.</HighlightedText>
                    </>
                }
                cards={[
                    {
                        imageSrc: shopIconImageSrc,
                        title: "230+ Locations",
                        description:
                            "Lorem ipsum donor amet siti ceali placeholder text",
                        url: "https://google.com",
                    },
                    {
                        imageSrc: chefIconImageSrc,
                        title: "Professional Chefs",
                        description:
                            "Lorem ipsum donor amet siti ceali placeholder text",
                        url: "https://timerse.com",
                    },
                    {
                        imageSrc: celebrationIconImageSrc,
                        title: "Birthday Catering",
                        description:
                            "Lorem ipsum donor amet siti ceali placeholder text",
                        url: "https://reddit.com",
                    },
                ]}
                imageContainerCss={tw`p-2!`}
                imageCss={tw`w-20! h-20!`}
            /> */}
            <MainFeature2
                subheading={<Subheading>A Reputed Brand</Subheading>}
                heading={
                    <>
                        Why <HighlightedText>Choose Us ?</HighlightedText>
                    </>
                }
                statistics={[
                    {
                        key: "Orders",
                        value: "94000+",
                    },
                    {
                        key: "Customers",
                        value: "11000+",
                    },
                    {
                        key: "Chefs",
                        value: "1500+",
                    },
                ]}
                primaryButtonText="Order Now"
                primaryButtonUrl="https://order.now.com"
                imageInsideDiv={false}
                imageSrc={whyChooseUsImage}
                imageCss={Object.assign(tw`bg-cover`, imageCss)}
                imageContainerCss={tw`md:w-1/2 h-auto`}
                imageDecoratorBlob={true}
                imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
                textOnLeft={true}
            />
            {/* <Testimonial
                subheading=""
                heading={
                    <>
                        Customers <HighlightedText>Love Us.</HighlightedText>
                    </>
                }
            /> */}
            {/* <DownloadApp
                text={
                    <>
                        People around you are ordering delicious meals using the{" "}
                        <HighlightedTextInverse>
                            Treact App.
                        </HighlightedTextInverse>
                    </>
                }
            /> */}
            <Footer />
        </AnimationRevealPage>
    );
};
