import { Boxes } from '/home/modther/Project/modtherabdalhag/src/components/ui/background-boxes.tsx'
import FollowCursor from '/home/modther/Project/modtherabdalhag/src/components/cursor/FollowCursor.jsx'
import Footer from './components/Footer'
import Card from './components/Card'

function App() {
 

  return (
    <>
    <div className='h-screen w-screen overflow-hidden relative min-h-screen 
    flex flex-col items-center justify-center bg-[#021010] from-[#021010] to-gray-900'>
      <Boxes/>
      <Card/>
      <FollowCursor/>
      <Footer/>
    </div>
    </>
  )
}

export default App
