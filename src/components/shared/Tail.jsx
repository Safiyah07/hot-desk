import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import whiteLogo from '../../assets/white-logo.svg'
import { Link } from 'react-router-dom'
import { FaAngleUp } from 'react-icons/fa6'
import { useEffect, useState } from 'react'

export default function Tail() {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.3,
	})

	const footerYear = new Date().getFullYear()

	const [scrollValue, setScrollValue] = useState(false)
	useEffect(() => {
		const showArrow = () => {
			if (window.scrollY >= 100) {
				setScrollValue(true)
			} else {
				setScrollValue(false)
			}
		}

		window.addEventListener('scroll', showArrow)

		return () => window.removeEventListener('scroll', showArrow)
	}, [])

	return (
		<>
			<div ref={ref} className='bg-black'>
				<div className='flex pt-32 pb-24 text-5xl text-white px-7 md:px-6 md:flex-col sm:flex-col gap-44 md:gap-16 sm:gap-12 sm:px-5'>
					<Link to='/'>
						<img
							src={whiteLogo}
							alt=''
						/>
					</Link>
					<h2 className='text-[50px] md:text-[45px] sm:text-[20px] uppercase font-extrabold'>
						<div className='flex gap-4 sm:gap-2'>
							<motion.div
								className='px-4 py-3 text-white border-4 border-white sm:border-2'
								initial={{ opacity: 0 }}
								animate={{ opacity: inView ? 1 : 0 }}
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
								animate={{ opacity: inView ? 1 : 0 }}
								transition={{ duration: 1, delay: 0.5 }}
								className='px-4 py-3 text-white border-4 border-white sm:border-2'
							>
								for
							</motion.div>
						</div>

						<div className='flex gap-4 py-4 sm:gap-2 sm:py-2'>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: inView ? 1 : 0 }}
								transition={{ duration: 1, delay: 0.7 }}
								className='px-4 py-3 text-white border-4 border-white sm:border-2'
							>
								your
							</motion.div>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: inView ? 1 : 0 }}
								transition={{ duration: 1, delay: 0.9 }}
								className='px-4 py-3 text-white border-4 border-white sm:border-2'
							>
								next move.
							</motion.div>
						</div>
					</h2>
				</div>
				<hr
					className='mx-7'
					style={{ color: '#726e6e' }}
				/>
				<footer className='pt-24'>
					<div className='flex gap-20 text-lg font-extrabold px-7 lg:text-2xl md:gap-10 sm:px-5 sm:flex-col'>
						<div className='w-[30%] text-white'>
							<h2 className='mb-10 uppercase sm:mb-5'>Contact</h2>
							<p>
								1091 York Street <br /> Prahran <br /> Victoria, 3141
							</p>
							<br />
							<a href='mailto:contact@hotdesk.io'>contact@hotdesk.io</a>
							<br />
							<a href='tel:+(03) 93817 1725'>(03) 93817 1725</a>
						</div>
						<div className='w-[30%]'>
							<h2 className='mb-10 text-white uppercase sm:mb-5'>Navigate</h2>
							<ul className='text-[#726e6e]'>
								<li className='transition ease-in-out hover:text-white'>
									<a href='/locations'>Locations</a>
								</li>
								<li className='transition ease-in-out hover:text-white'>
									<a href='/memberships'>Memberships</a>
								</li>
								<li className='transition ease-in-out hover:text-white'>
									<a href='/facilities'>Facilities</a>
								</li>
								<li className='transition ease-in-out hover:text-white'>
									<a href='/blog'>Blog</a>
								</li>
								<li className='transition ease-in-out hover:text-white'>
									<a href='/book-tour'>Book a tour</a>
								</li>
								<li className='transition ease-in-out hover:text-white'>
									<a href='/contact'>Contact</a>
								</li>
								<li className='transition ease-in-out hover:text-white'>
									<a href='/about'>About us</a>
								</li>
							</ul>
						</div>
						<div className='lg:w-[35%] font-extrabold mb-20'>
							<h2 className='mb-10 text-white uppercase sm:mb-5'>Template</h2>
							<ul className='text-[#726e6e] font-extrabold'>
								<li className='transition ease-in-out hover:text-white'>
									<a href='/facilities'>Facilities</a>
								</li>
								<li className='transition ease-in-out hover:text-white'>
									<a href='/blog'>Blog</a>
								</li>
								<li className='transition ease-in-out hover:text-white'>
									<a href='/book-tour'>Book a tour</a>
								</li>
								<li className='transition ease-in-out hover:text-white'>
									<a href='/contact'>Contact</a>
								</li>
								<li className='transition ease-in-out hover:text-white'>
									<a href='/about'>About us</a>
								</li>
							</ul>
						</div>
					</div>

					<p className='lg:pt-12 md:pt-12 px-4 pb-5 text-base text-[#726e6e] font-extrabold'>
						{' '}
						Copyright &copy; {footerYear} All rights reserved
					</p>

					<div className={scrollValue ? 'w-[30px]' : 'hidden'}>
						<a
							href='#top'
							className='fixed z-50 p-3 transition ease-in-out bg-white rounded-full bottom-5 right-5'
						>
							<FaAngleUp
								color='#000'
								size={20}
							/>
						</a>
					</div>
				</footer>
			</div>
		</>
	)
}
