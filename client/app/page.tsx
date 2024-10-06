
import axios from 'axios';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { getPortfolio } from '@/lib/actions';

const getLandingPageData = async () => {
  try {
    const response = await getPortfolio();
console.log(response);
    const { story } = response;
console.log("story",JSON.stringify(story));
    return {
      name: story.name,
      Nav_Section: story.content.Nav_Section[0],
      Hero: story.content.Hero[0],
      Services: story.content.Services[0],
      Achievements: story.content.Achievements[0],
      Contact: story.content.Contact[0]
    };
  } catch (error) {
    console.error('Error fetching portfolio data:', error);
    return null;
  }
};

export default async function Home() {
  const portfolioData = await getLandingPageData();
  console.log("portfolio",JSON.stringify(portfolioData));
  if (!portfolioData) {
    return <div>Error loading page data. Please try again later.</div>;
  }

  return (
    <>
      <Navbar data={portfolioData.Nav_Section}  />
      <Hero data={portfolioData.Hero} name={portfolioData.name}/>
      <Services data={portfolioData.Services} />
      <Testimonials data={portfolioData.Achievements} />
      <section id="contact">
        <Contact data={portfolioData.Contact} />
      </section>
      <Footer />
    </>
  );
}