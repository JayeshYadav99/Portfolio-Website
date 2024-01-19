


import Hero from "./_components/Hero";
import Contact from "./_components/Contact";
import Services from "./_components/Services";
import Testimonial from "./_components/Testimonials";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";

const getLandingPageData=async()=>{
    
  const url=`https://api.storyblok.com/v2/cdn/stories/landing-page?version=${process.env.SB_DATA_VERSION}&token=${process.env.SB_TOKEN}&cv=1705653886`

const req=await fetch(url,{cache:"no-store"})
  const storydata=await req.json()
  const{Nav_Section,Hero,Services,Achievements,Contact}=storydata.story.content;
  return{
    Nav_Section:Nav_Section[0],
    Hero:Hero[0],
    Services:Services[0],
    Achievements:Achievements[0],
    Contact:Contact[0]

  }
}

export default async function Home() {
  const storyData=await getLandingPageData();

 

  return (
    <>
     <Navbar data={storyData.Nav_Section} />
 <Hero data={storyData.Hero} />
 <  Services data={storyData.Services} />
 <Testimonial data={storyData.Achievements} />
 <Contact data={storyData.Contact} />
 <Footer />

    </>


  
  );
}
