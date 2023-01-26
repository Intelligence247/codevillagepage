import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="body">
      <header>
        <img src="/media/hero_bg.png" alt="" className='h-[60rem] absolute right-0 ' />
        <div className="ourservice flex flex-col gap-6 ml-[8rem] pt-[4rem]">
          <img src="/media/cv-logo.svg" alt="" className='w-[8rem]' />
          <h1 className='text-[#18214d] text-[5rem] leading-[6rem] font-[600] font-segoe UI w-[25rem] mt-[3rem]'>We build world class Tech talents</h1>
          <p className='text-[1.5rem] w-[40rem]'>Join our next cohort to accelerate your dream of being a World Class Software Developer. No coding experience required.</p>
          <p className='btn'>Enroll now</p>
          <div className="logos flex gap-6 mt-[3rem]">
            <img src="/media/fb-icon.svg" alt="" />
            <img src="/media/tw-icon.svg" alt="" />
            <img src="/media/github-icon.svg" alt="" />
            <img src="/media/location.svg" alt="" />
          </div>
        </div>
      </header>

      <div className="ecosystem  w-[100vw] px-[10rem] pb-[10rem]">
        <div className="ecosystemtexts">
          <p className='w-[56%] text-[3.3rem] text-[#18214d]'>State of The Art
            Ecosystem for Creatives
          </p>
          <p className='w-[40%] text-[1rem] grid place-items-center leading-[2rem]' >Be a part of an all-inclusive technology hub where you learn, collaborate with tech creatives and join a team of support systems offering you the top tools and frameworks to build solutions and earn big.</p>
        </div>

        <img src="/media/cv-office.jpg" className='mt-[4rem] w-[100vw]' alt="" />

        <div className="whatwedo">
          <div className="web">
            <img src="/media/bookmark-circle.svg" alt="" />
            <div className="right">
              <h1>Web & Mobile Development</h1>
              <p>We design and develop tech solutions for SMEs and Government Agency.</p>
            </div>
          </div>

          <div className="web">
            <img src="/media/tent-circle.svg" alt="" />
            <div className="right">
              <h1>Bootcamps & Trainings</h1>
              <p>We’re building the next generation of tech talents.</p>
            </div>
          </div>

          <div className="web">
            <img src="/media/workspace-circle.svg" alt="" />
            <div className="right">
              <h1>Workspaces & Tech Hub</h1>
              <p>Work and Connect with other Creatives. All in a fun and cozy environment.</p>
            </div>
          </div>

        </div>

      </div>

      <div className="global">
        <div className="learn">
          <h1>Learn Web & Mobile Development. Access the global job market.</h1>
          <p>The world is constantly in need of technical talent supply pool. Tech is needed accross every sector. Your course of study doesn’t matter. All you need is the skill and experience.</p>
          <p className='btn'><a href="/src/learn.jsx">Learn more</a></p>
        </div>

        <div className="line bg-[#d1d5db] h-[80%] w-[2px] flex justify-self-center"></div>

        <div className="schedule">
          <div className="web web2">
            <img src="/media/mail-white.svg" alt="" />
            <div className="right">
              <h1>Program Schedule</h1>
              <p className='font-[600]'>6 months training + 6months paid internship</p>
              <p className='text-[#9ca3af]'>(there is a custom schedule for students)</p>
            </div>
          </div>

          <div className="web web2">
            <img src="/media/group-white.svg" alt="" />
            <div className="right">
              <h1>Our Curriculum</h1>
              <p>It covers the fundamentals and advanced concepts of web & mobile development</p>
            </div>
          </div>

          <div className="web web2">
            <img src="/media/group-white.svg" alt="" />
            <div className="right">
              <h1>Experiential Learning</h1>
              <p className='font-[500]'>30+ Hands-on Projects &
                5+ Real World (Production Grade) Projects</p>
            </div>
          </div>
        </div>
      </div>

      <div className="expertise">
        <h1>Our Expertise</h1>
        <p>We have built several solutions from ground up using the following frameworks. Our world class expertise is enviable.</p>

        <div className="images">
          <img src="/media/andriod.svg" alt="" />
          <img src="/media/bootstrap.svg" alt="" />
          <img src="/media/aws.svg" alt="" />
          <img src="/media/heroku.svg" alt="" />
          <img src="/media/html5.svg" alt="" />
          <img src="/media/node.svg" alt="" />
          <img src="/media/github.svg" alt="" />
          <img src="/media/css.svg" alt="" />
          <img src="/media/gitlab.svg" alt="" />
          <img src="/media/react.svg" alt="" />
          <img src="/media/mysql.svg" alt="" />
          <img src="/media/mongodb.svg" alt="" />
          <img src="/media/python.svg" alt="" />
          <img src="/media/vue.svg" alt="" />
          <img src="/media/postgres.svg" alt="" />
          <img src="/media/js.svg" alt="" />
          <img src="/media/firebase.svg" alt="" />
          <img src="/media/redux.svg" alt="" />
          <img src="/media/tailwind.svg" alt="" />
          <img src="/media/ruby.svg" alt="" />
          <img src="/media/figma.svg" alt="" />
        </div>
      </div>


      <div className="kids  w-[40rem] m-[auto]">
        <h1 className='text-[4rem] leading-[4rem] text-center m-[auto] mt-[4rem] mb-8'>Codevillage Kids & Teens Code Classes</h1>
        <p>Will your kids be able to build a tech solution? Yes, It’s possible.</p>
        <p>“We catch them young” by introducing these fresh minds into how computer works and how to make it do what they want.</p>

        <p>
          <p>Secure a spot for your kid now</p>
          <img src="/media/arrow-right.svg" alt="" />
        </p>
      </div>

      <div className="address">
        <div className="programs">
          <div className="program">
            <img src="/media/cv-logo.svg" alt="" />
            <p>Building the tech talents for the future of work.</p>
          </div>

          <div className="program">
            <p>Our Programs</p>
            <p>Fullstack Training</p>
            <p>Kids & Teens Code Classes</p>
          </div>

          <div className="program">
            <p>Links</p>
            <p><a href="">Careers</a></p>
            <p><a href="">Refund Policy</a></p>
            <p><a href="">Privacy Policy</a></p>
          </div>


          <div className="program">
            <p>Contacts</p>
            <p>Rasak Onilu Plaza (Middle Floor), Adjacent Niger Motel, Niger Road, Ilorin, Nigeria</p>
            <p className='numbers'>08168861541 (Nigeria)</p>
            <p className='numbers'>+1 (707) 681-1531 (International)</p>
            <p className='numbers'>+1 (707) 681-1531 (Whatsapp)</p>
            <p className='numbers'>hello@codevillage.ng</p>
          </div>
        </div>

        <div className="horizontal bg-[#e0e0e0] w-[100%] h-[2px] my-[3rem]"></div>
        <Footer />
      </div>


    </div>
  )
}

export default App
