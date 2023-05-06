import React, {useContext} from "react";
import tw from "twin.macro";

import "./styles.css"
import {AppContext} from "../../store";

import {ReactComponent as DownvoteSolid} from "images/chevron-down-solid.svg";


const DownvoteIcon = tw(DownvoteSolid)`top-0 left-0  w-5 fill-current text-red-500`;

const InteractButton = tw.button `
  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-blue-500`;


const DownvoteFeatures = ({id}) => {
    const data = useContext(AppContext)
    const [downvotenumber, setDownvotenumber] = React.useState(0)
    const temp = data.downvote.status
    temp[id] = {
        value: downvotenumber,
        set: setDownvotenumber
    }
    data.downvote.set(temp)
    const onClickDownvote = (e) => {
        e.preventDefault()
        data.downvote.status[id].set(data.downvote.status[id].value + 1)
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
                        <DownvoteIcon/>
                        <span style={
                            {margin: "0 5px"}
                        }>
                            {
                            data.downvote.status[id].value
                        } </span>
                    </span>

                    <div> {
                        data.downvote.status[id].value <= 1 ? (
                            <span>Downvote</span>
                        ) : (
                            <span>Downvotes</span>
                        )
                    } </div>
                </span>
            </div>
            <div className="up-down-button">
                <InteractButton onClick={onClickDownvote}>Downvote
                </InteractButton>
            </div>
        </div>

    )
}


export default DownvoteFeatures;
