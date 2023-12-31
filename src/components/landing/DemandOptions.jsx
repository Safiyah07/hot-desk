import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import WhiteButton from '../shared/WhiteButton'

export default function DemandOptions() {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.3,
	})

	return (
		<>
			<div className='flex flex-col py-10 font-extrabold text-white bg-black'>
				<h2 className='lg:text-[50px] md:text-[2rem] sm:text-xl font-black uppercase lg:w-[70%] m-auto text-center lg:bg-demandGraphic bg-no-repeat bg-[bottom_right_6rem] lg:px-20 px-32 sm:px-16 '>
					ON-DEMAND OPTIONS FOR TEAMS OF ALL SIZES.
				</h2>

				<div
					ref={ref}
					className='flex gap-20 px-32 py-20 md:flex-col sm:flex-col sm:py-12 lg:px-20 sm:px-5 '
				>
					<motion.div
						initial='hidden'
						viewport={{ once: true }}
						animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -40 }}
						transition={{ duration: 0.2 }}
						className='py-6 border-2 border-white lg:w-1/2'
					>
						<p className='lg:text-[54px] md:text-[2.5rem] sm:text-3xl font-black uppercase border-b-2 w-full px-10 pb-5'>
							Solo
						</p>
						<p className='px-10 py-6 text-2xl border-b-2 md:text-2xl sm:text-lg'>
							Workspace options to suit every demand with access to all centres
							and amenities.
						</p>
						<div className='flex border-b-2 py-6 px-5 text-xl font-extrabold md:text-xl sm:text-[16px]'>
							<p className='flex items-center w-auto h-12 px-5 mx-5 text-black bg-white rounded-3xl sm:px-4'>
								From $250/m
							</p>
							<p className='flex items-center w-40 h-12 p-5 text-black bg-white sm:w-24 rounded-3xl sm:p-4'>
								1+ User
							</p>
						</div>

						<div className='pt-6 m-auto w-[90%] text-center'>
							<Link
								to='/memberships'
								className='pt-6 m-auto w-[90%] text-center'
							>
								<WhiteButton> See Solo Plans</WhiteButton>
							</Link>
						</div>
					</motion.div>

					<motion.div
						initial='hidden'
						viewport={{ once: true }}
						animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 40 }}
						transition={{ duration: 0.2 }}
						className='py-6 border-2 border-white lg:w-1/2'
					>
						<p className='lg:text-[54px] md:text-[2.5rem] sm:text-3xl font-black uppercase border-b-2 w-full px-10 pb-5'>
							Team
						</p>
						<p className='px-10 py-6 text-2xl border-b-2 md:text-2xl sm:text-lg'>
							A coworking plan for your team to work when and where you want.
						</p>
						<div className='flex border-b-2 py-6 px-5 text-xl font-extrabold md:text-xl sm:text-[16px]'>
							<p className='flex items-center w-auto h-12 px-5 mx-5 text-black bg-white rounded-3xl sm:px-4'>
								From $750/m
							</p>
							<p className='flex items-center w-40 h-12 p-5 text-black bg-white sm:w-24 rounded-3xl sm:p-4'>
								3+ User
							</p>
						</div>

						<div className='pt-6 m-auto w-[90%] text-center'>
							<Link
								to='/memberships'
								className='pt-6 m-auto w-[90%] text-center'
							>
								<WhiteButton> See Team Plans</WhiteButton>
							</Link>
						</div>
					</motion.div>
				</div>
			</div>
		</>
	)
}
