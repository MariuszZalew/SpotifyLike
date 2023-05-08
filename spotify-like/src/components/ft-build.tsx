import Image from "next/image";
import { useRouter } from "next/router";

let FireTrapBuild = () => {
  const router = useRouter();
  return (
    <div className="bg-gray-200">
      <div className="flex container m-auto pt-10 md:pt-0 flex-col-reverse md:flex-row">
        <div className="flex flex-col md:w-1/2 space-y-12 sm:space-y-6 lg:space-y-10 py-12  items-center">
          <h1 className="max-w-md text-4xl lg:text-5xl font-bold text-center px-4 ">
            Fire Trap Elementalist Build
          </h1>
          <p className="max-w-md text-center text-gray-600 px-4">
            A build for an Elementalist that deals massive Burning Damage using
            Fire Traps
          </p>
          <button
            className="p-3 px-6 pt-2 text-white bg-red-600 rounded-full hover:bg-red-500"
            onClick={(e) => router.push("/gemSetup")}
          >
            Get started
          </button>
        </div>
        <div className="flex flex-col md:w-1/2 justify-center items-center my-2">
          <Image
            className="rounded-xl"
            src="/PoE/fire-trap-ele2.jpg"
            alt="Fire Trap Elementaist"
            width={450}
            height={450}
          />
        </div>
      </div>
    </div>
  );
};
export default FireTrapBuild;
