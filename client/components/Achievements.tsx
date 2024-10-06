'use client'

import { useState } from 'react'
import Image from "next/image"
import { motion } from 'framer-motion'

const Achievements = ({ data }: any) => {
  const { title, Achievement_cards } = data

  return (
    <section className="px-6 sm:px-12 lg:px-24 bg-gradient-to-b from-zinc-950 to-zinc-900 pt-24 pb-32 overflow-hidden">
      <motion.h2 
        className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-2">
        {Achievement_cards.map((t: any, index: number) => (
          <AchievementCard data={t} key={t.name} index={index} />
        ))}
      </div>
    </section>
  )
}

const AchievementCard = ({ data, index }: any) => {
  const { picture, name, comment } = data
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div 
      className="lg:col-span-2 xl:col-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div 
        className="flex flex-col justify-between w-full h-full p-8 rounded-2xl shadow-lg bg-gradient-to-br from-neutral-800 to-neutral-900 border border-purple-500/20 transform transition-all duration-300"
        whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)" }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <p className="text-lg leading-relaxed text-gray-300 mb-6">{comment}</p>
        <Avatar image={picture.filename} name={name} isHovered={isHovered} />
      </motion.div>
    </motion.div>
  )
}

const Avatar = ({ image, name, isHovered }: any) => {
  return (
    <motion.div 
      className="flex items-center mt-4 space-x-4"
      animate={{ x: isHovered ? 10 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex-shrink-0 overflow-hidden rounded-full w-16 h-16 border-2 border-purple-500 shadow-lg shadow-purple-500/50">
        <Image src={image} width="100" height="100" alt={`Avatar of ${name}`} className="object-cover w-full h-full" />
      </div>
      <div>
        <motion.div 
          className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        >
          {name}
        </motion.div>
        <div className="text-sm text-gray-400">Hackathon Winner</div>
      </div>
    </motion.div>
  )
}

export default Achievements