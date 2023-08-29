import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Button from '../shared/BlackButton'
import BodyImage2 from '../../assets/landing/bodyImage2.jpg'
import BodyImage3 from '../../assets/landing/bodyImage3.jpg'

export default function Body2() {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.3,
	})

	return (
		<>
			<div
				ref={ref}
				className='flex uppercase md:flex-col-reverse sm:flex-col-reverse'
			>
				<div className='lg:w-1/2 flex gap-4 justify-center items-center h-fit lg:pt-[12rem] lg:pb-[15rem] md:py-[7rem] sm:py-[4rem] bg-black overflow-hidden'>
					<motion.img
						initial='hidden'
						viewport={{ once: true }}
						animate={{ opacity: inView ? 1 : 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						src={BodyImage2}
						alt=''
						className='w-[70%] h-[70%] md:w-[55%] md:[h-55%] sm:[w-45%] sm:[h-45%] border-4 border-white'
					/>
					<motion.img
						initial='hidden'
						viewport={{ once: true }}
						animate={{ opacity: inView ? 1 : 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						src={BodyImage3}
						alt=''
						className='w-[70%] h-[70%] md:w-[55%] md:h-[55%] sm:[w-50%] sm:[h-50%] rounded-full border-4 border-white'
					/>
				</div>
				<div className='md:w-full sm:w-full lg:w-1/2'>
					<div className='px-12 text-black bg-white md:px-20 sm:px-5 lg:pt-10 md:py-16 sm:py-10'>
						<div>
							<h2 className='lg:text-[21px] md:text-[16px] lg:pb-32 sm:text-[16px]  uppercase text-black font-extrabold'>
								NOT JUST DESKS
							</h2>
						</div>

						<div className='pt-8 font-bold normal-case md:text-2xl sm:text-xl '>
							<h2 className='lg:text-[54px] lg:text-5xl lg:pb-24 '>
								CREATIVE SPACES FOR RECORDING, PERFORMANCE AND MORE.
							</h2>
							<br />
							<p className='normal-case lg:text-2xl md:text-xl sm:text-lg lg:pb-12 md:pb-10 sm:pb-10 '>
								At Hotdesk, we have spaces for everyone to do their best work –
								whether that’s amongst buzzing activity or tucked away in a cozy
								nook.
							</p>
							<Link to='/facilities'>
								<h2 className='flex'>
									<Button>Explore Facilities</Button>
								</h2>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
