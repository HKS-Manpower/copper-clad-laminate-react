import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react';

const SearchBar = ({ suggestions }) => {
    const [query, setQuery] = useState('');
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const handleChange = (error) => {
        const userInput = error.target.value;
        setQuery(userInput);

        const filtered = suggestions.filter(
            (suggestion) =>
                suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );
        setFilteredSuggestions(filtered);
        setShowSuggestions(true);
    };

    const handleClick = (error) => {
        setQuery(error.target.innerText);
        setFilteredSuggestions([]);
        setShowSuggestions(false);
    };

    const handleClear = () => {
        setQuery('');
        setFilteredSuggestions([]);
        setShowSuggestions(false);
    };

    const SuggestionsListComponent = () => {
        return filteredSuggestions.length ? (
            <ul className="absolute mt-1 max-h-60 w-full overflow-auto rounded-lg border border-[#EAECEE] bg-white">
                {filteredSuggestions.map((suggestion, index) => {
                    return (
                        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                        <li
                            key={index}
                            className="cursor-pointer p-2 hover:bg-gray-200"
                            onClick={handleClick}
                        >
                            {suggestion}
                        </li>
                    );
                })}
            </ul>
        ) : (
            <div className="absolute mt-1 w-full rounded border border-[#EAECEE] bg-white p-2">
                <em>No suggestions, {`you're `}on your own!</em>
            </div>
        );
    };

    return (
        <div className="relative w-[400px]">
            <div className="relative flex items-center">
                <SearchIcon className="absolute left-3 text-24 text-[#E51E25]" />
                <input
                    type="text"
                    className="w-full rounded-lg border border-[#EAECEE] p-2 pl-16  focus-visible:outline-none"
                    onChange={handleChange}
                    value={query}
                    placeholder="Search"
                />
                {query && (
                    <CloseOutlinedIcon
                        className="absolute right-3 cursor-pointer text-gray-400"
                        onClick={handleClear}
                    />
                )}
            </div>
            {showSuggestions && query && <SuggestionsListComponent />}
        </div>
    );
};

export default SearchBar;
