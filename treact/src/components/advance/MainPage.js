import React from "react";
import tw from 'twin.macro';
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import StyleFeatureLeft from "./StyleFeatureLeft.js";
import StyleFeatureRight from "./StyleFeatureRight.js";
import IntroMainPage from "./IntroMainPage.js";

import "./styles.css"

// const Subheading = tw.span `tracking-wider text-sm font-medium`;

const HighlightedText = tw.span `bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block text-xl`;




const MainAdvance = () => {
    const Description = tw.span `inline-block mt-8`;

    return (
        <>
            <AnimationRevealPage>
                <IntroMainPage />
                 
                <StyleFeatureLeft 
                    heading={
                        <>
                            Summary
                            <div className="high-light-component">
                                <HighlightedText>Anything to get the core idea</HighlightedText>
                            </div>
                        </>
                    }
                    description={
                        <div className="introduce-content">
                            Introducing our AI-powered summary tool that extracts essential information from any text-based content, including questions, articles, and blogs. Our advanced algorithms provide a comprehensive yet concise overview, saving you time and effort while ensuring no critical details are missed. Streamline your work, enhance productivity, and experience the power of AI with our summary feature today!
                        </div>
                    }
                    imageSrc="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
                    imageDecoratorBlob={true}
                    primaryButtonText="Try Now!"
                    watchVideoButtonText="Watch tutorial video!"
                />
                <StyleFeatureRight 
                    heading={
                        <>
                            Explain
                            <br/>
                            <div className="high-light-component">
                                <HighlightedText>Anything in the easiest way to understand</HighlightedText>
                            </div>
                        </>
                    }
                    description={
                        <div className="introduce-content">
                            <Description>
                                Slearn is an application designed to explain complex issues in an easy-to-understand manner and provide illustrative examples to support better understanding. This special feature is entirely executed by modern AI technology, making the process of learning and problem-solving for users easier and more convenient. The explanations provided by Slearn will help users grasp complex concepts in an intuitive and vivid way.
                            </Description>
                        </div>
                    }                    
                    primaryButtonText="Try Now!"
                    imageSrc={"https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"}
                    imageDecoratorBlob={true}
                    imageDecoratorBlobCss={tw `left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
                    watchVideoButtonText="Watch tutorial video!"/>
            </AnimationRevealPage>
        </>
    );
};

export default MainAdvance;
