import React from "react";

import ThreadSummary from "./threadSumary";
import SearchBar from "./SearchBar";
import CreateNewThreadBtn from "./createNewThreadBtn";

import "./styles.css"




const Forum = () => {

  return (
      <>
        <div className="header-forum">
          <br></br>
          <br></br>
          <SearchBar />
          <br></br>
          
       
          <CreateNewThreadBtn />
          <br></br>
          <br></br>
          

        </div>

        <div className="Latest-threads">
          Latest threads
        </div>

        <div className="list-thread">
          <ThreadSummary 
            id="1"
            title="Fix bug for React code" 
            topic="React"
            content="I have a problem with my code..." 
            author="Davis" 
            datePost="1/1/2023" 
            replies="4" 
            views="100" 
          />
          <ThreadSummary 
            id="2"
            title="Fix bug for React code" 
            topic="React"
            content="I have a problem with my code..." 
            author="Davis" 
            datePost="1/1/2023" 
            replies="4" 
            views="100" 
          />    
        </div>
        
      </>
  );
};

export default Forum;