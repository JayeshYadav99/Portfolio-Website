
import Link from "next/link"
const Navbar = ({data}) => {
    const{title,cta_button_text}=data;

  return (
    <div className="w-full">
           <div className="mx-96">
  <div div class="  relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
  <div className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
    <div className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30" style={{clipPath: 'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)'}} />
  </div>
  <div className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
    <div className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30" style={{clipPath: 'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)'}} />
  </div>
  {/* <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
    <p className="text-sm leading-6 text-gray-900">
      <strong className="font-semibold">Always  Feel free</strong><svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true"><circle cx={1} cy={1} r={1} />vai</svg>available for Projects and Work
    </p>
    <a href="#" className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">Register now <span aria-hidden="true">→</span></a>
  </div> */}
  <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
    <p class="text-sm leading-6 text-gray-900 mr-4">
      <strong class="font-semibold"> Feel free to Connect/ping me For  </strong>
      {/* <svg viewBox="0 0 2 2" class="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true"><circle cx="1" cy="1" r="1" /></svg> */}
        <strong  className="font-bold underline decoration-red-500">
        Projects  , Hackathons </strong>      and  <strong className="font-bold underline decoration-red-500">    Work </strong>   
    </p>
    <a href="#contact" class="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">Contact Now <span aria-hidden="true">&rarr;</span></a>
  </div>
  </div>
  <div className="flex flex-1 justify-end">
    <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
      <span className="sr-only">Dismiss</span>
      <svg className="h-5 w-5 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
      </svg>
    </button>
  </div>
</div>
    <nav className="container  relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
      <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
        
        <Link href="/" className="flex items-center mx-32">
          <span className="flex p-2 items-center space-x-2 text-2xl font-medium text-gray-100">
            {/* <span className="font-bold">{title}</span> */}
          </span>
        </Link>
      
      </div>

      
    </nav>
  </div>
  )
}

export default Navbar