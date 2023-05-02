import React from "react";

// import ThreadSummary from "./threadSumary";
// import SearchBar from "./SearchBar";
// import CreateNewThreadBtn from "./createNewThreadBtn";

import "./styles.css"
import FormComponent from "./InputTitle";




const createNewThread = () => {

  return (
      <>
        <div className="create-new-thread">
          Crate New Thread
        </div>

        <FormComponent />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
      </>
  );
};

export default createNewThread;