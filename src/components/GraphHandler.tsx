'use client'

import ForceDirectedGraph from "@/components/ForceDirectedGraph";
import useStore from "@/utils/store";
import {Fragment} from "react";

const GraphHandler = () => {
 const graphData = useStore((state) => state.graphData);

 if (Object.keys(graphData)?.length === 0) return <Fragment />

 return (
  <div>
   <ForceDirectedGraph data={graphData} />
  </div>
 );
};

export default GraphHandler;
