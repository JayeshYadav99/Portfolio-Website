


import  Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import data from '../public/data.json';

const getLandingPageData=async()=>{
    
//   const url=`https://api.storyblok.com/v2/cdn/stories/landing-page?version=${process.env.SB_DATA_VERSION}&token=${process.env.SB_TOKEN}&cv=1705653886`

// // const req=await fetch("/data.json",{cache:"no-store"})
// //   const storydata=await req.json()
  const{Nav_Section,Hero,Services,Achievements,Contact}=data.story.content;


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
 <Testimonials data={storyData.Achievements} />
 <section id="contact">
 <Contact data={storyData.Contact} />
 </section>

 <Footer />

    </>


  
  );
}
