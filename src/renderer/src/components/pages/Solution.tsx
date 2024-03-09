<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { useLocation } from 'react-router-dom';
=======
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';
>>>>>>> 452674aa6e0ef8b9d113d78de543d1c3af7aed27

// Interface for Audio Data
interface Audio {
  title: string;
  src: string;
}

// Assuming audio data is imported from another page (e.g., audioData.ts)
import audioData from '../../assets/audioData.json';

export const Solution: React.FC = () => {
  const location = useLocation();
  const { responseData } = location.state;
  const { disease_name, fungicide_application, resistant_varieties, sanitation, monitoring } = responseData;

  const [currentAudio, setCurrentAudio] = useState<Audio | null>(null);

  useEffect(() => {
    // Find audio matching disease name (case-insensitive)
    const matchingAudio = audioData.find(
      (audio) => audio.title.toLowerCase() === disease_name.toLowerCase()
    );
    setCurrentAudio(matchingAudio);
  }, [disease_name, audioData]);

  return (
<<<<<<< HEAD
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
         <p className=''>{fungicide_application}</p>
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
  );
};

// import ReactAudioPlayer from 'react-audio-player'
// import { useLocation } from 'react-router-dom'
// import audio from "../../assets/audio.mp3"

// export const Solution = () => {
//   const location = useLocation()
//   const { responseData } = location.state

//   const { disease_name, fungicide_application, resistant_varieties, sanitation, monitoring } =
//     responseData

//   return (
//     <div className="container mx-auto mt-10 px-4">
//       <h1 className="text-3xl font-bold mb-4 text-black">{disease_name}</h1>
//       <ReactAudioPlayer
//           src={audio}
//           controls 
//           onPlay={() => console.log('Audio started playing')}
//           onPause={() => console.log('Audio paused')}
//           onEnded={() => console.log('Audio finished playing')}
//         />
//       <div className="bg-gray-100 p-6 rounded-md">
//         <h2 className="text-xl font-semibold mb-2 text-black">Fungicide Application:</h2>
//         <p className=''>{fungicide_application}</p>
//       </div>
//       <div className="bg-gray-100 p-6 rounded-md mt-4">
//         <h2 className="text-xl font-semibold mb-2">Resistant Varieties:</h2> 
//         <p>{resistant_varieties}</p>
//       </div>
//       <div className="bg-gray-100 p-6 rounded-md mt-4">
//         <h2 className="text-xl font-semibold mb-2">Sanitation:</h2>
//         <p>{sanitation}</p>
//       </div>
//       <div className="bg-gray-100 p-6 rounded-md mt-4">
//         <h2 className="text-xl font-semibold mb-2">Monitoring:</h2>
//         <p>{monitoring}</p>
//       </div>
//     </div>
//   )
// }
=======
    <>
      <button className="absolute right-5 top-5 rounded-full bg-green-800 p-4">
        <Link to="/home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </Link>
      </button>
      <div className="container mx-auto mt-10 px-4 ">
        <h1 className="text-4xl font-bold mb-4 text-black">{disease_name}</h1>
        <div className="bg-gray-100 p-6 rounded-md bg-green-500">
          <h2 className="text-2xl font-semibold mb-2 text-white">Fungicide Application:</h2>
          <p className="text-white">{fungicide_application}</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-md mt-4 bg-green-500">
          <h2 className="text-2xl font-semibold mb-2 text-white">Resistant Varieties:</h2>
          <p className="text-white">{resistant_varieties}</p>
        </div>
        <div className="text-white p-6 rounded-md mt-4 bg-green-500">
          <h2 className="text-2xl font-semibold mb-2 text-white">Sanitation:</h2>
          <p className="text-white">{sanitation}</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-md mt-4 bg-green-500">
          <h2 className="text-2xl font-semibold mb-2 text-white">Monitoring:</h2>
          <p className="text-white">{monitoring}</p>
        </div>
      </div>
    </>
  )
}
>>>>>>> 452674aa6e0ef8b9d113d78de543d1c3af7aed27
