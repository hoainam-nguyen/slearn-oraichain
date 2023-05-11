import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import CreateChatbot from "components/createchatbot/CreateChatbot.js";
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";


export default() => {
    return (
        <AnimationRevealPage>
            <Header/>
                <CreateChatbot></CreateChatbot>
                <Footer/>
            </AnimationRevealPage>
    )
}
