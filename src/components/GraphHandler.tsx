"use client";

import ForceDirectedGraph from "@/components/ForceDirectedGraph";
import useStore from "@/utils/store";
import { Fragment } from "react";
import { shortestPathDataExists } from "@/utils/helpers";

const GraphHandler = () => {
  const graphData = useStore((state) => state.graphData);
  const shortestPathData: ShortestPathType = useStore(
    (state) => state.shortestPathData
  );
  const adjacentGod = useStore((state) => state.adjacentGod);

  if (Object.keys(graphData)?.length === 0) return <Fragment />;

  return (
    <div className="flex min-[320px]:flex-wrap lg:flex-nowrap gap-4 p-4">
      <div
        className={`bg-white rounded-lg shadow-md h-full sm:w-full ${
          shortestPathDataExists(shortestPathData) && "lg:w-1/2"
        }`}
      >
        {adjacentGod?.name && !shortestPathDataExists(shortestPathData) && (
          <h1 className="text-red-500 text-center text-xl">
            No Path Found Between Above Gods
          </h1>
        )}
        <h1 className="px-4 py-2 bg-gray-800 text-white font-bold">
          Immediate Relations
        </h1>
        <ForceDirectedGraph data={graphData} />
      </div>
      <div className="bg-white rounded-lg overflow-hidden shadow-md h-full sm:w-full lg:w-1/2">
        {shortestPathDataExists(shortestPathData) && (
          <h1 className="px-4 py-2 bg-gray-800 text-white font-bold">
            Shortest Path
          </h1>
        )}
        {shortestPathDataExists(shortestPathData) && (
          <ForceDirectedGraph data={shortestPathData} />
        )}
      </div>
    </div>
  );
};

export default GraphHandler;
