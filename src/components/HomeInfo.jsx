import React from 'react'
import { Link } from 'react-router-dom'
import arrow from '../assets/icons/arrow.svg'

const InfoBox = ( {text, link, btn} ) => {
    return (
        <div className='info-box'>
            <p className='font-medium sm:text-xl text-center'>{text}</p>
            <Link to={(link)} className='neo-brutalism-white neo-btn'>
                {btn}
                <img src={arrow} className='w-4 h-4 object-contain'/>
            </Link>
        </div>
    )
}
const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue
        py-4 px-8 text-white mx-5'>Hi, I am <span className='font-semibold'>Anass</span>👋
        <br/>
        A Software engineer from Morocco 🇲🇦
        </h1>
    ),
    2: (
        <InfoBox
        text="Let's work together and build something great!"
          link='/contact'
         btn="Get In Touch"
        />
    ),
    3: (
        <InfoBox
        text="Done multiple projects using different technologies and frameworks."
          link='/projects'
         btn="My Projects"
        />
    ),
    4: (
        <InfoBox
        text="I am a software engineer with a passion for building things that live on the internet. I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces with efficient and modern backends."
          link='/about'
         btn="Learn More"
        />
    ),
}


function HomeInfo({currentStage}) {
  return (
   renderContent[currentStage] || null
  )
}

export default HomeInfo