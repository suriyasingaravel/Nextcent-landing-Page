// import React from 'react'
import unseen from "../assets/unseen.svg"

const MidSection = () => {
  return (
    <div className="flex items-center justify-around gap-10 p-12  w-[100%] ">
        <div>
          <img src={unseen} alt="w-1/2" />
        </div>
        <div className="w-1/2">
            <h2 className="text-[#4D4D4D] font-semibold text-4xl p-2">The unseen of spending three <br />
            <h2>years at Pixelgrade</h2> </h2>
            <p className="font-normal text-sm p-4 text-[#717171]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
            <button className="bg-[#4CAF4F] w-36 h-11 rounded-md m-2 text-white">Learn More</button>
        </div>
    </div>
  )
}

export default MidSection