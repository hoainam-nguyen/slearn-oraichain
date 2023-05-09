import React, {useState} from 'react';
import tw from 'twin.macro';
import './styles.css';


const Input = tw.input `border-2 border-gray-300 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500`;

const Button = tw.button `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-blue-500`;


const SearchForm = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Search term: ${searchTerm}`);
    };


    return (
        <div className="SearchBar">
            <form onSubmit={handleSubmit}>
                <Input type="text" placeholder="Search"
                    value={searchTerm}
                    onChange={handleInputChange}/>
                <Button type="submit">Search</Button>
            </form>
        </div>
    );
};

export default SearchForm;
