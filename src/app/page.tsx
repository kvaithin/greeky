import SearchBar from "@/components/SearchBar";
import GodContainer from "@/components/GodContainer";
import Toast from "@/components/Toast";
import GraphHandler from "@/components/GraphHandler";
import SearchDropDown from "@/components/SearchDropdown";

export default function Home() {
  return (
    <main>
      <div className="mt-6 mx-auto px-4 max-w-lg flex gap-2">
        <SearchBar isMainNode={true} placeholder='Find Greek Gods...' />
        <SearchBar isShortestPathNode={true} placeholder='Shortest Path...' />
      </div>
      <div className='flex gap-40 justify-center mt-6'>
        <GodContainer isGod={true} />
        <GodContainer isAdjacentGod={true} />
      </div>
      <div className='flex justify-around flex-col items-center max-w-7xl mx-auto'>
        <SearchDropDown />
        <GraphHandler />
      </div>
      <Toast message={'test toast'} />
    </main>
  )
}
