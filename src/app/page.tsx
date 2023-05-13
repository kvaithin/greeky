import SearchBar from "@/components/SearchBar";
import Toast from "@/components/Toast";
import GraphHandler from "@/components/GraphHandler";
import SearchDropDown from "@/components/SearchDropdown";
import CharacterCard from "@/components/CharacterCard";

export default function Home() {
  return (
    <main>
      <div className="mt-6 mx-auto px-4 max-w-lg flex gap-2">
        <SearchBar isMainNode={true} placeholder='Find Greek Gods...' />
        <SearchBar isShortestPathNode={true} placeholder='Shortest Path...' />
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2">
        <CharacterCard isGod={true} />
        <CharacterCard isAdjacentGod={true} />
      </div>

      <div className='flex justify-around flex-col items-center max-w-7xl mx-auto'>
        <SearchDropDown />
        <GraphHandler />
      </div>
      <Toast message={'test toast'} />
    </main>
  )
}
