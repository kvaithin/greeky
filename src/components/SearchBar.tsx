'use client'
import {MagnifyingGlassIcon} from "@heroicons/react/20/solid";
import React, { useEffect, useState } from "react";
import useStore from "@/utils/store";
import {upperFirst} from "@/utils/helpers";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [hideSuggestion, setHideSuggestion] = useState(false);
  const addGod = useStore((state) => state.addGod);
  const addGraphData = useStore((state) => state.addGraphData);

  useEffect(() => {
    if (inputValue.length > 0) {
      fetch(`/api/greek/search?s=${inputValue}`)
        .then(response => response.json())
        .then(data => showSuggestion(data));
    } else {
      setSuggestions([]);
    }
  }, [inputValue]);

  const handleKeyDown = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      await Promise.all([getGodDetails(), addGraphDetails()]);
      setSuggestions([])
    }
  };

  const getGodDetails = async () => {
    try {
      const response = await fetch(`/api/greek?name=${upperFirst(inputValue)}`);
      const data = await response.json();
      addGod(data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const addGraphDetails = async () => {
    try {
      const response = await fetch(`/api/greek/verbose_relation?name=${upperFirst(inputValue)}`);
      const data = await response.json();
      addGraphData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const showSuggestion = async (data: any) => {
    const d = data?.length == 1 && data?.[0]?.toLowerCase();
    const shouldSuggest = !(d === inputValue?.toLowerCase());
    if (shouldSuggest && !hideSuggestion) setSuggestions(data);
    else {
      await Promise.all([getGodDetails(), addGraphDetails()]);
      setSuggestions([]);
      setHideSuggestion(false);
    }
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
          <li key={suggestion} className='ml-2 cursor-pointer text-gray-700 hover:bg-amber-200'>
            <div onClick={() => {
              setHideSuggestion(true);
              setInputValue(suggestion);
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
