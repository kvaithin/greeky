'use client'

import ForceDirectedGraph from "@/components/ForceDirectedGraph";

const GraphHandler = () => {
 const data = {
  nodes: [
   { id: 'Zeus' },
   { id: 'Themis' },
   { id: 'Mnemosyne' },
   { id: 'Eurynome' },
   { id: 'Metis' },
   { id: 'Maia' },
   { id: 'Leto' },
  ],
  links: [
   { source: 'Zeus', target: 'Themis', value: 'PROCREATED_WITH' },
   { source: 'Zeus', target: 'Mnemosyne', value: 2 },
   { source: 'Zeus', target: 'Eurynome', value: 3 },
   { source: 'Zeus', target: 'Metis', value: 4 },
   { source: 'Zeus', target: 'Maia', value: 5 },
   { source: 'Zeus', target: 'Leto', value: 6 },
  ],
 };

 return (
  <div>
   <ForceDirectedGraph data={data} />
  </div>
 );
};

export default GraphHandler;
