import Navbar from '../Navbar'
import { BottomNav } from '../BottomNav'
import { Card } from '../Card'
import ReactJoyride from 'react-joyride'

const steps = [
  {
    target: '.navbar',
    content: 'Welcome!! Please spare a minute to learn about our page'
  },
  {
    target: '.navbar > .navbar-end > .about',
    content: 'Learn more about the brains behind this device'
  },
  {
    target: '.navbar > .navbar-end > .help',
    content: "For help click on this button"
  },
  {
    target: '.scan',
    content: 'Click here to scan affected plants'
  },
  {
    target: '.ecosystem',
    content: 'Click here to share information'
  },
  {
    target: '.history',
    content: 'Click here to see previous scan results'
  }
]

export const Home = () => {
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
        showProgress={true}
        // Add this
        showSkipButton={true}
      />
      <div className=" w-full h-full">
        <Navbar />
        <Card />
        <BottomNav />
      </div>
    </>
  )
}
