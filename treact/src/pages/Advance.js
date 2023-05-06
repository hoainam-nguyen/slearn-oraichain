import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Advance from "components/advance/MainPage";
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";


export default ()=> {
    return  (<AnimationRevealPage>
        <Header/>
        <Advance></Advance>
        <Footer/>
    </AnimationRevealPage> )
}

// import React from "react";
// import tw from "twin.macro";
// import AnimationRevealPage from "helpers/AnimationRevealPage.js";
// import Hero from "components/hero/TwoColumnWithVideo.js";
// import MainFeature from "components/features/TwoColWithButton.js";
// import Footer from "components/footers/FiveColumnWithInputForm.js";


// export default () => {
//   const Subheading = tw.span`tracking-wider text-sm font-medium`;
//   const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block text-xl`;
//   const Description = tw.span`inline-block mt-8`;
//   const imageCss = tw`rounded-4xl`;
//   return (
//     <AnimationRevealPage>
//       <Hero
//         heading={<>Summary<HighlightedText>Anything with AI modern technique</HighlightedText></>}
//         description="Introducing our AI-powered summary tool that extracts essential information from any text-based content, including questions, articles, and blogs. Our advanced algorithms provide a comprehensive yet concise overview, saving you time and effort while ensuring no critical details are missed. Streamline your work, enhance productivity, and experience the power of AI with our summary feature today!"
//         imageSrc="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
//         imageCss={imageCss}
//         imageDecoratorBlob={true}
//         primaryButtonText="Order Now"
//         watchVideoButtonText="Meet The Chefs"
//       />

//       <MainFeature
//         subheading={<Subheading>Established Since 2014</Subheading>}
//         heading={
//           <>
//             Explain
//             <br /> <HighlightedText>over 5 years.</HighlightedText>
//           </>
//         }
//         description={
//           <Description>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
//             dolore magna aliqua.
//             <br />
//             <br />
//             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//           </Description>
//         }
//         buttonRounded={false}
//         textOnLeft={false}
//         primaryButtonText="Latest Offers"
//         imageSrc={
//           "https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
//         }
//         imageCss={imageCss}
//         imageDecoratorBlob={true}
//         imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
//       />
      
//       <Footer />
//     </AnimationRevealPage>
//   );
// }
