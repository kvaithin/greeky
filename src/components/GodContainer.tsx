'use client';
import useStore from "@/utils/store";

const GodContainer = () => {
 const god = useStore((state) => state.god);
 const {
   name,
   alias,
   gender,
   is_the_gorgons,
   is_titan,
   is_cyclops,
   is_hundred_handers,
   is_sisters_of_fate,
   is_harpy_sisters,
   is_the_old_women,
   is_nereid,
   is_okenid,
   is_pleiad,
   is_anemoi,
   is_muse,
   is_the_charities,
   is_the_seasons,
   is_the_pains,
 } = god || {};
  return (
  <div>
    <p>{name && `Name: ${name}`}</p>
    <p>{alias && `Alias: ${alias}`}</p>
    <p>{gender && `Gender: ${gender}`}</p>
    <p>{is_the_gorgons && `Family: The Gorgons`}</p>
    <p>{is_titan && `Family: The Titans`}</p>
    <p>{is_cyclops && `Family: The Cyclops`}</p>
    <p>{is_hundred_handers && `Family: The 100 Handers`}</p>
    <p>{is_sisters_of_fate && `Family: The Sisters of Fate`}</p>
    <p>{is_harpy_sisters && `Family: The Harpy Sisters`}</p>
    <p>{is_the_old_women && `Family: The Old Women`}</p>
    <p>{is_nereid && `Family: The Nereids`}</p>
    <p>{is_okenid && `Family: The Okenid`}</p>
    <p>{is_pleiad && `Family: The Pleiad`}</p>
    <p>{is_anemoi && `Family: The Anemoi`}</p>
    <p>{is_muse && `Family: The Muse`}</p>
    <p>{is_the_charities && `Family: The Charities`}</p>
    <p>{is_the_seasons && `Family: The Season`}</p>
    <p>{is_the_pains && `Family: The Pains`}</p>
  </div>
 );
};

export default GodContainer;
