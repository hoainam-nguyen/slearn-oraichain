
import React from "react";
import tw from "twin.macro";

import "./styles.css"
// import { AppContext } from "../../store";

import { ReactComponent as EyeSolid } from "images/eye-solid.svg";


const HeartIcon = tw(EyeSolid)`top-0 left-0  w-5 fill-current text-red-500`;

// const InteractButton = tw.button`
//   bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-blue-500`;



const ViewFeatures = ({view_num}) => {
    // const data = useContext(AppContext)
    // const [likenumber, setLikenumber ] = React.useState(0)
    // const temp = data.like.status
    // temp[id] = { value: likenumber, set: setLikenumber}
    // data.like.set(temp)
    // const [view, setView] = React.useState(0)
    return (
      <div>
        <div>
          <span style={{display:"flex"}}>
            <span style={{display:"flex"}}>
              <HeartIcon />
                <span style={{margin:"0 5px"}}> {view_num} </span>
            </span>
  
            <div>
              {view_num <= 1 ? (
                <span>View</span>
              ) : (
                <span>Views</span>
              )}
            </div>

          </span> 
        </div>
      </div>
    )
  }
  

export default ViewFeatures;