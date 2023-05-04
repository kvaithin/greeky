import SearchBar from "@/components/SearchBar";
import GodContainer from "@/components/GodContainer";
import Toast from "@/components/Toast";
import GraphHandler from "@/components/GraphHandler";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto px-4 mt-6 max-w-lg flex gap-2">
        <SearchBar isMainNode={true} placeholder='Find Greek Gods...' />
        <SearchBar isShortestPathNode={true} placeholder='Shortest Path...' />
      </div>
      <div className='flex gap-40 justify-center mt-6'>
        <GodContainer isGod={true} />
        <GodContainer isAdjacentGod={true} />
      </div>
      <div className='flex justify-around flex-col mt-10 p-4 items-center max-w-7xl mx-auto'>
        <GraphHandler />
      </div>
      <Toast message={'test toast'} />
    </main>
  )
}
