import HeroImage from '../assets/hero-img.jpg'
import Button from './shared/button'

export default function Hero() {
	return (
		<>
			<div className=' flex uppercase'>
				<div className='bg-gradient-to-br from-[#92f0ce] via-white to-[#c7f092] w-1/2'>
					
				</div>
				<div className='w-1/2'>
					<img
						src={HeroImage}
						alt=''
					/>
				</div>
			</div>
			<div className='text-black absolute top-[40%] left-6'>
				<h2 className='text-[84px] uppercase text-black font-bold'>
					<div className='flex gap-2'>
						<span className='bg-white border-4 border-black px-4 '>
							Space for
						</span>
						<span className='bg-white border-4 border-black px-4'>your</span>
					</div>

					<div className='flex gap-2 py-2'>
						<span className='bg-white border-4 border-black px-4'>next</span>
						<span className='bg-white border-4 border-black px-4'>
							big move.
						</span>
					</div>
				</h2>

				<div className='text-3xl font-bold tracking-wide pt-8'>
					<br />
					<p className='leading-relaxed'>
						Creative Co-Working Spaces <br /> in the heart of Melbourne.
					</p>
					<br />
					<Button>
						<h2>View Workspaces</h2>
					</Button>
					<br />
					<p className='text-2xl normal-case '>
						or {''}
						<span className='font-bolder underline'>Book a Tour</span>
					</p>
				</div>
			</div>
		</>
	)
}
