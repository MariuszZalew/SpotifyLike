import Image from 'next/image'
let Mememe = () => <div>
    just some example text
<Image
    src="/Legendary_Hero_P.webp"
    alt="mememe"
    width={400}
    height={200}
    priority
/>
<Image
    src="/Decal-Raging_Bull_P.webp"
    alt="Vercel Logo"
    className="dark:invert"
    width={400}
    height={20}
    priority
/>
</div>
export default Mememe