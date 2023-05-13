import React, {useContext} from "react";
import tw from "twin.macro";

import "./styles.css"
import {AppContext} from "../../store";

import {ReactComponent as UpvoteSolid} from "images/chevron-up-solid.svg";


const UpvoteIcon = tw(UpvoteSolid)`top-0 left-0  w-5 fill-current text-green-500`;

const InteractButton = tw.button `
  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-blue-500`;


const UpvoteFeatures = ({upvotes}) => {
    // const data = useContext(AppContext)
    // const [upvotenumber, setUpvotenumber] = React.useState(0)
    // const temp = data.upvote.status
    // temp[id] = {
    //     value: upvotenumber,
    //     set: setUpvotenumber
    // }
    // data.upvote.set(temp)
    // const onClickUpvote = (e) => {
    //     e.preventDefault()
    //     data.upvote.status[id].set(data.upvote.status[id].value + 1)
    // }

    const [upvotenumber, setUpvoteNumber] = React.useState(upvotes)

    const onClickUpvote = (e) => {
        e.preventDefault()
        setUpvoteNumber((Number(upvotenumber) + Number(1)).toString())
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
                        <UpvoteIcon/>
                        <span style={
                            {margin: "0 5px"}
                        }>
                            {
                            upvotenumber
                        } </span>
                    </span>

                    <div> {
                        upvotenumber <= 1 ? (
                            <span>Upvote</span>
                        ) : (
                            <span>Upvotes</span>
                        )
                    } </div>
                </span>
            </div>
            <div className="up-down-button">
                <InteractButton onClick={onClickUpvote}>Upvote
                </InteractButton>
            </div>
        </div>

    )
}


export default UpvoteFeatures;
