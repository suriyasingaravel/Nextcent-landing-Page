import Logo from "../assets/logo";

const Navbar = () => {
  return (
    <div className="bg-[#F5F7FA]">
      <nav className="flex flex-wrap justify-between items-center p-4  w-11/12 m-[auto]">
        <Logo />

        <ul className="flex justify-around w-full sm:w-3/5 mt-4 sm:mt-0">
          <li className="mb-2 sm:mb-0">Home</li>
          <li className="mb-2 sm:mb-0">Service</li>
          <li className="mb-2 sm:mb-0">Feature</li>
          <li className="mb-2 sm:mb-0">Product</li>
          <li className="mb-2 sm:mb-0">Testimonial</li>
          <li className="mb-2 sm:mb-0">FAQ</li>
        </ul>

        <div className="flex gap-4 mt-4 sm:mt-0">
          <button className="w-20 h-10 rounded text-[#4CAF4F] text-center">
            Login
          </button>
          <button className="w-24 h-10 rounded text-white text-center px-5 py-2.5 gap-2.5 bg-[#4CAF4F]">
            Sign up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
