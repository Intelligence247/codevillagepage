import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Footer from './Components/Footer'
import Features from './Components/Features'
import Programs from './Components/Programs'
import Btns from './Components/Btns'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="body">
      <header>
        <img src="/media/hero_bg.png" alt="" className='heroimg h-[60rem] absolute right-0 ' />
        <div className="ourservice ">
          <img src="/media/cv-logo.svg" alt="" className='cvlogolmg' />
          <h1 className='webuild'>We build world class Tech talents</h1>
          <p className='join'>Join our next cohort to accelerate your dream of being a World Class Software Developer. No coding experience required.</p>
          <Btns text={"Enroll now"} />
          <div className="logos flex gap-6 mt-[3rem]">
            <img src="/media/fb-icon.svg" alt="" />
            <img src="/media/tw-icon.svg" alt="" />
            <img src="/media/github-icon.svg" alt="" />
            <img src="/media/location.svg" alt="" />
          </div>
        </div>
      </header>

      <div className="ecosystem">
        <div className="ecosystemtexts">
          <p className=''>State of The Art
            Ecosystem for Creatives
          </p>
          <p className='' >Be a part of an all-inclusive technology hub where you learn, collaborate with tech creatives and join a team of support systems offering you the top tools and frameworks to build solutions and earn big.</p>
        </div>

        <img src="/media/cv-office.jpg" className='mt-[4rem] w-[100vw]' alt="" />

        <div className="whatwedo">

          <Features
            img="/media/bookmark-circle.svg"
            title={'Web & Mobile Development'}
            descr={'We design and develop tech solutions for SMEs and Government Agency.'} />

          <Features
            img="/media/tent-circle.svg"
            title={'Bootcamps & Trainings'}
            descr={'We’re building the next generation of tech talents.'} />
          <Features
            img="/media/workspace-circle.svg"
            title={'Workspaces & Tech Hub'}
            descr={'Work and Connect with other Creatives. All in a fun and cozy environment.'} />

        </div>

      </div>

      <div className="global">
        <div className="learn">
          <h1>Learn Web & Mobile Development. Access the global job market.</h1>
          <p>The world is constantly in need of technical talent supply pool. Tech is needed accross every sector. Your course of study doesn’t matter. All you need is the skill and experience.</p>
          <Btns text={"Learn more"} />

        </div>

        <div className="line bg-[#d1d5db] h-[80%] w-[2px] flex justify-self-center"></div>

        <div className="schedule">

          <Programs
            img="/media/mail-white.svg"
            title={'Program Schedule'}
            descr={'6 months training + 6months paid internships'}
            custom={'(there is a custom schedule for students)'} />

          <Programs
            img="/media/group-white.svg"
            title={'Our Curriculum'}
            descr={'It covers the fundamentals and advanced concepts of web & mobile development'} />
          <Programs
            img="/media/group-white.svg"
            title={'Experiential Learning'}
            descr={'We have built several solutions from ground up using the following frameworks. Our world class expertise is enviable.'} />

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
        <h1>Codevillage Kids & Teens Code Classes</h1>
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

        <div className="horizontal"></div>
        <Footer />
      </div>


    </div>
  )
}
export default App