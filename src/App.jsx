import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="body">
      <header>
        <img src="/media/hero_bg.png" alt="" className='h-[60rem] absolute right-0 ' />
        <div className="ourservice flex flex-col gap-8 w-[30rem] ml-[8rem] pt-[4rem]">
          <img src="/media/cv-logo.svg" alt="" className='w-[8rem]' />
          <h1 className='text-[#18214d] text-[6rem] leading-[6rem] font-[600] font-segoe UI'>We build world class Tech talents</h1>
          <p className='text-[1.5rem]'>Join our next cohort to accelerate your dream of being a World Class Software Developer. No coding experience required.</p>
          <button>Enroll now</button>
          <div className="logos">
            <img src="/media/fb-icon.svg" alt="" />
            <img src="/media/tw-icon.svg" alt="" />
            <img src="/media/github-icon.svg" alt="" />
            <img src="/media/location.svg" alt="" />
          </div>
        </div>
      </header>
    </div>
  )
}

export default App
