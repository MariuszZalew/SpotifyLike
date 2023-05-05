import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/main-navigation";
import FireTrapBuild from "@/components/ft-build";
import FireTrapDesc from "@/components/ft-desc";
import FireTrapRecom from "@/components/ft-recom";
import Join from "@/components/ft-join";
import Foot from "@/components/ft-foot";

let Main = () => (
  <div>
    <Navigation />
    <FireTrapBuild />
    <FireTrapDesc />
    <FireTrapRecom />
    <Join />
    <Foot />

    {/* <ul>
      <li>
        dl repo !!- node version error -- try n !!- TRY nvm (windows) - just
        works{" "}
      </li>
      <li>
        optional catch all route - usage of links - css in _app - css modules :D
        -{" "}
      </li>
      <li>nvm list available - nvm install 16.20.0 - nvm use 16.20.0 !!</li>

      <li>typescript integration - next.js</li>
      <li>creating landing page with tailwind !</li>
      <li></li>
    </ul> */}
  </div>
);
export default Main;
