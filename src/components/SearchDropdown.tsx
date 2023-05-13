"use client";

import { ChangeEvent, useEffect, useState } from "react";
import useStore from "@/utils/store";
import { upperFirst } from "@/utils/helpers";

const SearchDropDown = () => {
  const allRelations = "All Relations";
  const [relationNames, setRelationNames] = useState([allRelations]);
  const god = useStore((state) => state.god);
  const adjacentGod = useStore((state) => state.adjacentGod);
  const addRelation = useStore((state) => state.addRelation);
  const addShortestPathData = useStore((state) => state.addShortestPathData);
  const relation = useStore((state) => state.relation);

  const onChange = async (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const rel = value?.toLowerCase();
    addRelation(rel);
    await addShortestPathDetails(rel);
  };

  const addShortestPathDetails = async (rel: string | undefined) => {
    try {
      const response = await fetch(
        `/api/greek/verbose_shortest_path?name1=${god.name}&name2=${adjacentGod.name}&relations=${rel}`
      );
      const data = await response.json();
      addShortestPathData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!relation) addRelation(allRelations);
    const fetchRelationNames = async () => {
      try {
        const response = await fetch("/api/greek/all_relations");
        const data = await response.json();
        setRelationNames([...relationNames, ...data]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRelationNames();
  }, []);

  return (
    <div className="max-w-lg flex p-4 justify-center">
      <select
        id="relations"
        className="flex place-items-center p-2 border border-gray-300 text-gray-900 text-sm rounded-lg"
        onChange={onChange}
      >
        <option value="" selected>
          {upperFirst(relation.replace("_", " "))}
        </option>
        {relationNames.map((name: string) => {
          return (
            <option key={name} value={name}>
              {upperFirst(name.replace("_", " "))}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SearchDropDown;
