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
      <div className='max-w-lg m-4'>
        <GodContainer />
        <GraphHandler />
      </div>
      <Toast message={'test toast'} />
    </main>
  )
}
