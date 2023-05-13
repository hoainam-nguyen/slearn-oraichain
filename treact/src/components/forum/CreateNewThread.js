import React, { useState } from "react";
import tw, { styled } from "twin.macro";
import "./styles.css";
import { SigningCosmosClient } from "@cosmjs/launchpad";
import axios from "axios";
import { useNavigate   } from 'react-router-dom';

const FormContainer = styled.div`
    ${tw`flex flex-col items-center justify-center h-full`}
`;

const Form = styled.form`
    ${tw`w-full max-w-lg bg-white rounded-lg shadow-md p-8`}
`;

const FormGroup = tw.div`mb-4`;

const Label = tw.label`block text-gray-700 font-bold mb-2`;

const Input = tw.input`
  w-full
  py-2
  px-3
  border
  border-gray-300
  rounded-md
  focus:outline-none
  focus:border-blue-500
`;

const Select = tw.select`
  w-full
  py-2
  px-3
  border
  border-gray-300
  rounded-md
  focus:outline-none
  focus:border-blue-500
`;

const TextArea = tw.textarea`
  w-full
  py-2
  px-3
  border
  border-gray-300
  rounded-md
  focus:outline-none
  focus:border-blue-500
`;

const FileInput = styled.input.attrs({ type: "file" })`
    ${tw`w-full`}
`;

const SubmitButton = tw.button`
  bg-blue-500
  hover:bg-blue-700
  text-white
  font-bold
  py-2
  px-4
  rounded-md
  focus:outline-none
`;

const options = [
    {
        value: "math",
        label: "Math",
    },
    {
        value: "literature",
        label: "literature",
    },
    {
        value: "music",
        label: "Music",
    },
    {
        value: "blockchain",
        label: "Blockchain",
    }
];

const CreateNewThread = () => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);
    const history = useNavigate()

    const handleSubmitBtn = async (event) => {
        event.preventDefault();
        if (!window.keplr) {
            alert("Please install keplr extension");
        }
        else {
            const chainId = "cosmoshub-4";

            // Enabling before using the Keplr is recommended.
            // This method will ask the user whether to allow access if they haven't visited this website.
            // Also, it will request that the user unlock the wallet if the wallet is locked.
            await window.keplr.enable(chainId);

            const offlineSigner = window.keplr.getOfflineSigner(chainId);

            // You can get the address/public keys by `getAccounts` method.
            // It can return the array of address/public key.
            // But, currently, Keplr extension manages only one address/public key pair.
            // XXX: This line is needed to set the sender address for SigningCosmosClient.
            const accounts = await offlineSigner.getAccounts();

            // Initialize the gaia api with the offline signer that is injected by Keplr extension.
            const _ = new SigningCosmosClient(
                "https://lcd-cosmoshub.keplr.app",
                accounts[0].address,
                offlineSigner,
            );
            const name = await window.keplr.getKey(chainId)

            // console.log(name);
            try {
                const id_current = await axios.get("http://localhost:8010/forum/getid")
                // console.log(id_current);
                const newThread = {
                    id: id_current.data + 1,
                    owner: name.bech32Address,
                    metadata: {
                        title: { title },
                        content: { content },
                        images: [{ image }],
                        topic: {category},
                        likes: "0",
                        views: "0",
                        post_at: "1/1/2023",
                        name_onwer: name.name,
                    },
                    comments: [],
                    config: {},
                };
                // console.log(newThread)
    
                axios.post("http://localhost:8010/forum/create", newThread)
                    .then((response) => {
                        // console.log(response)
                        history('/forum')

                    }).catch((err) => {
                        console.log("ERROR",err)
                    })
            }
            catch(err) {
                console.log("ERROR",err)
            }

        }
    };

    return (
        <>
            <div className="create-new-thread">Crate New Thread</div>

            <FormContainer>
                <Form>
                    <FormGroup>
                        <Label htmlFor="title">Title</Label>
                        <Input
                            id="title"
                            name="title"
                            type="text"
                            onChange={(event) => setTitle(event.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="category">Category</Label>
                        <Select
                            id="category"
                            name="category"
                            onChange={(event) =>
                                setCategory(event.target.value)
                            }
                        >
                            {options.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}{" "}
                                </option>
                            ))}{" "}
                        </Select>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="content">Content</Label>
                        <TextArea
                            id="content"
                            name="content"
                            rows="6"
                            onChange={(event) => setContent(event.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="image">Upload image</Label>
                        <FileInput
                            id="image"
                            name="image"
                            onChange={(event) => setImage(event.target.value)}
                        />
                    </FormGroup>
                    <SubmitButton type="submit" onClick={handleSubmitBtn}>
                        Submit
                    </SubmitButton>
                </Form>
            </FormContainer>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </>
    );
};

export default CreateNewThread;
