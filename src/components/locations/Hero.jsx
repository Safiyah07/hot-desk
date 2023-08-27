import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Hero1 from '../../assets/membership/hero1.jpg'
import Hero2 from '../../assets/membership/hero2.jpg'
import Hero3 from '../../assets/membership/hero3.jpg'
import Hero4 from '../../assets/membership/hero4.jpg'
import BlackButton from './../shared/BlackButton'

export default function Hero() {
	return (
		<>
			<div className='bg-gradient-to-br from-[#9294f0] via-white to-[#92f0ce] w-full py-20'>
				<div className='lg:text-[84px] md:text-[40px] sm:text-[25px] font-extrabold text-black uppercase  flex justify-center flex-col items-center'>
					
						<h2>
							<div className='flex items-center justify-center gap-3 pb-3'>
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
									4
								</motion.div>
								<motion.div
									initial={{ opacity: 0 }}
									viewport={{ once: false }}
									animate={{ opacity: 1 }}
									mode='wait'
									transition={{ duration: 1, delay: 0.5 }}
									className='px-4 bg-white border-4 border-black sm:border-2'
								>
									Locations
								</motion.div>
							</div>
							<div className='flex justify-center gap-3 pb-3 '>
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
									Hawthorn
								</motion.div>
								<motion.div
									initial={{ opacity: 0 }}
									viewport={{ once: false }}
									animate={{ opacity: 1 }}
									mode='wait'
									transition={{ duration: 1, delay: 0.5 }}
									className='px-4 md:hidden sm:hidden'
								>
									<img
										src={Hero1}
										alt=''
										className='border-4 border-black sm:border-2 w-32 rounded-[50%]'
									/>
								</motion.div>
							</div>
							<div className='flex justify-center gap-3 pb-3 lg:items-center'>
								<motion.div
									className='px-4 md:hidden sm:hidden'
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
									<img
										src={Hero2}
										alt=''
										className='h-32 border-4 border-black rounded-full sm:border-2 w-52'
									/>
								</motion.div>
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
									Richmond
								</motion.div>
							</div>

							<div className='flex justify-center gap-3 pb-3'>
								<motion.div
									initial={{ opacity: 0 }}
									viewport={{ once: false }}
									animate={{ opacity: 1 }}
									mode='wait'
									transition={{ duration: 1, delay: 0.7 }}
									className='px-4 bg-white border-4 border-black sm:border-2'
								>
									South Yarra
								</motion.div>
								<motion.div
									initial={{ opacity: 0 }}
									viewport={{ once: false }}
									animate={{ opacity: 1 }}
									mode='wait'
									transition={{ duration: 1, delay: 0.9 }}
									className='px-4 md:hidden sm:hidden'
								>
									<img
										src={Hero3}
										alt=''
										className='border-4 border-black sm:border-2 w-32 h-32 rounded-[50%]'
									/>
								</motion.div>
							</div>
							<div className='flex items-center justify-center gap-3'>
								<motion.div
									initial={{ opacity: 0 }}
									viewport={{ once: false }}
									animate={{ opacity: 1 }}
									mode='wait'
									transition={{ duration: 1, delay: 0.9 }}
									className='px-4 md:hidden sm:hidden'
								>
									<img
										src={Hero4}
										alt=''
										className='h-32 border-4 border-black rounded-full sm:border-2 w-52'
									/>
								</motion.div>
								<motion.div
									initial={{ opacity: 0 }}
									viewport={{ once: false }}
									animate={{ opacity: 1 }}
									mode='wait'
									transition={{ duration: 1, delay: 0.7 }}
									className='px-4 bg-white border-4 border-black sm:border-2'
								>
									Windsor
								</motion.div>
							</div>
						</h2>

						<div className='flex flex-col items-center gap-6 py-6 sm:gap-4'>
								<a
									href='#solo'
									className=''
								>
									<BlackButton>Explore Locations</BlackButton>
								</a>

							<p className='text-2xl normal-case md:text-xl sm:text-lg'>
								or {''}
								<Link
									to='/book-tour'
									className='underline font-bolder'
								>
									Book a Tour
								</Link>
							</p>
						</div>
				</div>
			</div>
		</>
	)
}
