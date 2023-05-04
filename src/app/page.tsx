import SearchBar from "@/components/SearchBar";
import GodContainer from "@/components/GodContainer";
import Toast from "@/components/Toast";
import GraphHandler from "@/components/GraphHandler";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto px-4 mt-4 max-w-lg">
        <SearchBar />
      </div>
      <div className='flex justify-around flex-col mt-10 p-4 items-center max-w-7xl mx-auto'>
        <GodContainer />
        <GraphHandler />
      </div>
      <Toast message={'test toast'} />
    </main>
  )
}
