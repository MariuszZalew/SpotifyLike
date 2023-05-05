import { useState } from "react";

let Hamburger = ({ active, changeActive }) => {
  // const [isActive, setActive] = useState(true);

  return (
    <>
      <button
        className={
          active
            ? "open hamburger md:hidden focus:outline-none"
            : "hamburger md:hidden focus:outline-none "
        }
        onClick={changeActive}
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>
    </>
  );
};

export default Hamburger;
