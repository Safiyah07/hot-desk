/* eslint-disable react/no-unescaped-entities */
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import Luminous from '../../assets/LuminousDark.svg'
import LogoIpsum from '../../assets/LogoIpsumDark.svg'
import Rise from '../../assets/RiseDark.svg'
import LogoIpsumStaff from '../../assets/LogoIpsumStaff.jpg'
import LuminousStaff from '../../assets/LuminousStaff.jpg'
import RiseStaff from '../../assets/RiseStaff.jpg'

export const Testimonials = () => {
	const testimonialSection = [
		{
			id: 1,
			logo: Luminous,
			message:
				'We found the opportunity to hit the ground running with minimal overheads was great. Having a huge variety of facilities at our fingertips has empowered the team to do better work.',
			name: 'Lisa Anderson',
			position: 'Luminous Group',
			image: LuminousStaff,
		},
		{
			id: 2,
			logo: LogoIpsum,
			message:
				"Hotdesk has been a lifesaver for me as a remote worker. I was tired of working from home and needed a change of scenery, but didn't want the hassle of committing to a long-term lease",
			name: 'Andrew Simpson',
			position: 'Freelance Designer',
			image: LogoIpsumStaff,
		},
		{
			id: 3,
			logo: Rise,
			message:
				'Hotdesk has exceeded all our expectations. The staff are incredibly accommodating, and the space is always clean and well-maintained. We love the sense of community that exists here',
			name: 'Luke Phillips',
			position: 'Content Creator',
			image: RiseStaff,
		},
	]
	
	return (
		<>
			<div className='bg-white'>
				<div className='pb-20'>
					<Swiper
						modules={[Pagination]}
						spaceBetween={10}
						slidesPerView={1}
						loop={true}
						pagination={{ clickable: true }}
					>
						{testimonialSection.map((section) => (
							<SwiperSlide key={section.id}>
								<div className='flex md:flex-col sm:flex-col mx-10 w-80% border-4 bg-white mb-20 text-black border-black sm:border-none my-32 sm:my-10 lg:divide-x-4 lg:divide-black'>
									<div className='flex flex-col py-10 lg:px-10 md:px-10 md:items-center sm:items-center md:text-center sm:text-center'>
										<img
											src={section.logo}
											alt=''
											className='pb-20 w-44 sm:pb-10'
										/>
										<p className='pb-20 text-3xl font-extrabold md:text-xl sm:text-lg sm:pb-10'>
											“{section.message}”
										</p>
										<h2 className='text-xl font-extrabold uppercase md:text-xl sm:text-lg'>
											{section.name}
										</h2>
										<p className='text-lg font-extrabold md:text-md sm:text-lg'>
											{section.position}
										</p>
									</div>
									<div className='px-10 py-20 sm:flex sm:justify-center md:py-10 sm:py-0 sm:px-2 md:border-t-4 md:border-t-black sm:border-t-black sm:pb-10'>
										<img
											src={section.image}
											alt=''
											className='border-4 border-black rounded-[50%] md:w-1/2 sm:w-[90%] md:m-auto'
										/>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</>
	)
}
