'use client'

import { useState, useEffect } from 'react'
import Link from "next/link"
import { motion, useAnimation } from 'framer-motion'
import { Code, Server, Database, Cloud, Terminal, Cpu } from 'lucide-react'

const CoolBanner = ({ data }: { data: any }) => {
  const { title, cta_button_text } = data
  const [isHovered, setIsHovered] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      background: isHovered
        ? [
            'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)',
            'linear-gradient(90deg, #ec4899, #3b82f6, #8b5cf6)',
            'linear-gradient(90deg, #8b5cf6, #ec4899, #3b82f6)',
          ]
        : 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)',
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: 'reverse',
      },
    })
  }, [isHovered, controls])

  const bannerItems = [
    { text: 'Projects', icon: Code },
    { text: 'Hackathons', icon: Terminal },
    { text: 'Work', icon: Cpu },
  ]

  return (
    <motion.div
      className="relative w-full overflow-hidden"
      animate={controls}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-30"
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          repeat: Infinity,
          repeatType: 'mirror',
          duration: 15,
          ease: 'linear',
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-20" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between py-4 space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <motion.span
              className="text-2xl font-bold text-white"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {title}
            </motion.span>
            <div className="hidden sm:flex space-x-2">
              {bannerItems.map((item, index) => (
                <BannerItem key={item.text} text={item.text} icon={item.icon} index={index} />
              ))}
            </div>
          </div>
          <Link href="#contact" passHref>
            <motion.button
              className="px-6 py-2 bg-white text-purple-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cta_button_text} <span aria-hidden="true">→</span>
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

const BannerItem = ({ text, icon: Icon, index }: { text: string; icon: any; index: number }) => (
  <motion.div
    className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm font-medium text-white flex items-center space-x-2"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
  >
    <Icon size={16} />
    <span>{text}</span>
  </motion.div>
)

export default CoolBanner