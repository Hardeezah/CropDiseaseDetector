import React, { useState, useEffect } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import { useLocation } from 'react-router-dom'

interface Audio {
  title: string
  src: string
}

import audioData from '../../assets/audioData.json'

export const Solution: React.FC = () => {
  const location = useLocation()
  const { responseData } = location.state
  const { disease_name, fungicide_application, resistant_varieties, sanitation, monitoring } =
    responseData

  const [currentAudio, setCurrentAudio] = useState<Audio | null>(null)

  useEffect(() => {
    const matchingAudio = audioData.find(
      (audio) => audio.title.toLowerCase() === disease_name.toLowerCase()
    )
  }, [disease_name, audioData])

  return (
    <div className="container mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-4 text-black">{disease_name}</h1>
      {currentAudio && (
        <ReactAudioPlayer
          src={currentAudio.src}
          controls
          onPlay={() => console.log('Audio started playing')}
          onPause={() => console.log('Audio paused')}
          onEnded={() => console.log('Audio finished playing')}
        />
      )}
      <div className="bg-gray-100 p-6 rounded-md">
        <h2 className="text-xl font-semibold mb-2 text-black">Fungicide Application:</h2>
        <p className="">{fungicide_application}</p>
      </div>
      <div className="bg-gray-100 p-6 rounded-md mt-4">
        <h2 className="text-xl font-semibold mb-2">Resistant Varieties:</h2>
        <p>{resistant_varieties}</p>
      </div>
      <div className="bg-gray-100 p-6 rounded-md mt-4">
        <h2 className="text-xl font-semibold mb-2">Sanitation:</h2>
        <p>{sanitation}</p>
      </div>
      <div className="bg-gray-100 p-6 rounded-md mt-4">
        <h2 className="text-xl font-semibold mb-2">Monitoring:</h2>
        <p>{monitoring}</p>
      </div>
    </div>
  )
}

