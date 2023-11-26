import clientLogos from "../assets/ClientLogos.svg";    


const Clients = () => {
  return (
    <div className="p-8">
        <h2 className='font-semibold text-center text-4xl text-[#4D4D4D]'>Our Clients</h2>
        <p className="text-center text-base text-[##717171] m-2 font-normal">We have been working with some Fortune 500+ clients </p>
        <img className="w-3/4 m-[auto]" src={clientLogos} alt="logos" />
    </div>
  )
}

export default Clients