import React, {useContext} from "react";
import tw from "twin.macro";

import "./styles.css"
import {AppContext} from "../../store";

import {ReactComponent as DownvoteSolid} from "images/chevron-down-solid.svg";


const DownvoteIcon = tw(DownvoteSolid)`top-0 left-0  w-5 fill-current text-red-500`;

const InteractButton = tw.button `
  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-blue-500`;


const DownvoteFeatures = ({downvotes}) => {
    // const data = useContext(AppContext)
    // const [downvotenumber, setDownvotenumber] = React.useState(0)
    // const temp = data.downvote.status
    // temp[id] = {
    //     value: downvotenumber,
    //     set: setDownvotenumber
    // }
    // data.downvote.set(temp)
    // const onClickDownvote = (e) => {
    //     e.preventDefault()
    //     data.downvote.status[id].set(data.downvote.status[id].value + 1)
    // }

    const [downvotenumber, setdownvotenumber] = React.useState(downvotes)

    const onClickdownvote = (e) => {
        e.preventDefault()
        setdownvotenumber((Number(downvotenumber) + 1).toString())
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
                            downvotenumber
                        } </span>
                    </span>

                    <div> {
                        downvotenumber <= 1 ? (
                            <span>Downvote</span>
                        ) : (
                            <span>Downvotes</span>
                        )
                    } </div>
                </span>
            </div>
            <div className="up-down-button">
                <InteractButton onClick={onClickdownvote}>Downvote
                </InteractButton>
            </div>
        </div>

    )
}


export default DownvoteFeatures;
