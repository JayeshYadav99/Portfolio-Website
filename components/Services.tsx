'use client'

import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from 'framer-motion'

const categories = ['All', 'MERN', 'GenAI', 'JavaScript']

const Projects = ({ data }: { data: any }) => {
  const { title, project_cards } = data
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = project_cards.filter((project: any) =>
    selectedCategory === 'All' ? true : project.category === selectedCategory
  )

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 opacity-50"></div>
      <div className="absolute inset-0 bg-[url('/img/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <StarryBackground />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2 
          className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <CategoryFilter 
          categories={categories} 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory} 
        />
        <AnimatePresence>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
            layout
          >
            {filteredProjects.map((project: any, index: number) => (
              <ProjectCard key={project.title} data={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

const StarryBackground = () => (
  <motion.div
    className="absolute inset-0"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2 }}
  >
    {[...Array(50)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute h-1 w-1 bg-white rounded-full"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [1, 0.5, 1],
        }}
        transition={{
          duration: Math.random() * 3 + 2,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
    ))}
  </motion.div>
)

const CategoryFilter = ({ categories, selectedCategory, setSelectedCategory }: any) => (
  <div className="flex flex-wrap justify-center gap-4 mb-8">
    {categories.map((category: string) => (
      <motion.button
        key={category}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          selectedCategory === category
            ? 'bg-blue-600 text-white'
            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
        }`}
        onClick={() => setSelectedCategory(category)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {category}
      </motion.button>
    ))}
  </div>
)

const ProjectCard = ({ data, index }: { data: any; index: number }) => {
  const { title, subtitle, technologies, description, projectLink, image, category } = data

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col rounded-lg overflow-hidden shadow-lg bg-gray-800 hover:shadow-2xl transition-all duration-300 border border-purple-500/30"
      whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)" }}
    >
      <div className="relative h-48 sm:h-64">
        {image && (
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 transform hover:scale-110 p-4"
          />
        )}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center px-4">{title}</h3>
        </div>
      </div>
      <div className="p-6 flex-grow bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="flex justify-between items-start mb-4">
          <p className="text-lg sm:text-xl text-gray-300">{subtitle}</p>
          <span className="px-2 py-1 bg-blue-600 rounded-full text-xs font-medium text-white">
            {category}
          </span>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.split(',').map((tech: string) => (
            <span key={tech} className="px-2 py-1 bg-gray-700 rounded-full text-xs font-medium text-gray-300">
              {tech.trim()}
            </span>
          ))}
        </div>
        <p className="text-sm text-gray-400 mt-4">
          {description}
        </p>
      </div>
      <div className="p-4 bg-gray-900">
        <Link href={projectLink}>
          <motion.button
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="/img/wired-lineal-134-target.gif"
              width="24"
              height="24"
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

export default Projects

