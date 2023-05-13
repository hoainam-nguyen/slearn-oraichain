import { useParams } from "react-router-dom";
import ImageScentext from "components/chatbot/ImageScentext";
import Slearn from "components/chatbot/LanguageGPT";
import LanguageChat from "components/chatbot/LanguageChat";

export const Components = 
{
    Scentext:
        {
            url:"#",
            Component:ImageScentext
        },
    slearn:{
            url:"#",
            Component:Slearn
        },
    LanguageChat:
        {
            url:"#",
            Component:LanguageChat
        }

}

export default ()=> {
    const { type } = useParams()

    // const Component = Components[type].Component
    // console.log(Component)
    return <Slearn type={type}/>
}