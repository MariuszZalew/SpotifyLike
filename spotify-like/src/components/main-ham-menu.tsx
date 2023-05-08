// type active = boolean;

let HamMenu = (active) => {
  return (
    // <div className="hidden bg-yellow-400">
    //   <div className="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-gray-500 sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
    //   </div>
    // </div>
    <div
      className={
        active
          ? "bg-blue-500 md:hidden absolute left-[40%] top-40 flex flex-col items-center rounded-lg drop-shadow-md p-4 space-y-6"
          : "bg-red-600"
      }
    >
      <a href="#">Pricing</a>
      <a href="#">Product</a>
      <a href="#">About Us</a>
      <a href="#">Careers</a>
      <a href="#">Community</a>
    </div>
  );
};

export default HamMenu;
