import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import HeroImage from '../../assets/landing/hero-img.jpg'
import Button from '../shared/BlackButton'

export default function Hero() {
	return (
		<>
			<div className='flex font-bold text-black uppercase '>
				<div className=' bg-gradient-to-br from-[#92f0ce] via-white to-[#c7f092] md:w-full sm:w-full lg:w-1/2'>
					<div className='flex flex-col justify-center sm:items-center md:items-center lg:py-10 md:py-24 sm:py-16 lg:absolute lg:top-[40%] lg:left-6'>
						<h2 className='lg:text-[84px] md:text-[40px] sm:text-[30px] uppercase '>
							<div className='flex gap-2'>
								<motion.div
									className='px-4 bg-white border-4 border-black sm:border-2'
									initial={{ opacity: 0 }}
									viewport={{ once: false }}
									animate={{ opacity: 1 }}
									mode='wait'
									transition={{
										duration: 0.8,
										delay: 0.3,
										ease: [0, 0.71, 0.2, 1.01],
									}}
								>
									Space for
								</motion.div>
								<motion.div
									initial={{ opacity: 0 }}
									viewport={{ once: false }}
									animate={{ opacity: 1 }}
									mode='wait'
									transition={{ duration: 1, delay: 0.5 }}
									className='px-4 bg-white border-4 border-black sm:border-2'
								>
									your
								</motion.div>
							</div>

							<div className='flex gap-2 py-2'>
								<motion.div
									initial={{ opacity: 0 }}
									viewport={{ once: false }}
									animate={{ opacity: 1 }}
									mode='wait'
									transition={{ duration: 1, delay: 0.7 }}
									className='px-4 bg-white border-4 border-black sm:border-2'
								>
									next
								</motion.div>
								<motion.div
									initial={{ opacity: 0 }}
									viewport={{ once: false }}
									animate={{ opacity: 1 }}
									mode='wait'
									transition={{ duration: 1, delay: 0.9 }}
									className='px-4 bg-white border-4 border-black sm:border-2'
								>
									big move.
								</motion.div>
							</div>
						</h2>

						<div className='pt-8 tracking-wide normal-case md:text-center sm:text-center lg:text-3xl md:text-2xl sm:text-xl'>
							<p className='md:text-center sm:text-center lg:leading-relaxed'>
								Creative Co-Working Spaces in the <br /> heart of Melbourne.
							</p>
							<br />
							<h2 className='flex justify-center lg:block lg:w-fit'>
								<Link to='/facilities'>
									<Button>View Workspaces</Button>
								</Link>
							</h2>
							<br />
							<span className='normal-case lg:text-2xl md:text-xl sm:text-xl'>
								or {''}
								<Link
									to='book-tour'
									className='underline'
								>
									Book a Tour
								</Link>
							</span>
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
		</>
	)
}
