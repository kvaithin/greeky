'use client'
import ForceDirectedGraph from "@/components/ForceDirectedGraph";

const Hero = async () => {

  const getGreekData = async (limit: Number = 100) => {
    try {
      const response = await fetch(`/api/greek?limit=${limit}`);
      const data = await response.json();
      const nodes = data.map(({ name }) => ({ id: name }));
      return { nodes, links: [] };
    } catch (error) {
      console.error(error);
    }
  };

  const data = await getGreekData();
  console.log(data)

 return (
   <div className='absolute flex mx-auto p-4 left-0 right-0 w-1/12'>
    <ForceDirectedGraph data={data} />
  </div>
 );
};

export default Hero;
