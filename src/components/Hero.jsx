import HeroImage from '../assets/hero-img.jpg'
import Button from './shared/BlackButton'
import { motion } from 'framer-motion'

export default function Hero() {
	return (
		<>
			<div className=' flex uppercase'>
				<div className='bg-gradient-to-br from-[#92f0ce] via-white to-[#c7f092] md:w-full sm:w-full lg:w-1/2'>
					<div className='text-black flex flex-col justify-center items-center lg:py-10 md:py-24 sm:py-16 lg:hidden'>
						<h2 className='md:text-[40px] sm:text-[14px] uppercase text-black font-extrabold'>
							<div className='flex gap-2'>
								<motion.div
									className='bg-white border-4 sm:border-2 border-black px-4'
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{
										duration: 0.8,
										delay: 0.5,
										ease: [0, 0.71, 0.2, 1.01],
									}}
								>
									Space for
								</motion.div>
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 1, delay: 0.7 }}
									className='bg-white border-4 sm:border-2  border-black px-4'
								>
									your
								</motion.div>
							</div>

							<div className='flex gap-2 py-2'>
								<span className='bg-white border-4 sm:border-2  border-black px-4'>
									next
								</span>
								<span className='bg-white border-4 sm:border-2  border-black px-4'>
									big move.
								</span>
							</div>
						</h2>

						<div className='md:text-2xl sm:text-xl normal-case font-extrabold tracking-wide pt-8 text-center'>
							<p className='text-center'>
								Creative Co-Working Spaces in the <br /> heart of Melbourne.
							</p>
							<br />
							<h2 className='flex justify-center'>
								<Button>View Workspaces</Button>
							</h2>
							<br />
							<a className='md:text-xl sm:text-xl normal-case '>
								or {''}
								<span className='font-black underline cursor-pointer'>
									Book a Tour
								</span>
							</a>
						</div>
					</div>
				</div>
				<div className='w-1/2 md:hidden sm:hidden'>
					<img
						src={HeroImage}
						alt=''
					/>
				</div>
			</div>
			<div className='text-black lg:absolute top-[40%] left-6 md:hidden sm:hidden'>
				<h2 className='lg:text-[84px] uppercase text-black font-bold'>
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
