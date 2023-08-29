import Hero1 from '../../assets/membership/hero1.jpg'
import Hero2 from '../../assets/membership/hero2.jpg'
import Hero3 from '../../assets/membership/hero3.jpg'
import Hero4 from '../../assets/membership/hero4.jpg'

export default function Section() {
	return (
		<>
			<section className='flex flex-col gap-20 py-20 font-extrabold text-black'>
				<div className='flex gap-2 px-10 m-auto md:flex-col sm:flex-col md:px-24 sm:px-5'>
					<div className='flex flex-col w-1/2 gap-8 sm:w-full md:w-full md:pb-12 sm:gap-6 sm:pb-12'>
						<img
							src={Hero1}
							alt=''
							className='w-16 h-16 border-4 border-black rounded-full'
						/>
						<h2 className='lg:text-[44px] md:text-[32px] sm:text-[26px]'>
							WELCOME TO HOTDESK WINDSOR
						</h2>
						<p className='text-lg'>
							The newest Hotdesk space is open for business.
						</p>
						<div className='flex gap-6'>
							<p>News</p>
							<p>March 6, 2023</p>
						</div>
					</div>

					<div className='flex flex-col w-1/2 gap-8 sm:w-full md:w-full md:pb-12 sm:gap-6 sm:pb-12'>
						<img
							src={Hero2}
							alt=''
							className='w-16 h-16 border-4 border-black rounded-full'
						/>
						<h2 className='lg:text-[44px] md:text-[32px] sm:text-[26px]'>
							WHEN YOU NEED, WHERE YOU WANT.
						</h2>
						<p className='text-lg'>How Hotdesk is powering the hybrid work.</p>
						<div className='flex gap-6'>
							<p>News</p>
							<p>March 6, 2023</p>
						</div>
					</div>
				</div>

				<div className='flex gap-2 px-10 m-auto md:flex-col sm:flex-col md:px-24 sm:px-5'>
					<div className='flex flex-col w-1/2 gap-8 sm:w-full md:w-full md:pb-12 sm:gap-6 sm:pb-12'>
						<img
							src={Hero3}
							alt=''
							className='w-16 h-16 border-4 border-black rounded-full'
						/>
						<h2 className='lg:text-[44px] md:text-[32px] sm:text-[26px]'>
							WOMEN IN TECH LAUNCH EVENT.
						</h2>
						<p className='text-lg'>
							Join us on the14th of April at South Yarra.
						</p>
						<div className='flex gap-6'>
							<p>Events</p>
							<p>March 6, 2023</p>
						</div>
					</div>

					<div className='flex flex-col w-1/2 gap-8 sm:w-full md:w-full md:pb-12 sm:gap-6 sm:pb-12'>
						<img
							src={Hero4}
							alt=''
							className='w-16 h-16 border-4 border-black rounded-full'
						/>
						<h2 className='lg:text-[44px] md:text-[32px] sm:text-[26px]'>
							NEW STUDIO SPACE IN HAWTHORN
						</h2>
						<p className='text-lg'>
							Our newest space is open – come in and check it out.
						</p>
						<div className='flex gap-6'>
							<p>News</p>
							<p>March 6, 2023</p>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
