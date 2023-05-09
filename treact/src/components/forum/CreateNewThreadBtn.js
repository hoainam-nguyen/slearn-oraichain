import React from "react";
import {useNavigate} from 'react-router-dom';
import './styles.css'


const CreateNewThreadBtn = () => {
    const navigate = useNavigate();

    const handleThreadClick = () => {
        navigate('/forum/create-new-thread');
    };

    return (
        <>
            <div className="create-thread-btn">
                <span>Haven't found a way to solve the problem?
                </span>
                <span className="click-here"
                    onClick={handleThreadClick}>Create a new thread now!</span>
            </div>
        </>
    );
}

export default CreateNewThreadBtn;
