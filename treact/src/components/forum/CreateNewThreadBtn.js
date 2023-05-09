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
            <div className="create-thread-btn"
                onClick={handleThreadClick}>
                <span>Haven't found a way to solve the problem?
                </span>
                <span className="click-here">Create a new thread now!</span>
            </div>
        </>
    );
}

export default CreateNewThreadBtn;
