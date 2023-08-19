import { motion } from 'framer-motion'
import whiteLogo from '../assets/white-logo.svg'

export default function Tail() {
	return (
		<>
			<div className='flex px-12 py-10 text-5xl text-white bg-black gap-44 md:flex-col md:gap-16'>
				<div>
					<img
						src={whiteLogo}
						alt=''
					/>
				</div>
				<h2 className='text-[50px] md:text-[40px] sm:text-[30px] uppercase text-black font-extrabold'>
					<div className='flex gap-2'>
						<motion.div
							className='px-4 text-white border-4 border-white sm:border-2'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{
								duration: 0.8,
								delay: 0.3,
								ease: [0, 0.71, 0.2, 1.01],
							}}
						>
							Workspace
						</motion.div>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1, delay: 0.5 }}
							className='px-4 text-white border-4 border-white sm:border-2'
						>
							for
						</motion.div>
					</div>

					<div className='flex gap-2 py-2'>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1, delay: 0.7 }}
							className='px-4 text-white border-4 border-white sm:border-2'
						>
							your
						</motion.div>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1, delay: 0.9 }}
							className='px-4 text-white border-4 border-white sm:border-2'
						>
							next move.
						</motion.div>
					</div>
				</h2>
			</div>
		</>
	)
}
