'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Achievements from '../components/Achievements'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { getPortfolio } from '@/lib/actions'

interface PortfolioData {
  name: string;
  currentStatus: string;
  Nav_Section: any;
  Hero: any;
  Projects: any;
  Achievements: any;
  Contact: any;
}

export default function Home() {
  const [portfolioData, setPortfolioData] = useState<PortfolioData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const { story } = await getPortfolio()
        console.log(story)
        if (story) {
          setPortfolioData({
            name: story.name,
            currentStatus: story.currentStatus,
            Nav_Section: story.content.Nav_Section[0],
            Hero: story.content.Hero[0],
            Projects: story.content.Projects[0],
            Achievements: story.content.Achievements[0],
            Contact: story.content.Contact[0]
          })
        }
      } catch (error) {
        console.error('Error fetching portfolio data:', error)
        setError('Failed to load portfolio data. Please try again later.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchPortfolioData()
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500 mx-auto"></div>
          <p className="mt-4 text-xl font-semibold text-gray-700">Loading  portfolio...</p>
        </div>
      </div>
    )
  }

 

  if (!portfolioData || error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        <div className="text-center p-8 bg-white rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-105">
          <h1 className="text-4xl font-bold mb-4 text-gray-800 animate-fadeIn">
            Welcome to Your Portfolio Creator!
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-fadeIn animation-delay-300">
            It looks like you haven't set up your portfolio yet. Let's get started!
          </p>
          <div className="animate-fadeIn animation-delay-600">
            <Link href="/admin" className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-6 rounded-full hover:from-purple-700 hover:to-indigo-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 animate-pulse">
              Create Your Portfolio Now
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <Navbar data={portfolioData.Nav_Section} />
      <Hero data={portfolioData.Hero} name={portfolioData.name} currentStatus={portfolioData.currentStatus} />
      <Services data={portfolioData.Projects} />
      <Achievements  />
      <section id="contact">
        <Contact data={portfolioData.Contact} />
      </section>
      <Footer />
    </>
  )
}