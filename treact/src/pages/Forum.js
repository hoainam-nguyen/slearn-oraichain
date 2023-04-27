import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Forum from "components/forum/forum";
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";


export default ()=> {
    return  (<AnimationRevealPage>
        <Header/>
        <Forum></Forum>
        <Footer/>
    </AnimationRevealPage> )
}