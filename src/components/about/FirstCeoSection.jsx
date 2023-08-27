/* eslint-disable react/no-unescaped-entities */
import CeoImage1 from '../../assets/LuminousStaff.jpg'

export default function CeoSection() {
	return (
		<>
			<div className='flex uppercase md:flex-col sm:flex-col'>
				<div className='flex justify-center bg-gradient-to-bl from-[#c7f092] via-white to-[#ffffff] lg:w-1/2 lg:py-40 md:py-12 sm:pt-12 sm:px-6'>
					<img
						src={CeoImage1}
						alt=''
						className='h-[80%] md:w-[65%] md:[h-65%] sm:[w-45%] sm:[h-45%] rounded-[50%] border-4 border-black'
					/>
				</div>
				<div className='md:w-full sm:w-full lg:w-1/2'>
					<div className='px-12 text-black md:px-20 sm:px-5 lg:py-10 md:py-16 sm:py-10'>
						<div className='pt-8 font-black normal-case sm:pt-0 md:text-2xl sm:text-xl '>
							<h2 className='lg:text-[54px] lg:text-5xl lg:pb-32 '>
								“WE’RE A COMMUNITY WHO SHARE IDEAS, COLLABORATE, AND BUILD
								BUSINESSES.”
							</h2>
							<br />

							<div className='lg:text-2xl md:text-lg sm:text-lg'>
								<p className='normal-case list-disc lg:pb-20 md:pb-10 sm:pb-10'>
									“Our workspace is designed to encourage individuals, startups
									and businesses to thrive. We're a place where people who share
									a common goal can work together, help each other and create
									something truly awesome.”
								</p>
								<h2 className='uppercase '>Camilla Price</h2>
								<p>Founder & CEO</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
