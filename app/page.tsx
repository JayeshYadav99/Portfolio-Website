


import PortfolioContent from '../components/PortfolioContent'
import {intialData} from "@/lib/data"


export default async function Home() {


 const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
        const response = await fetch(`${apiUrl}/api/getPortfolio`,{
          cache :"force-cache"
        });
        const {story} = await response.json();

      
   



 



  return (
    <>
     {story && <PortfolioContent portfolioData={story.content} />}
    </>
  )
}