'use client'

import ForceDirectedGraph from "@/components/ForceDirectedGraph";
import useStore from "@/utils/store";
import {Fragment} from "react";

const GraphHandler = () => {
  const graphData = useStore((state) => state.graphData);
  const shortestPathData: ShortestPathType = useStore((state) => state.shortestPathData);
  const adjacentGod = useStore((state) => state.adjacentGod);

  if (Object.keys(graphData)?.length === 0) return <Fragment />

  const shortestPathDataExists =
    Object.keys(shortestPathData)?.length !== 0
      && shortestPathData?.nodes?.length !== 0
      && shortestPathData?.links?.length !== 0;

 return (
  <div className='flex flex-wrap'>
    <div>
      {
        adjacentGod?.name
        && !shortestPathDataExists
          && <h1 className='text-red-500 text-center text-xl'>No Path Found Between Above Gods</h1>}
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
