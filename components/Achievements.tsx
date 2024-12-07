import VerticalTimeline from './VerticalTimeline';
import HackathonCounter from './HackathonCounter';
const timelineEvents = [
  {
    date: "April 2023",
    title: "ChatHacks",

    logo: "https://a.storyblok.com/f/271727/338x374/f49ae252c8/laughhub.PNG",
    position: "1st Place",
    description: "Secured 1st place, showcasing effective teamwork and problem-solving abilities using ALAN AI to elevate our project.",
    isLatest: true,
    downloadLink: "#"
  },
  {
    date: "Jun 2023",
    title: "Hack Your Portfolio",
    logo: "https://a.storyblok.com/f/271727/352x390/f7d810cb83/portfoliohub.PNG",
    position: "Best Domain Name from Domain.com",
    description: "Developed a dynamic portfolio website using modern React technologies and advanced web development practices.",
  },
  
  
  {
    date: "Feb 2024",
    title: "HackthisFall",

    logo: "/img/Vonage.jpg",
    position: "Best Use of Vonage APIs",
    description: "Awarded for best project utilizing Vonage Video API to enable live translated captions during video calls.",
  },
  {
    date: "April 2024",
    title: "Code Unnati Innovation Marathon 2.0",
    logo: "/img/SamvaadSynctdemo.png",
    position: "Top 25 Finalist",
    description: "Presented Project SaamvaadSync, enhancing our presentation skills and ability to communicate complex technical ideas.",
  },
  {
    date: "Sept 2024",
    title: "Hack The Mountains",
    logo: "/img/HackTheMountain.png",
    position: "Best Use of Lemme Build",
    description: "Built Cyber Saarthi, an AI-powered platform to help scam victims report incidents and generate reports for authorities ",
  },
  {
    date: "Nov 2024",
    title: "HackthisFall -Virtual Edition",
    logo: "/img/HTFV.png",
    position: "Best Use of Auth0",
    description: "Nutrilyz – a personalized food scanner app designed to help individuals with chronic conditions or dietary restrictions make safe and informed food choices",
  },
  {
    date: "Dec 2024",
    title: "Hack The Frost",
    logo: "/img/HF.png",
    position: "Best Sustainability Award",
    description: "Introducing AidConnect – an AI-powered disaster response platform thatCollects and analyzes real-time data ,Visualizes critical information to prioritize victims, Streamlines aid delivery",
  },
];
const hackathonLogos = [
  "/img/mlh.png",
  "/img/htf.png",
  "/img/code.jpeg",
  "/img/frost.png",
  "/img/htm.jpeg",
];
export default function Home() {
  const totalHackathonsWon = timelineEvents.length;
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 p-4 ">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white text-center">Achievements</h1>
     
      <HackathonCounter count={totalHackathonsWon} logos={hackathonLogos} />
      <div className=" mx-auto rounded-lg  shadow-lg p-6 sm:p-8">
        <VerticalTimeline events={timelineEvents} />
      </div>
    </main>
  );
}

