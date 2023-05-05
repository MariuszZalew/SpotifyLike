import { useRouter } from "next/router";
import Link from "next/link";
let Desktop = () => {
  const router = useRouter();

  return (
    <>
      <div className="hidden md:flex space-x-8 lg:space-x-12 xl:space-x-20">
        {/* <a href="#" className="text-lg ">
          Steve
        </a> */}
        <Link href="/Steve">Steve</Link>
        <a href="#" className="text-lg">
          Gems
        </a>
        <a href="#" className="text-lg">
          Links
        </a>
        <a href="#" className="text-lg">
          Game
        </a>
      </div>
      <button
        className="hidden md:block p-3 px-6 pt-2 text-white bg-red-600 rounded-full ml-4 text-md"
        onClick={(e) => router.push("/gemSetup")}
      >
        Gem setup
      </button>
    </>
  );
};

export default Desktop;
