'use client';
import useStore from "@/utils/store";
import ForceDirectedGraph from "@/components/ForceDirectedGraph";

const GodContainer = () => {
 const god = useStore((state) => state.god);
 const { name, alias, gender } = god || {};
  const data = {
    nodes: [
      { id: 'A' },
      { id: 'B' },
      { id: 'C' },
      { id: 'D' },
      { id: 'E' },
    ],
    links: [
      { source: 'A', target: 'B', value: 1 },
      { source: 'A', target: 'C', value: 2 },
      { source: 'B', target: 'C', value: 3 },
      { source: 'B', target: 'D', value: 4 },
      { source: 'C', target: 'D', value: 5 },
      { source: 'D', target: 'E', value: 6 },
    ],
  };
  return (
  <div>
    <p>{name}</p>
    <p>{alias}</p>
    <p>{gender}</p>
    <ForceDirectedGraph data={data} />
  </div>
 );
};

export default GodContainer;
