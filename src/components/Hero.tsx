'use client'
import HeroChart from "@/components/HeroChart";

const Hero = async () => {

  const getGreekData = async (limit: Number = 60) => {
    try {
      const response = await fetch(`/api/greek?limit=${limit}`);
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  };

  const names = await getGreekData();

 return (
   <div className='absolute left-1/2 transform -translate-x-1/2 mt-24 -z-50'>
    <HeroChart names={names} />
  </div>
 );
};

export default Hero;
