import React from "react";
import tw, {styled} from "twin.macro";

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
    return (
        <FormContainer>
            <Form>
                <FormGroup>
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" name="title" type="text"/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="category">Category</Label>
                    <Select id="category" name="category">
                        {
                        options.map((option) => (
                            <option key={
                                    option.value
                                }
                                value={
                                    option.value
                            }>
                                {
                                option.label
                            } </option>
                        ))
                    } </Select>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="content">Content</Label>
                    <TextArea id="content" name="content" rows="6"/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="image">Upload image</Label>
                    <FileInput id="image" name="image"/>
                </FormGroup>
                <SubmitButton type="submit">Submit</SubmitButton>
            </Form>
        </FormContainer>
    );
};

export default FormComponent;
