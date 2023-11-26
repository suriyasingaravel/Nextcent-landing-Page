// import React from 'react'
import Dot from "../assets/Dot"
import image from "../assets/Illustration.svg"

const TopSection = () => {
  return (
    <div className="bg-[#F5F7FA]">
 
    <div className="flex items-center justify-around gap-10 p-12  w-[100%]  ">
        <div className="grid gap-5">
            <h1 className="text-5xl font-medium text-[#4D4D4D]">Lessons and insights <br className="" /><h1 className="text-5xl font-medium text-[#4CAF4F] text-left">from 8 years</h1></h1>
            <p className="text-xs text-[#717171] text-left">Where to grow your business as a photographer: site or social media?</p>
            <button className="w-[100px] h-[35px]  rounded-md text-white text-center bg-[#4CAF4F]">Register</button>
        </div>
        <div>
            <img src={image} alt="empty" />
        </div>
       
    </div>

        <div className="flex justify-center items-center pb-6">
        <Dot/>
        </div>
      
         
    </div>
  )
}

export default TopSection