import React, {useState} from 'react';
import tw from 'twin.macro';

// Styles
const DropdownWrapper = tw.div `relative inline-block text-left`;
const DropdownButton = tw.button `
  bg-white
  text-gray-700
  font-semibold
  py-2 px-4
  border border-gray-300
  rounded
  shadow
  focus:outline-none
  focus:ring-2
  focus:ring-blue-500
  focus:border-blue-500
`;
const DropdownList = tw.ul `
  absolute left-0 w-48
  bg-white
  text-gray-700
  font-semibold
  border border-gray-300
  shadow
  rounded
  z-10
`;
const DropdownListItem = tw.li `py-1 px-4 cursor-pointer hover:bg-blue-500 hover:text-white`;

const Dropdown = ({options}) => {
    const [selected, setSelected] = useState(options[0]);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleSelect = (isChoice) => {
        setSelected(isChoice);
        setDropdownOpen(false);
    };

    return (
        <DropdownWrapper>
            <DropdownButton onClick={toggleDropdown}>
                {selected} </DropdownButton>
            {
            dropdownOpen && (
                <DropdownList> {
                    options.map((option) => (
                        <DropdownListItem key={option}
                            onClick={
                                () => handleSelect(option)
                        }>
                            {option} </DropdownListItem>
                    ))
                } </DropdownList>
            )
        } </DropdownWrapper>
    );
};

export default Dropdown;
