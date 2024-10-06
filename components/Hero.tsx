'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { Code, Server, Database, Cloud, Terminal, Cpu } from 'lucide-react'

const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
)

const Hero = ({ data,name,currentStatus }: { data: any,name:string ,currentStatus:string}) => {
  console.log("Name",name)
  const { title, description, cta_button_text, picture, cta_button_link } = data
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: { repeat: Infinity, duration: 2 }
    })
  }, [controls])

  return (
    <section className="relative  bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden ">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwMDAwMjAiPjwvcmVjdD4KPHBhdGggZD0iTTAgNUw1IDBaTTYgNEw0IDZaTS0xIDFMMSAtMVoiIHN0cm9rZT0iIzAwMDAwMDQwIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] opacity-20"></div>

      <Container className="flex flex-wrap items-center py-16 md:py-24 lg:py-32 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 lg:pr-12"
        >
         <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
  {title}
</h1>

<div className="max-h-60 overflow-y-auto pr-4 mb-8">
  <p className="text-lg md:text-xl leading-relaxed text-gray-300">
    {description}
  </p>
</div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={cta_button_link}
              className="inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:from-cyan-600 hover:to-blue-600"
            >
              {cta_button_text}
            </Link>
          </motion.div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2  lg:mt-0"
        >
          <ProfileWithTooltip picture={picture} controls={controls} name={name} currentStatus={currentStatus} />
        </motion.div>
      </Container>

      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            repeatType: 'loop',
            delay: Math.random() * 2,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </section>
  )
}

const ProfileWithTooltip = ({ picture, controls ,name,currentStatus}: { picture: any, controls: any,name:string,currentStatus:string }) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false)

  const technologies = [
    { name: 'Frontend', icon: Code, color: 'text-cyan-400' },
    { name: 'Backend', icon: Server, color: 'text-purple-400' },
    { name: 'Database', icon: Database, color: 'text-green-400' },
    { name: 'Cloud', icon: Cloud, color: 'text-blue-400' },
    { name: 'DevOps', icon: Terminal, color: 'text-red-400' },
    { name: 'AI/ML', icon: Cpu, color: 'text-yellow-400' },
  ]

  return (
    <div className="relative">
      <motion.div
        className="relative w-64 h-64 md:w-80 md:h-80 mx-auto"
        whileHover={{ scale: 1.05 }}
        onHoverStart={() => setTooltipVisible(true)}
        onHoverEnd={() => setTooltipVisible(false)}
      >
        <motion.div
          animate={controls}
          className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-20 blur-2xl"
        ></motion.div>
        <Image
          src={picture.filename}
          layout="fill"
          className="rounded-full object-cover shadow-2xl relative z-10 p-4"
          alt="Profile Picture"
          loading="eager"
        />
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 opacity-0"
          whileHover={{ opacity: 0.3 }}
          transition={{ duration: 0.3 }}
        />
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            className={`absolute ${getPositionClass(index, technologies.length)} z-30`}
            whileHover={{ scale: 0.6, boxShadow: "0 0 15px rgba(255, 255, 255, 0.5)" }}
          >
            <div className="bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-full shadow-lg p-2">
              <tech.icon className={`w-6 h-6 ${tech.color}`} />
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isTooltipVisible ? 1 : 0, y: isTooltipVisible ? 0 : 10 }}
        transition={{ duration: 0.3 }}
        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-gray-800 bg-opacity-90 backdrop-blur-sm text-white p-4 rounded-lg shadow-xl z-10"
      >
        <p className="mb-2 text-lg">
          Name: <strong>{name}</strong>
        </p>
        <p className="text-md">
          Currently: <span className="font-semibold">{currentStatus}</span>
        </p>
      </motion.div>
    </div>
  )
}

function getPositionClass(index: number, total: number): string {
  const positions = [
    'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4',
    'top-1/2 right-0 translate-x-1/2 -translate-y-1/2',
    'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2',
    'top-1/2 left-0 -translate-x-1/2 -translate-y-1/2',
  ]
  return positions[index % positions.length];
}

export default Hero