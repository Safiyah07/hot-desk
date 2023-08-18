import Luminous from '../assets/LuminousDark.svg'
import LogoIpsum from '../assets/LogoIpsumDark.svg'
import Rise from '../assets/RiseDark.svg'
import LogoIpsumStaff from '../assets/LogoIpsumStaff.jpg'
import LuminousStaff from '../assets/LuminousStaff.jpg'
import RiseStaff from '../assets/RiseStaff.jpg'

export default function ImageSlider() {
	return (
		<>
			<div className='flex border-4 text-black border-black my-32 mx-10 divide-x-4 divide-black'>
				<div className='flex flex-col py-10 px-12'>
					<img
						src={Luminous}
						alt=''
						className='w-44 pb-20'
					/>
					<p className='text-3xl md:text-xl sm:text-lg font-extrabold pb-20'>
						“We found the opportunity to hit the ground running with minimal
						overheads was great. Having a huge variety of facilities at our
						fingertips has empowered the team to do better work.”
					</p>
					<h2 className='text-xl md:text-xl sm:text-lg font-extrabold'>
						LISA ANDERSON
					</h2>
					<p className='text-lg md:text-md sm:text-lg font-extrabold'>
						Luminous Group
					</p>
				</div>
				<div className='py-20 px-10'>
					<img
						src={LuminousStaff}
						alt=''
						className='border-4 border-black rounded-[50%]'
					/>
				</div>
			</div>
			{/* <div className='flex border-4 text-black border-black my-32 mx-10 divide-x-4 divide-black'>
				<div className='flex flex-col py-10 px-12'>
					<img
						src={LogoIpsum}
						alt=''
						className='w-44 pb-20'
					/>
					<p className='text-3xl md:text-xl sm:text-lg font-extrabold pb-20'>
						“Hotdesk has been a lifesaver for me as a remote worker. I was tired
						of working from home and needed a change of scenery, but didn't want
						the hassle of committing to a long-term lease”
					</p>
					<h2 className='text-xl md:text-xl sm:text-lg font-extrabold'>
						ANDREW SIMPSON
					</h2>
					<p className='text-lg md:text-md sm:text-lg font-extrabold'>
						Freelance Designer
					</p>
				</div>
				<div className='py-20 px-10'>
					<img
						src={LogoIpsumStaff}
						alt=''
						className='border-4 border-black rounded-[50%]'
					/>
				</div>
			</div> */}
			{/* <div className='flex border-4 text-black border-black my-32 mx-10 divide-x-4 divide-black'>
				<div className='flex flex-col py-10 px-12'>
					<img
						src={Rise}
						alt=''
						className='w-44 pb-20'
					/>
					<p className='text-3xl md:text-xl sm:text-lg font-extrabold pb-20'>
						“Hotdesk has exceeded all our expectations. The staff are incredibly
						accommodating, and the space is always clean and well-maintained. We
						love the sense of community that exists here.”
					</p>
					<h2 className='text-xl md:text-xl sm:text-lg font-extrabold'>
						LUKE PHILLIPS
					</h2>
					<p className='text-lg md:text-md sm:text-lg font-extrabold'>
						Content Creator
					</p>
				</div>
				<div className='py-20 px-10'>
					<img
						src={RiseStaff}
						alt=''
						className='border-4 border-black rounded-[50%]'
					/>
				</div>
			</div> */}
		</>
	)
}
