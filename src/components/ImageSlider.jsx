import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Luminous from '../assets/LuminousDark.svg'
import LogoIpsum from '../assets/LogoIpsumDark.svg'
import Rise from '../assets/RiseDark.svg'
import LogoIpsumStaff from '../assets/LogoIpsumStaff.jpg'
import LuminousStaff from '../assets/LuminousStaff.jpg'
import RiseStaff from '../assets/RiseStaff.jpg'

export default function ImageSlider() {
	return (
		<>
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				// navigation
				pagination={{ clickable: true }}
				// scrollbar={{ draggable: true }}
				spaceBetween={50}
				slidesPerView={1}
			>
				<SwiperSlide>
					<div className='flex md:flex-col sm:flex-col mx-10 w-80% border-4 text-black border-black sm:border-none mt-32 sm:my-10 lg:mx-20 lg:divide-x-4 lg:divide-black'>
						<div className='flex flex-col py-10 px-12 sm:px-0'>
							<img
								src={Luminous}
								alt=''
								className='w-44 pb-20 sm:pb-10'
							/>
							<p className='text-3xl md:text-xl sm:text-lg font-extrabold pb-20 sm:pb-10'>
								“We found the opportunity to hit the ground running with minimal
								overheads was great. Having a huge variety of facilities at our
								fingertips has empowered the team to do better work.”
							</p>
							<h2 className='text-xl md:text-xl sm:text-lg font-extrabold'>
								LISA ANDERSON
							</h2>
							<p className='text-lg md:text-md sm:text-lg font-extrabold'>
								Luminous Group
							</p>
						</div>
						<div className='py-20 md:py-10 sm:py-0 sm:px-2 px-10 md:border-t-4 md:border-t-black sm:border-t-black'>
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
						<div className='flex flex-col py-10 px-12 sm:px-0'>
							<img
								src={LogoIpsum}
								alt=''
								className='w-44 pb-20'
							/>
							<p className='text-3xl md:text-xl sm:text-lg font-extrabold pb-20 sm:pb-10'>
								“Hotdesk has been a lifesaver for me as a remote worker. I was
								tired of working from home and needed a change of scenery, but
								didn't want the hassle of committing to a long-term lease”
							</p>
							<h2 className='text-xl md:text-xl sm:text-lg font-extrabold'>
								ANDREW SIMPSON
							</h2>
							<p className='text-lg md:text-md sm:text-lg font-extrabold'>
								Freelance Designer
							</p>
						</div>
						<div className='py-20 md:py-10 sm:py-0 sm:px-2 px-10 md:border-t-4 md:border-t-black sm:border-t-black'>
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
						<div className='flex flex-col py-10 px-12 sm:px-0'>
							<img
								src={Rise}
								alt=''
								className='w-44 pb-20'
							/>
							<p className='text-3xl md:text-xl sm:text-lg font-extrabold pb-20 sm:pb-10'>
								“Hotdesk has exceeded all our expectations. The staff are
								incredibly accommodating, and the space is always clean and
								well-maintained. We love the sense of community that exists
								here.”
							</p>
							<h2 className='text-xl md:text-xl sm:text-lg font-extrabold'>
								LUKE PHILLIPS
							</h2>
							<p className='text-lg md:text-md sm:text-lg font-extrabold'>
								Content Creator
							</p>
						</div>
						<div className='py-20 md:py-10 sm:py-0 sm:px-2 px-10 md:border-t-4 md:border-t-black sm:border-t-black'>
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
