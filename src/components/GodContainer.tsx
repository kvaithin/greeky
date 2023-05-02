'use client';
import useStore from "@/utils/store";
import GForce from "@/components/GForce";

const GodContainer = () => {
 const god = useStore((state) => state.god);
 const { name, alias, gender } = god || {};
  return (
  <div>
    <p>{name}</p>
    <p>{alias}</p>
    <p>{gender}</p>
    <GForce />
  </div>
 );
};

export default GodContainer;
