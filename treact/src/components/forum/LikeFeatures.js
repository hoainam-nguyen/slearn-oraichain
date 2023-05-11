import React from "react";
import tw from "twin.macro";
import "./styles.css"
import {ReactComponent as HeartSolid} from "images/heart-solid.svg";


const HeartIcon = tw(HeartSolid)`top-0 left-0  w-5 fill-current text-red-500`;
const InteractButton = tw.button `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-blue-500`;


const LikeFeatures = ({likes}) => {
    const [likenumber, setLikenumber] = React.useState(likes)

    const onClickLike = (e) => {
        e.preventDefault()
        setLikenumber((Number(likenumber) + Number(1)).toString())
    }

    return (
        <div>
            <div>
                <span style={{display: "flex"}}>
                    <span style={{display: "flex"}}>
                        <HeartIcon/>
                        <span style={{margin: "0 5px"}}>
                            {likenumber} 
                        </span>
                    </span>

                    <div> 
                        {likenumber <= 1 ? (<span>Like</span>) : (<span>Likes</span>)} 
                    </div>
                </span>
            </div>
            <div className="like-button">
                <InteractButton onClick={onClickLike}>Like</InteractButton>
            </div>
        </div>
    )
}


export default LikeFeatures;
