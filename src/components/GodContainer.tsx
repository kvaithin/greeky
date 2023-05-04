'use client';
import useStore from "@/utils/store";

const GodContainer = ({ isGod, isAdjacentGod }: GodContainerType) => {
 const god = useStore((state) => state.god);
 const adjacentGod = useStore((state) => state.adjacentGod);
  return (
  <div>
    {
      isGod && god && (
        <div>
          <p>{god.name && `Name: ${god.name}`}</p>
          <p>{god.alias && `Alias: ${god.alias}`}</p>
          <p>{god.gender && `Gender: ${god.gender}`}</p>
          <p>{god.is_the_gorgons && `Family: The Gorgons`}</p>
          <p>{god.is_titan && `Family: The Titans`}</p>
          <p>{god.is_cyclops && `Family: The Cyclops`}</p>
          <p>{god.is_hundred_handers && `Family: The 100 Handers`}</p>
          <p>{god.is_sisters_of_fate && `Family: The Sisters of Fate`}</p>
          <p>{god.is_harpy_sisters && `Family: The Harpy Sisters`}</p>
          <p>{god.is_the_old_women && `Family: The Old Women`}</p>
          <p>{god.is_nereid && `Family: The Nereids`}</p>
          <p>{god.is_okenid && `Family: The Okenid`}</p>
          <p>{god.is_pleiad && `Family: The Pleiad`}</p>
          <p>{god.is_anemoi && `Family: The Anemoi`}</p>
          <p>{god.is_muse && `Family: The Muse`}</p>
          <p>{god.is_the_charities && `Family: The Charities`}</p>
          <p>{god.is_the_seasons && `Family: The Season`}</p>
          <p>{god.is_the_pains && `Family: The Pains`}</p>
        </div>
      )
    }
    {
      isAdjacentGod && adjacentGod && (
        <div>
          <p>{adjacentGod.name && `Name: ${adjacentGod.name}`}</p>
          <p>{adjacentGod.alias && `Alias: ${adjacentGod.alias}`}</p>
          <p>{adjacentGod.gender && `Gender: ${adjacentGod.gender}`}</p>
          <p>{adjacentGod.is_the_gorgons && `Family: The Gorgons`}</p>
          <p>{adjacentGod.is_titan && `Family: The Titans`}</p>
          <p>{adjacentGod.is_cyclops && `Family: The Cyclops`}</p>
          <p>{adjacentGod.is_hundred_handers && `Family: The 100 Handers`}</p>
          <p>{adjacentGod.is_sisters_of_fate && `Family: The Sisters of Fate`}</p>
          <p>{adjacentGod.is_harpy_sisters && `Family: The Harpy Sisters`}</p>
          <p>{adjacentGod.is_the_old_women && `Family: The Old Women`}</p>
          <p>{adjacentGod.is_nereid && `Family: The Nereids`}</p>
          <p>{adjacentGod.is_okenid && `Family: The Okenid`}</p>
          <p>{adjacentGod.is_pleiad && `Family: The Pleiad`}</p>
          <p>{adjacentGod.is_anemoi && `Family: The Anemoi`}</p>
          <p>{adjacentGod.is_muse && `Family: The Muse`}</p>
          <p>{adjacentGod.is_the_charities && `Family: The Charities`}</p>
          <p>{adjacentGod.is_the_seasons && `Family: The Season`}</p>
          <p>{adjacentGod.is_the_pains && `Family: The Pains`}</p>
        </div>
      )
    }
  </div>
 );
};

export default GodContainer;
