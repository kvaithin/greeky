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
      <div className="flex justify-center items-stretch">
        <div className="flex-grow">
          <CharacterCard isGod={true}/>
        </div>
        <div className="flex-grow">
          <CharacterCard isGod={false}/>
        </div>
      </div>
      <div className='flex justify-around flex-col items-center max-w-7xl mx-auto'>
        <SearchDropDown />
        <GraphHandler />
      </div>
      <Toast message={'test toast'} />
    </main>
  )
}
