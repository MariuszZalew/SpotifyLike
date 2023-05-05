import Image from "next/image";
import Navigation from "./main-navigation";

let Gem = ({ name }) => (
  <div className="flex items-center ">
    <Image
      src={`/PoE/${name}.png`}
      alt={`${name}`}
      className="dark:invert"
      width={80}
      height={80}
      priority
    />
    <p className="text-yellow-200 p-2 ">{name}</p>
  </div>
);

export default Gem;
