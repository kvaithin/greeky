'use client'

import ForceDirectedGraph from "@/components/ForceDirectedGraph";
import useStore from "@/utils/store";
import {Fragment} from "react";

const GraphHandler = () => {
  const graphData = useStore((state) => state.graphData);
  const shortestPathData = useStore((state) => state.shortestPathData);

  if (Object.keys(graphData)?.length === 0) return <Fragment />
  const shortestPathDataExists = Object.keys(shortestPathData)?.length !== 0;

 return (
  <div className='flex flex-wrap'>
    <div>
      <h1 className='text-center text-xl'>Immediate Relations</h1>
      <ForceDirectedGraph data={graphData} />
    </div>
    <div>
      {shortestPathDataExists && <h1 className='text-center text-xl'>Shortest Path</h1>}
      {shortestPathDataExists && <ForceDirectedGraph data={shortestPathData} />}
    </div>
  </div>
 );
};

export default GraphHandler;
