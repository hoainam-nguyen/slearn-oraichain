import { useParams } from "react-router-dom";
import ImageScentext from "components/chatbot/ImageScentext";
import LanguageGPT from "components/chatbot/LanguageGPT";
import LanguageChat from "components/chatbot/LanguageChat";

export const Components = 
{
    image:
    {
        Scentext:
        {
            url:"#",
            Component:ImageScentext
        }
    },
    language:
    {
        LanguageGPT:{
            url:"#",
            Component:LanguageGPT
        },
        LanguageChat:
        {
            url:"#",
            Component:LanguageChat
        }
    }

}

export default ()=> {
    const {type, name} = useParams()
    const Component = Components[type][name].Component
    return <Component/>
}