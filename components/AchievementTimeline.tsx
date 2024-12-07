'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface Achievement {
  name: string
  comment: string
  picture: {
    filename: string
  }
  _id: {
    $oid: string
  }
}

interface AchievementTimelineProps {
  achievements: Achievement[]
}

const AchievementTimeline: React.FC<AchievementTimelineProps> = ({ achievements }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 opacity-50"></div>
      <div className="absolute inset-0 bg-[url('/img/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2 
          className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Achievement Journey
        </motion.h2>
        <div className="relative">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
            <button
              onClick={() => handleScroll('left')}
              className="bg-gray-800 p-2 rounded-full text-white hover:bg-gray-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
            <button
              onClick={() => handleScroll('right')}
              className="bg-gray-800 p-2 rounded-full text-white hover:bg-gray-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide space-x-8 pb-8"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {achievements.map((achievement, index) => (
              <AchievementCard 
                key={achievement._id.$oid} 
                achievement={achievement} 
                index={index}
                isHovered={hoveredIndex === index}
                setHovered={() => setHoveredIndex(index)}
                setUnhovered={() => setHoveredIndex(null)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const AchievementCard: React.FC<{ 
  achievement: Achievement; 
  index: number;
  isHovered: boolean;
  setHovered: () => void;
  setUnhovered: () => void;
}> = ({ achievement, index, isHovered, setHovered, setUnhovered }) => {
  return (
    <motion.div 
      className="flex-shrink-0 w-80 scroll-snap-align-start"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={setHovered}
      onMouseLeave={setUnhovered}
    >
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-purple-500/30 h-full flex flex-col">
        <h3 className="text-xl font-semibold text-blue-400 mb-2">{achievement.name}</h3>
        <div className="relative h-48 rounded-lg overflow-hidden mb-4 flex-grow">
          <Image
            src={achievement.picture.filename}
            alt={achievement.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 transform hover:scale-110"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="text-gray-300 text-sm">{achievement.comment}</p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default AchievementTimeline

