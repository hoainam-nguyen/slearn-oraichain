import React from "react";


const createNewThreadBtn = () => {
  const handleThreadClick = () => {
      window.location.href = `forum/crete-new-thread`
    };
  
    return (
      <>
        <div className="create-thread-btn" onClick={handleThreadClick}>
        <span>Haven't found a way to solve the problem? Create a now!</span>
        </div>
      </>
    );
}

export default createNewThreadBtn;