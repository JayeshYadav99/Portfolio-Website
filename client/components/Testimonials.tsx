import Image from "next/image";

const Testimonials = ({ data }:any) => {
  const { title, Achievement_cards } = data;

  return (
    <section className="px-6 sm:px-12 lg:px-24 bg-zinc-950 pt-24 pb-32">
      <h2 className="text-4xl font-bold text-center text-white mb-20">{title}</h2>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-2">
        {Achievement_cards.map((t:any) => (
          <TestimonialCard data={t} key={t.Name} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

const TestimonialCard = ({ data }:any) => {
  const { picture, Name, comment } = data;
  return (
    <div className="lg:col-span-2 xl:col-auto">
      <div className="flex flex-col justify-between w-full h-full p-6 rounded-2xl shadow-lg bg-neutral-800">
        <p className="text-lg leading-normal text-gray-300 mb-4">{comment}</p>
        <Avatar image={picture.filename} name={Name} />
      </div>
    </div>
  );
};

const Avatar = ({ image, name }:any) => {
  return (
    <div className="flex items-center mt-4 space-x-4">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-12 h-12 border-2 border-gray-300">
        <Image src={image} width="100" height="100" alt="Avatar" className="object-cover w-full h-full" />
      </div>
      <div>
        <div className="text-lg font-semibold text-white">{name}</div>
      </div>
    </div>
  );
};
