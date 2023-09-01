import React from 'react'
import avatar from '../assets/profile_pic.jpg'
import bgHero from '../assets/mountain.jpg'
import pin from '../assets/pinpoint-removebg-preview.png'

function Home() {
  return (
    <div>
      <div className='flex justify-center items-center h-screen bg-slate-300'>
        
        <div className='relative w-1/3 h-5/6 bg-white rounded-lg'>
            <img className='rounded-lg' src={bgHero} alt="" />
            <div className='absolute flex flex-col justify-center items-center top-40 left-36'>
                <div className='flex justify-center items-center pt-10'>
                    <img className='object-cover rounded-full w-44 h-44' src={avatar} alt="" />
                </div>
                <div className='flex flex-col justify-center items-center pt-6'>
                    <span className='text-xl font-bold text-[#250002]'>Yunus Dermawan</span>
                </div>
                <div className='flex items-center gap-3'>
                    <img className='h-4 fill-white' src={pin} alt="" />
                    <span className='text-lg text-[#8F6241]'>Indonesia</span>
                </div>
                <div className='flex items-center gap-3 pt-6'>
                    <span className='text-lg text-[#8F6241]'>Web Developer</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
