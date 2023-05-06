import React from "react";  
import './styles.css'


const createNewThreadBtn = () => {
  const handleThreadClick = () => {
      window.location.href = `forum/crete-new-thread`
    };
  
    return (
      <>
        <div className="create-thread-btn" onClick={handleThreadClick}>
        <span>Haven't found a way to solve the problem? </span>
        <span className="click-here">Create a new thread now!</span>
        </div>
      </>
    );
}

export default createNewThreadBtn;