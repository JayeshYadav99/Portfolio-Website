import Link from "next/link";
import Image from "next/image";  
const Services = ({ data }:any) => {

 const{title,service_cards}=data;


    
    return (
      <section className="pb-32 pt-24">
        <h2 className="text-4xl font-bold text-center mb-20">{title}</h2>
        <div className="py-4 px-4 mx-auto max-w-screen-xl">
          <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0 place-items-center items-stretch">
            {service_cards.map((s:any) => (
              <ServiceCard data={s} key={s.title} />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;



  const ServiceCard = ({ data }: any) => {
    const { title, subtitle, FrameWork, description, ProjectLink, image } = data;
  
    return (
      <div className="flex flex-col p-6 lg:mx-1 sm:mx-auto max-w-lg text-center rounded-lg border shadow border-gray-600 xl:p-8 text-white bg-neutral-800 mx-auto">
        <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover rounded-t-lg mb-4"
          />
        )}
       
        <p className="font-light text-xl text-gray-400">{subtitle}</p>
        {/* <p className="text-xl mt-4">{description}</p> */}
        <div className="flex justify-center my-8">
          <span className="mr-2 px-2 py-1 bg-gray-700 rounded-full text-sm font-medium text-white">
            Technologies: {FrameWork}
          </span>
        </div>
        <div className="flex justify-center">
          <Link
            href={ProjectLink}
            className="w-36 text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
          >
            <img
              src="/img/wired-lineal-134-target.gif"
              width="30"
              height="30"
              className="object-cover rounded-full mr-2 lg:inline"
              alt="Demo"
            />
            Demo
          </Link>
        </div>
      </div>
    );
  };
  
 ;
  