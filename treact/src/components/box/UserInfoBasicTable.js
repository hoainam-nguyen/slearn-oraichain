import React from "react";
import tw from "twin.macro";

const Container = tw.div `container mx-auto px-4 py-8`;
const Title = tw.h1 `text-2xl font-bold mb-4`;
const InfoGrid = tw.div `grid grid-cols-2 gap-4`;
const InfoLabel = tw.span `font-bold`;
const InfoValue = tw.span ``;

const UserInfo = ({
    name,
    age,
    phone,
    email,
    nickname,
    bio,
    address
}) => {
    return (
        <Container>
            <Title>User Info</Title>
            <InfoGrid>
                <div>
                    <InfoLabel>Name:</InfoLabel>
                    <span> </span>
                    <InfoValue>{name}</InfoValue>
                </div>
                <div>
                    <InfoLabel>Age:</InfoLabel>
                    <span> </span>
                    <InfoValue>{age}</InfoValue>
                </div>
                <div>
                    <InfoLabel>Phone:</InfoLabel>
                    <span> </span>
                    <InfoValue>{phone}</InfoValue>
                </div>
                <div>
                    <InfoLabel>Email:</InfoLabel>
                    <span> </span>
                    <InfoValue>{email}</InfoValue>
                </div>
                <div>
                    <InfoLabel>Nickname:</InfoLabel>
                    <span> </span>
                    <InfoValue>{nickname}</InfoValue>
                </div>
                <div>
                    <InfoLabel>Bio:</InfoLabel>
                    <span> </span>
                    <InfoValue>{bio}</InfoValue>
                </div>
                <div>
                    <InfoLabel>Address:</InfoLabel>
                    <span> </span>
                    <InfoValue>{address}</InfoValue>
                </div>
            </InfoGrid>
        </Container>
    );
};

export default UserInfo;
