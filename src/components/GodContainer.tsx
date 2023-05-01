'use client';
import useStore from "@/utils/store";

const GodContainer = () => {
 const god = useStore((state) => state.god);
 return (
  <div>
   <p>{god.name}</p>
   <p>{god.alias}</p>
   <p>{god.gender}</p>
  </div>
 );
};

export default GodContainer;
