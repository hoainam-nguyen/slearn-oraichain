import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Thread from "components/threadforum/threadDetails.js";
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";


export default ()=> {
    return  (<AnimationRevealPage>
        <Header/>
        <Thread></Thread>
        <Footer/>
    </AnimationRevealPage> )
}