import { useParams } from "react-router-dom";
import ImageScentext from "components/chatbot/ImageScentext";
import LanguageGPT from "components/chatbot/LanguageGPT";

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
        }
    }

}

export default ()=> {
    const {type, name} = useParams()
    const Component = Components[type][name].Component
    console.log(type, name)
    return <Component/>
}