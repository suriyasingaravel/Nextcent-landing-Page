import contact from "../assets/contact.svg"


const Members = () => {
  return (
    <div className="flex items-center justify-around gap-10 p-12  w-[100%] bg-[#F5F7FA]">
        <div className=" ">
             <h2 className="font-semibold text-4xl text-[#4D4D4D]">Helping a local <br />
             <h2 className="font-semibold text-4xl text-[#4CAF4F] pt-2">business reinvent itself</h2>  </h2>
             <p className="text-#18191F font-normal text-base pt-2">We reached here with our hard work and dedication</p>
        </div>

        <div>
            <div>
                <img src={contact} alt="" />
            </div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
  )
}

export default Members