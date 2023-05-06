import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import SummaryFeatures from "components/advance/SummaryFeatures.js";
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";


export default ()=> {
    return  (<AnimationRevealPage>
        <Header/>
        <SummaryFeatures/>
        <Footer/>
    </AnimationRevealPage> )
}