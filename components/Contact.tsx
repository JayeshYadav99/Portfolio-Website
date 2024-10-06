"use client"

import { useState, useEffect } from 'react'
import Image from "next/image"
import Link from "next/link"
import { motion, useAnimation } from 'framer-motion'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
)

const ContactSection = ({ data }: any) => {
  const { title, email, linkedinProfile, githubProfile } = data

  return (
    <div className="relative overflow-hidden">
      <ParticleBackground />
      <Container className="flex w-full flex-col my-16 items-center justify-center text-center relative z-10">
        <motion.div 
          className="w-full max-w-3xl p-8 rounded-2xl bg-gradient-to-br from-purple-900/80 to-indigo-900/80 shadow-2xl backdrop-blur-sm"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {title}
          </motion.h2>
          <div className="space-y-6">
            <ContactItem icon={<EmailIcon />} text={email} />
            <ContactItem 
              icon={<FaLinkedin className="w-6 h-6" />}
              text={linkedinProfile}
              href={`https://www.linkedin.com/in/${linkedinProfile}/`}
            />
            <ContactItem 
              icon={<FaGithub className="w-6 h-6" />}
              text={githubProfile}
              href={`https://github.com/${githubProfile}`}
            />
          </div>
        </motion.div>
      </Container>
    </div>
  )
}

const ContactItem = ({ icon, text, href }: { icon: React.ReactNode; text: string; href?: string }) => {
  const [isHovered, setIsHovered] = useState(false)

  const content = (
    <motion.div 
      className="flex items-center justify-center space-x-4 text-xl text-white"
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        animate={{ rotate: isHovered ? 360 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {icon}
      </motion.div>
      <motion.span
        animate={{ x: isHovered ? 5 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {text}
      </motion.span>
    </motion.div>
  )

  return href ? (
    <Link href={href} className="block">
      {content}
    </Link>
  ) : (
    content
  )
}

const EmailIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  )
}

const ParticleBackground = () => {
  const particleCount = 50
  const controls = useAnimation()

  useEffect(() => {
    controls.start((i) => ({
      y: ['0%', '100%'],
      x: [
        `${Math.random() * 100}%`,
        `${Math.random() * 100}%`,
        `${Math.random() * 100}%`,
        `${Math.random() * 100}%`,
      ],
      transition: {
        duration: 10 + Math.random() * 20,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'linear',
        delay: i * 0.1,
      },
    }))
  }, [controls])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(particleCount)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-500 rounded-full opacity-50"
          animate={controls}
          custom={i}
          style={{
            left: `${Math.random() * 100}%`,
            top: `-5%`,
          }}
        />
      ))}
    </div>
  )
}

export default ContactSection