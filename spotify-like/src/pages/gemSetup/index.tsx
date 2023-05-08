import Gem from "@/components/si-gem";
import Navigation from "@/components/main-navigation";

let fireTrap = [
  "fire trap",
  "trap and mine damage",
  "swift affliction support",

  "cruelty support",
  "empower support",
  "burning damage support",
  "reduced mana",

  "chance to ignite",
  "efficacy support",
  "controlled destruction",
  "ignite prolif",
];

let flameWall = [
  "flame wall",
  "elemental focus support",
  "efficacy support",
  "controlled destruction",
];
let holyFlameTotem = [
  "Holy Flame Totem",
  "Fire Penetration Support",
  "elemental focus support",
  "faster casting",
  "added fire damage",
];

let utility = [
  "flame dash",
  "flammability",
  "wave of conviction",
  "steelskin",
  "cwdt",
  "summon skitterbots",
];
let frostBlink = ["frostblink", "combustion", "ignite prolif", "cold to fire"];

const fireTrapUP = fireTrap.map((e) => <Gem name={e} key={e} />);
const flameWallUP = flameWall.map((e) => <Gem name={e} key={e} />);
const holyFlameTotemUP = holyFlameTotem.map((e) => <Gem name={e} key={e} />);
const utilityUP = utility.map((e) => <Gem name={e} key={e} />);
const frostBlinkUP = frostBlink.map((e) => <Gem name={e} key={e} />);

let GemArr = () => (
  <>
    <Navigation />
    <div className="flex flex-row w-full m-auto bg-slate-600 justify-around h-screen">
      <div>
        <p className="text-white my-8">Fire Trap:</p>
        {fireTrapUP}
      </div>
      <div>
        <div>
          <p className="text-white my-8">Flame Wall:</p>
          {flameWallUP}
        </div>
        <div>
          <p className="text-white my-8">Holy Flame Totem:</p>
          {holyFlameTotemUP}
        </div>
      </div>
      <div>
        <p className="text-white my-8">Utility:</p>
        {utilityUP}
        <p className="text-white my-8">Mobility:</p>
        {frostBlinkUP}
      </div>
    </div>
  </>
);

export default GemArr;
