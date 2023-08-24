/* eslint-disable react/no-unescaped-entities */
import { Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import Luminous from '../../assets/LuminousDark.svg'
import LogoIpsum from '../../assets/LogoIpsumDark.svg'
import Rise from '../../assets/RiseDark.svg'
import LogoIpsumStaff from '../../assets/LogoIpsumStaff.jpg'
import LuminousStaff from '../../assets/LuminousStaff.jpg'
import RiseStaff from '../../assets/RiseStaff.jpg'

export const ImageSlider = () => {
	return (
		<>
			<Swiper
				modules={[Autoplay, Pagination]}
				spaceBetween={10} 
				slidesPerView={1}
				loop={true}
				autoplay={{ delay: 3000 }} 
				pagination={{ clickable: true }}
			>
				<SwiperSlide>
					<div className='flex md:flex-col sm:flex-col mx-10 w-80% border-4 text-black border-black sm:border-none mt-32 sm:my-10 lg:mx-20 lg:divide-x-4 lg:divide-black'>
						<div className='flex flex-col px-12 py-10 sm:px-0'>
							<img
								src={Luminous}
								alt=''
								className='pb-20 w-44 sm:pb-10'
							/>
							<p className='pb-20 text-3xl font-extrabold md:text-xl sm:text-lg sm:pb-10'>
								“We found the opportunity to hit the ground running with minimal
								overheads was great. Having a huge variety of facilities at our
								fingertips has empowered the team to do better work.”
							</p>
							<h2 className='text-xl font-extrabold md:text-xl sm:text-lg'>
								LISA ANDERSON
							</h2>
							<p className='text-lg font-extrabold md:text-md sm:text-lg'>
								Luminous Group
							</p>
						</div>
						<div className='px-10 py-20 md:py-10 sm:py-0 sm:px-2 md:border-t-4 md:border-t-black sm:border-t-black'>
							<img
								src={LuminousStaff}
								alt=''
								className='border-4 border-black rounded-[50%] md:w-1/2 md:m-auto'
							/>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='flex md:flex-col sm:flex-col mx-10 w-80% border-4 text-black border-black sm:border-none my-32 sm:my-10 lg:mx-20 lg:divide-x-4 lg:divide-black'>
						<div className='flex flex-col px-12 py-10 sm:px-0'>
							<img
								src={LogoIpsum}
								alt=''
								className='pb-20 w-44'
							/>
							<p className='pb-20 text-3xl font-extrabold md:text-xl sm:text-lg sm:pb-10'>
								“Hotdesk has been a lifesaver for me as a remote worker. I was
								tired of working from home and needed a change of scenery, but
								didn't want the hassle of committing to a long-term lease”
							</p>
							<h2 className='text-xl font-extrabold md:text-xl sm:text-lg'>
								ANDREW SIMPSON
							</h2>
							<p className='text-lg font-extrabold md:text-md sm:text-lg'>
								Freelance Designer
							</p>
						</div>
						<div className='px-10 py-20 md:py-10 sm:py-0 sm:px-2 md:border-t-4 md:border-t-black sm:border-t-black'>
							<img
								src={LogoIpsumStaff}
								alt=''
								className='border-4 border-black rounded-[50%] md:w-1/2 md:m-auto'
							/>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='flex md:flex-col sm:flex-col mx-10 w-80% border-4 text-black border-black sm:border-none my-32 sm:my-10 lg:mx-20 lg:divide-x-4 lg:divide-black'>
						<div className='flex flex-col px-12 py-10 sm:px-0'>
							<img
								src={Rise}
								alt=''
								className='pb-20 w-44'
							/>
							<p className='pb-20 text-3xl font-extrabold md:text-xl sm:text-lg sm:pb-10'>
								“Hotdesk has exceeded all our expectations. The staff are
								incredibly accommodating, and the space is always clean and
								well-maintained. We love the sense of community that exists
								here.”
							</p>
							<h2 className='text-xl font-extrabold md:text-xl sm:text-lg'>
								LUKE PHILLIPS
							</h2>
							<p className='text-lg font-extrabold md:text-md sm:text-lg'>
								Content Creator
							</p>
						</div>
						<div className='px-10 py-20 md:py-10 sm:py-0 sm:px-2 md:border-t-4 md:border-t-black sm:border-t-black'>
							<img
								src={RiseStaff}
								alt=''
								className='border-4 border-black rounded-[50%] md:w-1/2 md:m-auto'
							/>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	)
}
