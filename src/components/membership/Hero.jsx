import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import Hero1 from '../../assets/membership/hero1.jpg'
import Hero2 from '../../assets/membership/hero2.jpg'
import Hero3 from '../../assets/membership/hero3.jpg'
import Hero4 from '../../assets/membership/hero4.jpg'
import BlackButton from './../shared/BlackButton'

export default function Hero() {
	return (
		<>
			<div className='bg-gradient-to-bl from-[#92f0ce] via-white to-[#9294f0] w-full py-20'>
				<div className='lg:text-[84px] md:text-[40px] sm:text-[30px] font-extrabold text-black uppercase  flex justify-center flex-col items-center'>
					<AnimatePresence>
						<h2 className=''>
							<div className='flex justify-center gap-3 pb-3'>
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
									On-Demand
								</motion.div>
								<motion.div
									initial={{ opacity: 0 }}
									viewport={{ once: false }}
									animate={{ opacity: 1 }}
									mode='wait'
									transition={{ duration: 1, delay: 0.5 }}
									className='px-4'
								>
									<img
										src={Hero1}
										alt=''
										className='border-4 border-black sm:border-2 w-[130px] rounded-[50%]'
									/>
								</motion.div>
							</div>
							<div className='flex items-center justify-center gap-3 pb-3'>
								<motion.div
									className='px-4'
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
										className='border-4 border-black sm:border-2 w-[200px] h-[130px] rounded-full'
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
									Options
								</motion.div>
								<motion.div
									initial={{ opacity: 0 }}
									viewport={{ once: false }}
									animate={{ opacity: 1 }}
									mode='wait'
									transition={{ duration: 1, delay: 0.5 }}
									className='px-4 bg-white border-4 border-black sm:border-2'
								>
									For
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
									Teams
								</motion.div>
								<motion.div
									initial={{ opacity: 0 }}
									viewport={{ once: false }}
									animate={{ opacity: 1 }}
									mode='wait'
									transition={{ duration: 1, delay: 0.9 }}
									className='px-4 bg-white border-4 border-black sm:border-2'
								>
									of
								</motion.div>
								<motion.div
									initial={{ opacity: 0 }}
									viewport={{ once: false }}
									animate={{ opacity: 1 }}
									mode='wait'
									transition={{ duration: 1, delay: 0.9 }}
									className='px-4'
								>
									<img
										src={Hero3}
										alt=''
										className='border-4 border-black sm:border-2 w-[130px] h-[130px] rounded-[50%]'
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
									className='px-4'
								>
									<img
										src={Hero4}
										alt=''
										className='border-4 border-black sm:border-2 w-[200px] h-[130px] rounded-full'
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
									All Sizes.
								</motion.div>
							</div>
						</h2>

						<div className='flex flex-col items-center gap-6 py-6'>
							<div className='flex gap-6'>
								<a
									href='#solo'
									className=''
								>
									<BlackButton>Solo Options</BlackButton>
								</a>

								<a
									href='#team'
									className=''
								>
									<BlackButton>Team Options</BlackButton>
								</a>
							</div>

							<p className='text-2xl normal-case '>
								or {''}
								<Link
									to='/book-tour'
									className='underline font-bolder'
								>
									Book a Tour
								</Link>
							</p>
						</div>
					</AnimatePresence>
				</div>
			</div>
		</>
	)
}
