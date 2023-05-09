import React from "react";
import {useNavigate} from 'react-router-dom';
import './styles.css'


const UpdateProfileBtn = () => {
    const navigate = useNavigate();

    const handleThreadClick = () => {
        navigate('/user/update-user-profile');
    };

    return (
        <>
            <div className="update-profile-btn">
                <span>You want to update profile.
                </span>
                <span className="click-here"
                    onClick={handleThreadClick}>Let's go now!</span>
            </div>
        </>
    );
}

export default UpdateProfileBtn;
