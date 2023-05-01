'use client'
import {MagnifyingGlassIcon} from "@heroicons/react/20/solid";
import React, { useEffect, useState } from "react";
import useStore from "@/utils/store";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const addGod = useStore((state) => state.addGod);

  useEffect(() => {
    if (inputValue.length > 0) {
      fetch(`/api/greek/search?s=${inputValue}`)
        .then(response => response.json())
        .then(data => showSuggestion(data));
    } else {
      setSuggestions([]);
    }
  }, [inputValue]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      getGodDetails();
    }
  };

  const getGodDetails = () => {
    fetch(`/api/greek?name=${inputValue}`)
      .then(response => response.json())
      .then(data => addGod(data[0]));
  };

  const showSuggestion = (data: any) => {
    const d = data?.length == 1 && data?.[0]?.toLowerCase();
    const shouldSuggest = !(d === inputValue?.toLowerCase());
    if (shouldSuggest) setSuggestions(data);
    else setSuggestions([]);
  };

  return (
    <div>
      <div className="flex items-center rounded-lg border-2 border-gray-300 p-2">
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
        <input
          className="border-none focus:outline-none w-full text-gray-700 mx-2"
          type="text"
          placeholder="Find Greek Gods..."
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
      </div>
      <ul className='mt-2 z-10 absolute'>
        {suggestions?.map(suggestion => (
          <li key={suggestion} className='cursor-pointer text-gray-700'>
            <div onClick={() => {
              setInputValue(suggestion)
            }}>
              {suggestion}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;