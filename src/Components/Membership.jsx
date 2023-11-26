import membership from "../assets/membership.svg"
import association from "../assets/association.svg"
import club from "../assets/club.svg";


const Membership = () => {
  return (
    <div>
        <div className="text-center">
            <h2 className="font-semibold text-4xl text-[#4D4D4D]">Manage your entire community  <br /> 
            <h2>in a single system</h2>
            </h2>
            <p className="text-[#717171] m-5">Who is Nextcent suitable for?</p>
        </div>
        <div className="flex justify-center items-center gap-12">
            <img src={membership} alt="" />
            <img src={association} alt="" />
            <img src={club} alt="" />
        </div>

    </div>
  )
}

export default Membership