import Image from "next/image";
import { useRouter } from "next/router";
import Desktop from "./main-desktop";
import Hamburger from "./main-hamburger";
import HamMenu from "./main-ham-menu";
import { useState } from "react";

let Navigation = () => {
  const router = useRouter();
  const [isActive, setActive] = useState(false);
  // const [ isGay, setGay] = useState(true);
  function changeAct() {
    return setActive(!isActive);
  }

  return (
    <nav className="relative container mx-auto px-6">
      <div className="flex items-center justify-between">
        <Image
          className="py-10 hover:cursor-pointer"
          src="/PoE/PoE.png"
          alt="PoE"
          width={160}
          height={160}
          onClick={(e) => router.push("/")}
        />
        <Desktop />
        <Hamburger active={isActive} changeActive={changeAct} />
        <HamMenu active={isActive} />
      </div>
    </nav>
  );
};

export default Navigation;
