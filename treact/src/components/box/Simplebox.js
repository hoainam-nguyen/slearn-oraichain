import React, {useState} from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled, {css} from "styled-components/macro"; // eslint-disable-line
import {Container, ContentWithPaddingXl} from "components/misc/Layouts.js";
import {SectionHeading, Subheading as SubheadingBase} from "components/misc/Headings.js";
import {SectionDescription} from "components/misc/Typography.js";
import {ReactComponent as QuoteIconBase} from "images/quotes-l.svg"
import {ReactComponent as ArrowLeftIcon} from "images/arrow-left-3-icon.svg"
import {ReactComponent as ArrowRightIcon} from "images/arrow-right-3-icon.svg"
import UpdateProfineBtn from "./UpdateProfileBtn.js"
import UserInfoBasic from "./UserInfoBasicTable.js"
import UserInfoCourseTable from "./UserInfoCourseTable"
import UserInfoChatbotTable from "./UserInfoChatbotTable"



import "slick-carousel/slick/slick.css";
import "./styles.css"
const PrimaryBackgroundContainer = tw(Container)`-mx-8 px-8 text-gray-100 text-gray-100`;

const HeadingContainer = tw.div ``;
const Subheading = tw.h2 `text-xl sm:text-2xl text-left text-gray-900 mb-4`;
const Heading = tw(SectionHeading)`text-gray-700`;
const Description = tw(SectionDescription)`mx-auto text-center text-gray-300`;

const TestimonialsSlider = styled(Slider)`
${
    tw `flex mt-8 mx-auto max-w-xs sm:max-w-xl lg:max-w-5xl text-left bg-white rounded-lg text-gray-900 border border-gray-500`
}
.slick-track {
    ${
    tw `flex!`
}
}
.slick-slide {
    ${
    tw `h-auto`
}
}
.slick-slide > div {
    ${
    tw `h-full`
}
}
`;
const Testimonial = tw.div `px-6 py-12 sm:px-20 sm:py-16 focus:outline-none flex! flex-col justify-between h-full`
const QuoteContainer = tw.div `relative mb-1`
const QuoteIcon = tw(QuoteIconBase)`absolute opacity-15 top-0 left-0 transform -translate-y-2 -translate-x-1/2 sm:-translate-x-full w-10 fill-current text-primary-500`
const Quote = tw.blockquote `font-medium sm:font-normal relative text-center sm:text-left rounded-lg`
const Quotetitle = tw.blockquote `font-bold text-xl sm:font-bold relative text-center sm:text-left bg-gray-200 p-1 rounded-lg`
const CustomerInfoAndControlsContainer = tw.div `mt-8 flex items-center flex-col sm:flex-row justify-center text-center sm:text-left`
const CustomerImage = tw.img `w-16 h-16 rounded-full`
const CustomerNameAndProfileContainer = tw.div `mt-4 sm:mt-0 sm:ml-4 flex flex-col`
const CustomerName = tw.span `text-lg font-semibold`
const CustomerProfile = tw.span `text-sm font-normal text-gray-700`
const ControlsContainer = tw.div `sm:ml-auto flex`
const Coursedetails = tw.a `cursor-pointer text-primary-900 border-transparent hocus:border-primary-500 hocus:text-primary-500 transition duration-300`;
const ControlButton = styled.button `
${
    tw `text-gray-600 hover:text-primary-700 focus:outline-none transition-colors duration-300 ml-4 first:ml-0 sm:first:ml-4 mt-4 sm:mt-0`
}
.icon {
    ${
    tw `fill-current w-6`
}
}
`;

export default({
    subheading = "",
    heading = "Your profile",
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    testimonials = {
        UserBasicInfo: {
            name: "John Doe",
            age: 30,
            phone: "123-456-7890",
            email: "johndoe@example.com",
            nickname: "johndoe",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            address: "123 Main St, Anytown, USA"
        },
        courses: [
            {
                name: "Python AI course",
                link: "#",
                discription: "Basic course for AI, Basic course for AI..."
            }, {
                name: "Python AI course",
                link: "#",
                discription: "Basic course for AI, Basic course for AI..."
            }, {
                name: "Python AI course",
                link: "#",
                discription: "Basic course for AI, Basic course for AI..."
            },
        ],
        chatbots: [
            {
                name: "Python AI course",
                link: "#",
                discription: "Basic course for AI, Basic course for AI..."
            }, {
                name: "Python AI course",
                link: "#",
                discription: "Basic course for AI, Basic course for AI..."
            }, {
                name: "Python AI course",
                link: "#",
                discription: "Basic course for AI, Basic course for AI..."
            }
        ]

        // chatbot: {
        //     title: "Your ChatBot",
        //     info: [
        //         {
        //             name: "ChatBot Scentext",
        //             API: "/chatbot/image/Scentext"
        //         }, {
        //             name: "ChatBot Quizz",
        //             API: "/chatbot/language/LanguageGPT"
        //         }
        //     ]

        // }
    }
}) => {
    const [sliderRef, setSliderRef] = useState(null)

    return (
        <PrimaryBackgroundContainer>
            <ContentWithPaddingXl>
                <HeadingContainer>
                    <Heading>{heading}</Heading>
                    <UpdateProfineBtn/>
                    <br></br>
                    <br></br>
                </HeadingContainer>

                <TestimonialsSlider>
                    <UserInfoBasic name={
                            testimonials.UserBasicInfo.name
                        }
                        age={
                            testimonials.UserBasicInfo.age
                        }
                        phone={
                            testimonials.UserBasicInfo.phone
                        }
                        email={
                            testimonials.UserBasicInfo.email
                        }
                        nickname={
                            testimonials.UserBasicInfo.nickname
                        }
                        bio={
                            testimonials.UserBasicInfo.bio
                        }
                        address={
                            testimonials.UserBasicInfo.address
                        }/>
                </TestimonialsSlider>

                <TestimonialsSlider> 
                    <div className="list-courses">
                        <UserInfoCourseTable courses={testimonials.courses} />
                    </div>
                </TestimonialsSlider>

                <TestimonialsSlider> 
                    <div className="list-chatbot">
                        <UserInfoChatbotTable chatbots={testimonials.chatbots} />
                    </div>
                </TestimonialsSlider>


               
            </ContentWithPaddingXl>
        </PrimaryBackgroundContainer>
    );
};
