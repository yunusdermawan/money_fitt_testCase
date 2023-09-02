import React from 'react'
import { Link } from 'react-router-dom'
import ReactWhatsapp from 'react-whatsapp';
import avatar from '../assets/profile_pic.jpg'
import bgHero from '../assets/mountain.jpg'
import porto1 from '../assets/coffee2.png'
import porto2 from '../assets/zwallet2.png'


function Home() {
  return (
    <div className='w-[100%] max-w-7xl mx-auto'> 
      <div className='flex justify-center items-center  bg-slate-200 h-screen'>
        <div className='relative w-1/3 h-5/6 bg-white rounded-lg'>
            <img className='rounded-lg' src={bgHero} alt="" />
            <div className='absolute w-full flex flex-col justify-center items-center top-32'>
                <div className='flex justify-center items-center pt-10'>
                    <img className='object-cover rounded-full outline outline-8 outline-white w-44 h-44' style={{color: '#8F6241'}} src={avatar} alt="" />
                </div>
                <div className='flex flex-col justify-center items-center pt-6'>
                    <span className='font-league text-4xl font-medium text-[#250002]'>Yunus Dermawan</span>
                </div>
                <div className='flex items-center gap-3'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#8F6241" class="w-5 h-5">
                    <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                  </svg>
                    <span className='text-lg text-[#8F6241]'>Indonesia</span>
                </div>
                <div className='flex items-center gap-3 pt-6 pb-4'>
                    <span className='text-2xl font-semibold text-[#8F6241]'>Web Developer</span>
                </div>
                <div className='w-full flex justify-between items-center px-16 pt-6 pb-8'>
                  <ReactWhatsapp className='tooltip' number='6281359973044' data-tip="6281359973044">
                    <svg className='fill-[#8F6241]' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50" >
                      <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"></path>
                    </svg>
                  </ReactWhatsapp>
                  <Link className='tooltip' to='mailto:yunus.shevcenko@gmail.com' target='_blank' rel="noreferrer" data-tip="yunus.shevcenko@gmail.com">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#8F6241" className="w-6 h-6">
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                  </Link>
                  <a className='tooltip' href='https://www.linkedin.com/in/yunus-dermawan' target='_blank' rel="noreferrer" data-tip="linkedin.com/in/yunus-dermawan/">
                    <svg className='fill-[#8F6241]' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
                      <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                    </svg>
                  </a>
                  <a className='tooltip' href='https://github.com/yunusdermawan' target='_blank' rel="noreferrer" data-tip="github.com/yunusdermawan">
                    <svg className='fill-[#8F6241]' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 64 64">
                        <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
                      </svg>
                  </a>
                </div>
                <div>
                  <div className='w-full grid grid-cols-2 items-center gap-4 px-7'>
                    <img className='w-full h-full object-cover border border-4 border-[#8F6241] rounded' src={porto1} alt="" />
                    <img className='w-full h-full object-cover border border-4 border-[#8F6241] rounded' src={porto2} alt="" />
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
