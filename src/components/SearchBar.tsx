'use client'
import {MagnifyingGlassIcon} from "@heroicons/react/20/solid";
import React, { useEffect, useState } from "react";
import useStore from "@/utils/store";
import {upperFirst} from "@/utils/helpers";

const SearchBar = ({ isMainNode, isShortestPathNode, placeholder }: SearchType) => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [hideSuggestion, setHideSuggestion] = useState(false);
  const god = useStore((state) => state.god);
  const adjacentGod = useStore((state) => state.adjacentGod);
  const addGod = useStore((state) => state.addGod);
  const relation = useStore((state) => state.relation);
  const addAdjacentGod = useStore((state) => state.addAdjacentGod);
  const addGraphData = useStore((state) => state.addGraphData);
  const addShortestPathData = useStore((state) => state.addShortestPathData);

  useEffect(() => {
    if (inputValue.length > 0) {
      (async () => {
        const response = await fetch(`/api/greek/search?s=${inputValue}`);
        const data = await response.json();
        await showSuggestion(data);
      })();
    } else {
      setSuggestions([]);
    }
  }, [inputValue]);

  const handleKeyDown = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      // await Promise.all([getGodDetails(), addGraphDetails()]);
      isMainNode && await getGodDetails();
      isMainNode && await addGraphDetails();
      isShortestPathNode && await getAdjacentGodDetails();
      isShortestPathNode && await addShortestPathDetails(upperFirst(god?.name), upperFirst(inputValue));
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

  const getAdjacentGodDetails = async () => {
    try {
      const response = await fetch(`/api/greek?name=${upperFirst(inputValue)}`);
      const data = await response.json();
      addAdjacentGod(data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const addGraphDetails = async () => {
    try {
      const response = await fetch(`/api/greek/verbose_relation?name=${upperFirst(inputValue)}`);
      const data = await response.json();
      addGraphData(data);
      await addShortestPathDetails(upperFirst(inputValue), upperFirst(adjacentGod?.name));
    } catch (error) {
      console.error(error);
    }
  };

  const addShortestPathDetails = async (name1: string, name2: string) => {
    try {
      const response = await fetch(`/api/greek/verbose_shortest_path?name1=${name1}&name2=${name2}&relations=${relation}`);
      const data = await response.json();
      addShortestPathData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const showSuggestion = async (data: any) => {
    const d = data?.length == 1 && data?.[0]?.toLowerCase();
    const shouldSuggest = !(d === inputValue?.toLowerCase());
    if (shouldSuggest && !hideSuggestion) setSuggestions(data);
    else {
      // await Promise.all([getGodDetails(), addGraphDetails()]);
      isMainNode && await getGodDetails();
      isMainNode && await addGraphDetails();
      isShortestPathNode && await getAdjacentGodDetails();
      isShortestPathNode && await addShortestPathDetails(upperFirst(god?.name), upperFirst(inputValue));
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
          placeholder={placeholder}
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
      </div>
      <ul className='mt-2 z-50 absolute'>
        {suggestions?.map((suggestion, index) => (
          <li key={suggestion}
              className={`ml-2 cursor-pointer text-gray-700 hover:bg-amber-200 p-1 pl-2 pr-2 ${index % 2 === 0 ? 'bg-gray-50': 'bg-indigo-50'}`}
          >
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
