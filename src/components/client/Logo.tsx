import onlineshopping from "@/assets/images/bag.png";


export const Logo = () => {
  return (
    <div className='flex items-center gap-2'>
      <img src={onlineshopping} alt="Marketflow" width={30} height={30}/>
      <h2 className="text-primary font-black text-3xl">MARKETFLOW</h2>
    </div>
  )
}