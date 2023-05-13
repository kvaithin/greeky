'use client'
import useStore from "@/utils/store";
import {Fragment} from "react";
import {familyMapping} from "@/utils/constants";

const CharacterCard = ({ isGod, isAdjacentGod }: GodContainerType) => {
  const god = useStore((state) => state.god);
  const adjacentGod = useStore((state) => state.adjacentGod);

  if (isGod && Object.keys(god).length === 0) return <Fragment />;
  if (isAdjacentGod && Object.keys(adjacentGod).length === 0) return <Fragment />;

  const character = isGod ? god : adjacentGod;

  const hasFamily = Object.keys(character).some(key => key.startsWith('is'));

  return (
    <div className="p-4 -z-50">
      <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
        <div className="px-4 py-2 bg-gray-800 text-white font-bold">{character.name}</div>
        <div className="px-4 py-2">
          <p className="text-gray-700 font-bold">Alias:</p>
          <p className="text-gray-700">{character.alias}</p>
        </div>
        <div className="px-4 py-2">
          <p className="text-gray-700 font-bold">Gender:</p>
          <p className="text-gray-700">{character.gender}</p>
        </div>
        {
          hasFamily && <div className="px-4 py-2">
            <p className="text-gray-700 font-bold">Family:</p>
            {Object.keys(character).map((key) => {
              if (key.startsWith("is") && character[key]) {
                const family = familyMapping[key];
                return <p key={key} className="text-gray-700">{family}</p>;
              }
            })}
          </div>
        }
      </div>
    </div>
  );
};

export default CharacterCard;
