import Navbar from '../Navbar'
import { BottomNav } from '../BottomNav'
import { Card } from '../Card'

export const Home = () => {
  return (
    <div className=" w-full h-full">
      <Navbar />
      <Card/>
      <BottomNav />
    </div>
  )
}
