import { motion } from 'framer-motion'

export default function Footer() {
	return (
		<>
			<div className='text-white bg-black'>
        hjghygufyf
				<h2 className='md:text-[40px] sm:text-[30px] uppercase font-extrabold'>
					<div className='flex gap-2'>
						<motion.div
							className='px-4 bg-white border-4 border-black sm:border-2'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
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
							animate={{ opacity: 1 }}
							transition={{ duration: 1, delay: 0.5 }}
							className='px-4 bg-white border-4 border-black sm:border-2'
						>
							your
						</motion.div>
					</div>

					<div className='flex gap-2 py-2'>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1, delay: 0.7 }}
							className='px-4 bg-white border-4 border-black sm:border-2'
						>
							next
						</motion.div>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1, delay: 0.9 }}
							className='px-4 bg-white border-4 border-black sm:border-2'
						>
							big move.
						</motion.div>
					</div>
				</h2>
			</div>
		</>
	)
}
