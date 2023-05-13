import SearchBar from "@/components/SearchBar";
import Toast from "@/components/Toast";
import GraphHandler from "@/components/GraphHandler";
import SearchDropDown from "@/components/SearchDropdown";
import CharacterCard from "@/components/CharacterCard";

export default function Home() {
  return (
    <main>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 p-6">
        <SearchBar isMainNode={true} placeholder='Find Greek Gods...' />
        <SearchBar isShortestPathNode={true} placeholder='Shortest Path...' />
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
