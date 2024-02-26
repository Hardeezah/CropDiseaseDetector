import Webcam from 'react-webcam'
import { useCallback, useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Img from '@renderer/assets/bg2.jpg'
import axios from 'axios'
import ReactJoyride from 'react-joyride'
import { useHistory } from 'react-router-dom';

const steps = [
  {
    target: '.home',
    content: 'Click here to navigate to home screen'
  },
  {
    target: '.capture',
    content: 'Click here capture image'
  }
]

const Scan = () => {
  const history = useHistory();
  const webcamRef = useRef<Webcam>(null)
  const [file, setFile] = useState<string | null>(null)
  const [imgSrc, setImgSrc] = useState<string | null>(null)

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot()
    setImgSrc(imageSrc || Img)
    console.log(imageSrc)

    if (imageSrc) {
      const blob = dataURItoBlob(imageSrc);
      const newFile = new File([blob], `capturedImage_${Date.now()}.png`, { type: 'image/png' });
      setFile(newFile);
      localStorage.setItem('capturedImage', imageSrc);
    }

  }, [webcamRef])

  useEffect(() => {
    const imageData = localStorage.getItem('capturedImage')

    if (imageData) {
      const blob = dataURItoBlob(imageData);
      const newFile = new File([blob], `capturedImage_${Date.now()}.png`, { type: 'image/png' });
      setFile(newFile);
    }
  }, [capture])

  const dataURItoBlob = (dataURI: string): Blob => {
    const byteString = atob(dataURI.split(',')[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);

    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ab], { type: 'image/png' });
  };

  const handleDetect = () => {
    const apiUrl = 'https://09f9-196-220-66-189.ngrok-free.app/api/users/'

    const formData = new FormData()

    formData.append('image', file)

    axios
      .post(apiUrl, formData, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((response) => {
        const responseData = response.data;

        history.push('/solution', { responseData });
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  const recapture = useCallback(() => {
    localStorage.removeItem('capturedImage')
    setImgSrc(null)
  }, [])

  return (
    <>
      <ReactJoyride
        steps={steps}
        continuous={true}
        styles={{
          options: {
            arrowColor: '#5caeab',
            backgroundColor: '#5caeab',
            overlayColor: 'rgba(92, 174, 171, .3)',
            primaryColor: '#5caeab',
            textColor: '#fff'
          },
          spotlight: {
            backgroundColor: 'transparent'
          }
        }}
        
        
        showSkipButton={true}
      />
      <div className="flex justify-center">
        <div className="container justify-center absolute">
          {imgSrc ? (
            <img src={imgSrc} alt="webcam" />
          ) : (
            <Webcam
              height={1500}
              width={1500}
              ref={webcamRef}
              mirrored={true}
              screenshotFormat="image/jpeg"
            />
          )}
        </div>
        <button className="absolute right-5 top-5 rounded-full bg-green-800 p-4 home">
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
        <div className="btn-container rounded-md mt-3 w-56 text-center absolute bottom-10 justify-center ">
          {imgSrc ? (
            <>
              <button className="bg-green-600 p-2 rounded-md" onClick={recapture}>
                Recapture
              </button>
              <button className="ml-5 rounded-md bg-blue-600 p-2" onClick={handleDetect}>
                Detect Image
              </button>
            </>
          ) : (
            <button className="p-2 rounded-sm bg-green-600 capture" onClick={capture}>
              Capture Image
            </button>
          )}
        </div>
      </div>
    </>
  )
}

export default Scan

// import Webcam from 'react-webcam'
// import { useCallback, useRef, useState } from 'react'
// import { Link } from 'react-router-dom'
// import Img from '@renderer/assets/bg2.jpg'

// const Scan = () => {
//   const webcamRef = useRef<Webcam>(null);

//   const [imgSrc, setImgSrc] = useState<string | null>(null);

//   const capture = useCallback(() => {
//     const imageSrc = webcamRef.current?.getScreenshot()
//     setImgSrc(imageSrc || Img)
//     console.log(imageSrc)
//   }, [webcamRef])

//   return (
//     <div className="flex justify-center">
//       <div className="container justify-center absolute">
//         {imgSrc ? (

//           <img src={imgSrc} alt="webcam" />
//         ) : (
//           <Webcam
//             height={1500}
//             width={1500}
//             ref={webcamRef}
//             mirrored={true}
//             screenshotFormat="image/jpeg"

//           />
//         )}
//       </div>
//       <button className="absolute right-5 top-5 rounded-full bg-green-800 p-4">
//         <Link to="/home">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
//             />
//           </svg>
//         </Link>
//       </button>
//       <div className="btn-container rounded-md mt-3 bg-green-600 w-56 text-center absolute bottom-10 justify-center ">
//         {imgSrc ? (
//           <div className='flex gap-10'>
//           <button onClick={() => setImgSrc(null)}>Recapture</button>
//           <button className="p-2 ml-2 rounded-sm" onClick={capture}>
//             Detect Image
//           </button>
//           </div>
//         ) : (

//           <button className="p-2 rounded-sm" onClick={capture}>
//             Capture Image
//           </button>

//         )}
//       </div>
//     </div>
//   )
// }

// export default Scan
