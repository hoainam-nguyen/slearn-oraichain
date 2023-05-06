import React, { useState } from "react";
import tw, {styled} from "twin.macro";

import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormContainer = styled.div `
  ${
    tw `flex flex-col items-center justify-center h-full`
}
`;

const Form = styled.form `
  ${
    tw `w-full max-w-lg bg-white rounded-lg shadow-md p-8`
}
`;

const FormGroup = tw.div `mb-4`;

const Label = tw.label `block text-gray-700 font-bold mb-2`;

const Input = tw.input `
  w-full
  py-2
  px-3
  border
  border-gray-300
  rounded-md
  focus:outline-none
  focus:border-blue-500
`;

const Select = tw.select `
  w-full
  py-2
  px-3
  border
  border-gray-300
  rounded-md
  focus:outline-none
  focus:border-blue-500
`;

const TextArea = tw.textarea `
  w-full
  py-2
  px-3
  border
  border-gray-300
  rounded-md
  focus:outline-none
  focus:border-blue-500
`;

const FileInput = styled.input.attrs({type: "file"})`
  ${
    tw `w-full`
}
`;

const SubmitButton = tw.button `
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
        label: "Math"
    }, {
        value: "literature",
        label: "literature"
    }, {
        value: "music",
        label: "Music"
    },
];


const FormComponent = () => {
    const [output, setOutput] = useState('');
    const output_fake = "In addition to basic features such as a discussion forum and interactive chatbot, we offer many useful advanced features for the learning process. Notably, we have developed two fully functional features: Summarize and Explain, which help to summarize complex issues into main ideas and explain them in an easy-to-understand manner through artificial intelligence. Simply provide the system with a text passage or an image of text from a book, PDF, or scanned document, and it will automatically read and perform the task excellently as you requested. With these features, we hope to help save study time and enable you to excel in your work.";

    const handleOnClick = (event) => {
        event.preventDefault();
        // Tạo đoạn text output ở đây
        const outputText = output_fake;

        // Cập nhật state để hiển thị đoạn text output
        setOutput(outputText);
        toast('Successful!', {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    }

    return (
        <FormContainer>
            <Form>
                <FormGroup>
                    <Label htmlFor="content">Content</Label>
                    <TextArea id="content" name="content" rows="6"/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="image">Upload image</Label>
                    <FileInput id="image" name="image"/>
                </FormGroup>
                
                <SubmitButton type="submit" onClick={handleOnClick}>Submit</SubmitButton>
            </Form>
            {output && 
            <div>
                <br></br>
                <div className="output-title">Output:</div>
                <div className="output-respone">{output}</div>
            </div>
            }
            <br></br>
            <br></br>
            <br></br>
            <ToastContainer/>
        </FormContainer>
    );
};


export default FormComponent;
