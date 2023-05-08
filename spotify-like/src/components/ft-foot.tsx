import Image from "next/image";
let Foot = () => {
  return (
    // <!-- Footer -->
    <footer className="bg-blue-400">
      {/* <!-- Flex Container --> */}
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        {/* <!-- Logo and social links container --> */}
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2022, All Rights Reserved
          </div>
          {/* <!-- Logo --> */}
          <div>
            <Image
              className="rounded-xl w-48"
              src="/PoE/PoE.png"
              alt="Fire Trap Elementaist"
              width={450}
              height={450}
            />
          </div>
          {/* <!-- Social Links Container --> */}
          <div className="flex justify-center space-x-4">
            {/* <!-- Link 1 --> */}
            <a href="#">
              {/* <img src="img/icon-facebook.svg" alt="" className="h-8" /> */}
              {/* <Image
                className="rounded-xl w-16"
                src="/PoE/frostBlink.png"
                alt="Fire Trap Elementaist"
                width={450}
                height={450}
              /> */}
            </a>
            {/* <!-- Link 2 --> */}
            <a href="#">
              {/* <img src="img/icon-youtube.svg" alt="" className="h-8" /> */}
            </a>
            {/* <!-- Link 3 --> */}
            <a href="#">
              {/* <img src="img/icon-twitter.svg" alt="" className="h-8" /> */}
            </a>
            {/* <!-- Link 4 --> */}
            <a href="#">
              {/* <img src="img/icon-pinterest.svg" alt="" className="h-8" /> */}
            </a>
            {/* <!-- Link 5 --> */}
            <a href="#">
              {/* <img src="img/icon-instagram.svg" alt="" className="h-8" /> */}
            </a>
          </div>
        </div>
        {/* <!-- List Container --> */}
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-blue-700">
              Home
            </a>
            <a href="#" className="hover:text-blue-700">
              Pricing
            </a>
            <a href="#" className="hover:text-blue-700">
              Products
            </a>
            <a href="#" className="hover:text-blue-700">
              About
            </a>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-blue-700">
              Careers
            </a>
            <a href="#" className="hover:text-blue-700">
              Community
            </a>
            <a href="#" className="hover:text-blue-700">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* <!-- Input Container --> */}
        <div className="flex flex-col justify-between">
          <form>
            <div className="flex space-x-3">
              <input
                type="text"
                className="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Updated in your inbox"
              />
              <button className="px-6 py-2 text-white rounded-full bg-red-500 hover:bg-red-300 focus:outline-none">
                Go
              </button>
            </div>
          </form>
          <div className="hidden text-white md:block">
            Copyright &copy; 2022, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Foot;
