import React from 'react'
import Search from './Search'
import logo from "../../images/wheels-logo.png"
import logocut from "../../images/loogoo.png"
import Txt from "../../images/Txt.png"
import dodge from "../../images/dodge.png"


function Hero() {
  return (
    <div>
        <div className='flex flex-col items-center p-1 py-5
         gap-1 h-[100px] w-full bg-white md:h-[200]'>
          <img src={logocut} alt="" height={100} width={300} className=''/>
          {/* <img src={Txt} alt="" height={200} width={200}/> */}
          <h2 className='text-2xl font-semibold text-black '>DREAM WHEEL MOTORS</h2>
            {/* <h2 className='text-xl font-bold text-black'>TWO & FOUR WHEELER CONSULTING</h2> */}
            {/* <h2 className='text-[30px] font-bold text-[#d90429] mb-4'>PRE Owned Cars | Bikes <span className='text-white'> Buying  & </span> Selling</h2> */}

            {/* <h2 className='text-[50px] font-bold text-[#d90429]'>PRE Owned Cars / Bikes <span className='text-white'> Buying  & </span> Selling</h2> */}
             
            
            {/* <Search/> */}
            {/* <img src={dodge} className='mt-20' height={300} width={1000}/> */}
        </div>
    </div>
  )
}

export default Hero