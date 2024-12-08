import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  position?: string;
  hackathonName?: string;
  logo?: string;
  isLatest?: boolean;
  downloadLink?: string;
  color?: string;
}

interface VerticalTimelineProps {
  events: TimelineEvent[];
}

const VerticalTimeline: React.FC<VerticalTimelineProps> = ({ events }) => {
  return (
    <div className="relative mx-auto">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>
      {events.map((event, index) => (
        <motion.div
          key={index}
          className={`mb-16 flex justify-between items-center w-full ${
            index % 2 === 0 ? 'flex-row-reverse' : ''
          }`}
          initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="w-5/12">
            <div className={`bg-gray-900 p-6 rounded-lg shadow-lg border.3 border-gray-800 flex ${
              index % 2 === 0 ? 'flex-row-reverse' : ''
            }`}>
              <div className={`flex-1 ${index % 2 === 0 ? 'pl-4' : 'pr-4'}`}>
                <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
               
                {event.position && (
                  <p className="text-green-400 font-semibold mb-2">{event.position}</p>
                )}
                <p className="text-gray-300 text-sm mb-4">{event.description}</p>
                <div className={`flex items-center gap-2 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                  <time className="text-xs text-white">{event.date}</time>
       
                </div>
               
              </div>
              {event.logo && (
                <div className={`w-24 h-24 relative flex-shrink-0 ${
                  index % 2 === 0 ? 'mr-4' : 'ml-4'
                }`}>
                  <Image
                    src={event.logo}
                    alt={event.hackathonName || event.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="z-20 flex items-center justify-center bg-gray-900 w-10 h-10 rounded-full border-4 border-blue-500 shadow-lg">
            <span className="text-white font-bold">{index + 1}</span>
          </div>
          <div className="w-5/12"></div>
        </motion.div>
      ))}
    </div>
  );
};

export default VerticalTimeline;

