import Link from "next/link";

const Services = ({ data }) => {

 const{title,service_cards}=data;


    
    return (
      <section className="pb-32 pt-24">
        <h2 className="text-4xl font-bold text-center mb-20">{title}</h2>
        <div className="py-4 px-4 mx-auto max-w-screen-xl">
          <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0 place-items-center items-stretch">
            {service_cards.map((s) => (
              <ServiceCard data={s} key={s.title} />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  
  const ServiceCard = ({ data }) => {
    const { title, subtitle, FrameWork, description,ProjectLink } = data;

    return (
      <>
        <div className="flex flex-col p-6 lg:mx-1 sm:mx-auto max-w-lg text-center rounded-lg border shadow border-gray-600 xl:p-8 text-white bg-neutral-800 mx-auto">
          <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
          <p className="font-light text-xl text-gray-400">{subtitle}</p>
          <p className="text-xl mt-4">{description}</p>
          <div className="flex justify-center my-8">
            <span className="mr-2 ">Technologies: {FrameWork}</span>
         
          </div>
          <div className="flex justify-center ">
          <Link  href={ProjectLink} className=" w-36 text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
<svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
</svg>
View Demo
</Link>
</div>
        </div>
      </>
    );
  };