// import React from 'react'
import tesla from "../assets/tesla.svg"
import teslaLogos from "../assets/teslaLogos.svg"

const Tesla = () => {
  return (
    <div className="flex items-center justify-around gap-10 p-12  w-[100%] bg-[#F5F7FA] ">
        <div>
          <img src={tesla} alt="w-1/2" />
        </div>
        <div className="w-3/5">
           <p className=" text-[#717171] text-left">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
           <p className="  font-normal text-xl text-left mt-4 mb-2 text-[#4CAF4F]">Tim Smith</p> 
           <p className=" text-[#89939E] text-left mb-4">British Dragon Boat Racing Association</p>
           <img src={teslaLogos} alt="logos" />
        </div>
    </div>
  )
}

export default Tesla