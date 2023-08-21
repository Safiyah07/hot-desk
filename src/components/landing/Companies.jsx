import Luminous from '../../assets/Luminous.svg'
import NLogo from '../../assets/NLogo.svg'
import LogoIpsum from '../../assets/LogoIpsum.svg'
import Shell from '../../assets/Shell.svg'
import Rise from '../../assets/Rise.svg'

export default function Companies() {
  return (
    <div className='flex flex-col text-white text-center py-24 bg-gradient-to-b from-[#222] to-[#000]'>
      <h2 className='lg:text-[45px] md:text-[1.8rem] sm:text-xl font-black uppercase lg:pb-20 pb-14 bg-GraphicUnderline bg-no-repeat lg:bg-[center_bottom_4rem] bg-[center_bottom_2rem]'>JOIN OVER 200 COMPANIES</h2>
      <div className="flex justify-center gap-24 md:flex-wrap sm:flex-wrap md:gap-16 sm:gap-16 sm:px-10 lg:pb-20 pb-14">
        <img src={Luminous} alt="" />
        <img src={NLogo} alt="" />
        <img src={LogoIpsum} alt="" />
        <img src={Shell} alt="" />
        <img src={Rise} alt="" />
      </div>
      <p className='text-3xl font-extrabold md:text-xl sm:text-lg'>They choose Hotdesk to get their best work done.</p>
    </div>
  )
}
