import FirstEx2 from "@/components/st-sec-ex";
import dynamic from "next/dynamic";

const FirstEx = dynamic(() => import("@/components/st-first-ex"), {
  ssr: false,
});

let me = [
  "big mall",
  "plan for bigger base ALWAYS!",
  "plan for development in every direction",
];

let lessons = [
  "changing this context",
  "acynchronus nature of react",
  "return null",
  "CSS modular in app, how to?",
  "function unit tests",
  "callback function in setState",
  "colacl storage code ...",
  "home work,  document.title, refactor",
  "state => render",
  "react hooks refactor",
  "experiment with code",
  "create custom Hook, just just like in thhe video",
  "new horizon",
];

let Steve01 = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <FirstEx step={3} max={30} />
      <FirstEx2 step={2} max={40} />
    </div>
  );
};
export default Steve01;
