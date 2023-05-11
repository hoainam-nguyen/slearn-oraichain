import tw, { styled } from 'twin.macro';

import "./styles.css"


const SubmitButton = styled.button`
  ${tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
`;

// Component ButtonSubmitForm sử dụng SubmitButton
const ButtonSubmitForm = ({ onClick }) => {
  return (
    <SubmitButton className="submit-btn" onClick={onClick}>
      Create
    </SubmitButton>
  );
};

export default ButtonSubmitForm;
