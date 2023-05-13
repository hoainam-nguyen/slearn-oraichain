import React, {useContext} from "react";
import tw from "twin.macro";

import "./styles.css"
import {AppContext} from "../../store";

import {ReactComponent as HeartSolid} from "images/heart-solid.svg";


const HeartIcon = tw(HeartSolid)`top-0 left-0  w-5 fill-current text-red-500`;

const InteractButton = tw.button `
  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-blue-500`;


const LikeFeatures = ({id}) => {
    const data = useContext(AppContext)
    const [likenumber, setLikenumber] = React.useState(0)
    const temp = data.like.status
    temp[id] = {
        value: likenumber,
        set: setLikenumber
    }
    data.like.set(temp)
    const onClickLike = (e) => {
        e.preventDefault()
        data.like.status[id].set(data.like.status[id].value + 1)
    }
    return (
        <div>
            <div>
                <span style={
                    {display: "flex"}
                }>
                    <span style={
                        {display: "flex"}
                    }>
                        <HeartIcon/>
                        <span style={
                            {margin: "0 5px"}
                        }>
                            {
                            data.like.status[id].value
                        } </span>
                    </span>

                    <div> {
                        data.like.status[id].value <= 1 ? (
                            <span>Like</span>
                        ) : (
                            <span>Likes</span>
                        )
                    } </div>
                </span>
            </div>
            <div className="like-button">
                <InteractButton onClick={onClickLike}>Like
                </InteractButton>
            </div>
        </div>

    )
}


export default LikeFeatures;
