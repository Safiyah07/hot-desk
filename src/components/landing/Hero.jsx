import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import HeroImage from '../../assets/hero-img.jpg'
import Button from '../shared/BlackButton'

export default function Hero() {
	const fadeInVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { duration: 1 } },
	}

	// const fadeInHero = [
	// 	{
	// 		id: 1,
	// 		info: 'space for',
	// 	},
	// 	{
	// 		id: 2,
	// 		info: 'your',
	// 	},
	// 	{
	// 		id: 3,
	// 		info: 'next',
	// 	},
	// 	{
	// 		id: 4,
	// 		info: 'big',
	// 	},
	// 	{
	// 		id: 5,
	// 		info: 'move',
	// 	},
	// ]

	return (
		<>
			<div className='flex uppercase'>
				<div className='bg-gradient-to-br from-[#92f0ce] via-white to-[#c7f092] md:w-full sm:w-full lg:w-1/2'>
					<div className='flex flex-col items-center justify-center text-black lg:py-10 md:py-24 sm:py-16 lg:hidden'>
						<h2 className='md:text-[40px] sm:text-[30px] uppercase text-black font-extrabold'>
							<AnimatePresence>
								<div className='flex gap-2'>
									{/* {fadeInHero.map((info) => (
										<>
										<motion.div
										key={info.id}
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
										{info}
									</motion.div>
										</>
									))} */}
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
							</AnimatePresence>
						</h2>

						<div className='pt-8 font-extrabold tracking-wide text-center normal-case md:text-2xl sm:text-xl'>
							<p className='text-center'>
								Creative Co-Working Spaces in the <br /> heart of Melbourne.
							</p>
							<br />
							<Link to='/facilities'>
								<h2 className='flex justify-center'>
									<Button>View Workspaces</Button>
								</h2>
							</Link>
							<br />
							<Link
								to='book-tour'
								className='normal-case md:text-xl sm:text-xl '
							>
								or {''}
								<span className='font-black underline cursor-pointer'>
									Book a Tour
								</span>
							</Link>
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
						<span className='px-4 bg-white border-4 border-black '>
							Space for
						</span>
						<span className='px-4 bg-white border-4 border-black'>your</span>
					</div>

					<div className='flex gap-2 py-2'>
						<span className='px-4 bg-white border-4 border-black'>next</span>
						<span className='px-4 bg-white border-4 border-black'>
							big move.
						</span>
					</div>
				</h2>

				<div className='pt-8 text-3xl font-bold tracking-wide'>
					<br />
					<p className='leading-relaxed'>
						Creative Co-Working Spaces <br /> in the heart of Melbourne.
					</p>
					<br />
					<Link to='/facilities'>
					
					<div className='w-fit'>
						<Button>View Workspaces</Button>
					</div>
					</Link>
					<br />
					<p className='text-2xl normal-case '>
						or {''}
						<Link to='/book-tour' className='underline font-bolder'>Book a Tour</Link>
					</p>
				</div>
			</div>
		</>
	)
}
