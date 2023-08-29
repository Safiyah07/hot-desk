import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Button from '../shared/BlackButton'
import BodyImage1 from '../../assets/landing/bodyImage1.jpg'

export default function Body() {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.3,
	})

	return (
		<>
			<div className='flex uppercase md:flex-col sm:flex-col'>
				<div className='md:w-full sm:w-full lg:w-1/2'>
					<div className='px-12 text-black md:px-20 sm:px-5 lg:py-10 md:py-16 sm:py-10'>
						<div>
							<h2 className='text-[21px] md:text-[16px] sm:text-[16px] lg:pb-32 uppercase text-black font-extrabold'>
								Hot Desk Your Way
							</h2>
						</div>

						<div className='pt-8 font-bold normal-case md:text-2xl sm:text-xl '>
							<h2 className='lg:text-[54px] lg:text-5xl lg:pb-32 '>
								SILENT OR BUZZING. SPACES FOR EVERY VIBE.
							</h2>
							<br />
							<p className='normal-case lg:text-2xl md:text-xl sm:text-lg lg:pb-20 md:pb-10 sm:pb-10'>
								At Hotdesk, we have spaces for everyone to do their best work –
								whether that’s amongst buzzing activity or tucked away in a cozy
								nook.
							</p>
							<Link to='/memberships'>
								<h2 className='flex'>
									<Button>See Memberships</Button>
								</h2>
							</Link>
							<br />
						</div>
					</div>
				</div>
				<div
					ref={ref}
					className='bg-gradient-to-bl from-[#9492f0] via-white to-[#92f0ce] flex justify-center lg:w-1/2 lg:py-48 md:py-10 sm:py-10 sm:px-10'
				>
					<motion.div
						initial='hidden'
						viewport={{ once: true }}
						animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 40 }}
						transition={{ duration: 0.2 }}
					>
						<img
							src={BodyImage1}
							alt=''
							className='m-auto sm:[w-45%] rounded-full border-4 border-black'
						/>
					</motion.div>
				</div>
			</div>
		</>
	)
}
