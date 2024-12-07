import React from 'react';
import Image from 'next/image';

interface HackathonCounterProps {
  count: number;
  logos: string[];
}

const HackathonCounter: React.FC<HackathonCounterProps> = ({ count, logos }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 mb-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <h2 className="text-2xl font-bold text-white mr-4">Hackathons Won:</h2>
          <p className="text-5xl font-bold text-purple-400">{count} </p>
          {/* <p className="text-xl font-bold text-purple-400">      + 3 others</p> */}
        </div>
        <div className="flex items-center gap-4">
          {logos.map((logo, index) => (
            <div key={index} className="w-12 h-12 relative">
              <Image
                src={logo}
                alt={`Hackathon organization logo ${index + 1}`}
                layout="fill"
                objectFit="contain"
                className="rounded-full bg-white p-1"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HackathonCounter;

