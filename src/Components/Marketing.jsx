// import React from 'react'
import marketing1 from "../assets/marketing1.svg"
import marketing2 from "../assets/marketing2.svg"
import marketing3 from "../assets/marketing3.svg"
const Marketing = () => {
  return (
    <div className="flex flex-col justify-center items-center p-10 w-4/5 m-[auto]"> 
        <div >
            <h2 className="font-semibold text-4xl text-center text-[#4D4D4D]">Caring is the new marketing</h2>
            <p className="m-3 font-normal text-base text-center text-[#717171]">The Nexcent blog is the best place to read about the latest membership insights, <br />
            trends and more. See who's joining the community, read about how our community <br />
            are increasing their membership income and lot's more.​</p>
        </div>
        <div className="flex justify-center items-center gap-7 m-2">
            <img src={marketing1} alt="1" />
            <img src={marketing2} alt="2" />
            <img src={marketing3} alt="3" />
        </div>
    </div>
  )
}

export default Marketing