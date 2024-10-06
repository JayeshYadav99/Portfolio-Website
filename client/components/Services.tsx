'use client'

import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { motion } from 'framer-motion'

const Services = ({ data }: any) => {
  const { title, service_cards } = data

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900"></div>
      <div className="absolute inset-0 bg-[url('/img/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            <div className="h-full w-full bg-white rounded-full animate-ping"></div>
          </div>
        ))}
      </motion.div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2 
          className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {service_cards.map((s: any, index: number) => (
            <ServiceCard key={s.title} data={s} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

const ServiceCard = ({ data, index }: any) => {
  const { title, subtitle, framework, description, projectLink, image } = data
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="flex flex-col rounded-lg overflow-hidden shadow-lg bg-gray-800 hover:shadow-2xl transition-all duration-300 border border-purple-500/30"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-64">
        {image && (
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 transform hover:scale-110"
          />
        )}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-3xl font-bold text-white text-center px-4">{title}</h3>
        </div>
      </div>
      <div className="p-6 sm:p-8 flex-grow bg-gradient-to-br from-gray-800 to-gray-900">
        <p className="text-xl text-gray-300 mb-4">{subtitle}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {framework.split(',').map((tech: string) => (
            <span key={tech} className="px-3 py-1 bg-blue-600 rounded-full text-sm font-medium">
              {tech.trim()}
            </span>
          ))}
        </div>
        <motion.p 
          className="text-gray-400"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          {description}
        </motion.p>
      </div>
      <div className="p-6 sm:p-8 bg-gray-900">
        <Link href={projectLink}>
          <motion.button
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-full flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="/img/wired-lineal-134-target.gif"
              width="30"
              height="30"
              className="mr-2"
              alt="Demo"
            />
            View Demo
          </motion.button>
        </Link>
      </div>
    </motion.div>
  )
}

export default Services