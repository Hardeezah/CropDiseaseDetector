import React, { useState, useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { useLocation } from 'react-router-dom';

// Assuming audio data is imported directly in the React component
import MaizeCercosporaLeafSpot from '../../assets/Audio/Maize_01.m4a';
import MaizeCommonRust from '../../assets/Audio/Maize_002.m4a';
import MaizeNorthernLeafBlight from '../../assets/Audio/Maize_003.m4a';
import TomatoBacterialSpot from '../../assets/Audio/Tomato_001.m4a';
import TomatoEarlyBlight from '../../assets/Audio/Tomato_002.m4a';
import TomatoLeafMold from '../../assets/Audio/Tomato_003.m4a';
import TomatoSeptoriaLeafSpot from '../../assets/Audio/Tomato_004.m4a';
import TomatoSpiderMites from '../../assets/Audio/Tomato_005.m4a';
import TomatoTargetSpot from '../../assets/Audio/Tomato_006.m4a';
import TomatoMosaicVirus from '../../assets/Audio/Tomato_007.m4a';
import TomatoYellowLeafCurlVirus from '../../assets/Audio/Tomato_008.m4a';

export const Solution: React.FC = () => {
  const location = useLocation();
  const { responseData } = location.state;
  const { disease_name, fungicide_application, resistant_varieties, sanitation, monitoring } = responseData;

  const [currentAudio, setCurrentAudio] = useState<string | null>(null);

  useEffect(() => {
    // Map disease names to corresponding audio files
    const audioMapping: Record<string, string> = {
      'Maize Cercospora Leaf Spot': MaizeCercosporaLeafSpot,
      'Maize Common Rust': MaizeCommonRust,
      'Maize Northern Leaf Blight': MaizeNorthernLeafBlight,
      'Tomato Bacterial Spot': TomatoBacterialSpot,
      'Tomato Early Blight': TomatoEarlyBlight,
      'Tomato Leaf Mold': TomatoLeafMold,
      'Tomato Septoria Leaf Spot': TomatoSeptoriaLeafSpot,
      'Tomato Spider Mites': TomatoSpiderMites,
      'Tomato Target Spot': TomatoTargetSpot,
      'Tomato Mosaic Virus': TomatoMosaicVirus,
      'Tomato Yellow Leaf Curl Virus': TomatoYellowLeafCurlVirus,
    };

    // Find the corresponding audio file based on the disease name
    const matchingAudio = audioMapping[disease_name];

    setCurrentAudio(matchingAudio || null);
  }, [disease_name]);

  return (
    <div className="container mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-4 text-black">{disease_name}</h1>
      {currentAudio && (
        <ReactAudioPlayer
          src={currentAudio}
          controls
          onPlay={() => console.log('Audio started playing')}
          onPause={() => console.log('Audio paused')}
          onEnded={() => console.log('Audio finished playing')}
          style={{ width: '100%', background: '#f0f0f0', color: 'black', border: '1px solid #ccc' }}
        />
      )}

      <div className="bg-green-600 p-6 rounded-md text-white mt-4">
        <h2 className="text-xl font-semibold mb-2">Fungicide Application:</h2>
        <p>{fungicide_application}</p>
      </div>
      <div className="bg-green-600 p-6 rounded-md text-white mt-4">
        <h2 className="text-xl font-semibold mb-2">Resistant Varieties:</h2>
        <p>{resistant_varieties}</p>
      </div>
      <div className="bg-green-600 p-6 rounded-md text-white mt-4">
        <h2 className="text-xl font-semibold mb-2">Sanitation:</h2>
        <p>{sanitation}</p>
      </div>
      <div className="bg-green-600 p-6 rounded-md text-white mt-4">
        <h2 className="text-xl font-semibold mb-2">Monitoring:</h2>
        <p>{monitoring}</p>
      </div>
    </div>
  );
};
