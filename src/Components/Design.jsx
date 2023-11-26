// import React from 'react'
import design from "../assets/design.svg"

const MidSection = () => {
  return (
    <div className="flex items-center justify-around gap-10 p-12  w-[100%] ">
        <div>
          <img src={design} alt="w-1/2" />
        </div>
        <div className="w-3/5">
            <h2 className="text-[#4D4D4D] font-semibold text-4xl p-2">How to design your site footer like<br />
            <h2>we did</h2> </h2>
            <p className="font-normal text-sm p-4 text-[#717171] text-left">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
            <button className="bg-[#4CAF4F] w-36 h-11 rounded-md m-2 text-white">Learn More</button>
        </div>
    </div>
  )
}

export default MidSection