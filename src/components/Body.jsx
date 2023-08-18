import Button from './shared/BlackButton'
import BodyImage1 from '../assets/bodyImage1.jpg'
import BodyImage2 from '../assets/bodyImage2.jpg'
import BodyImage3 from '../assets/bodyImage3.jpg'

export default function Body() {
	return (
		<>
			<div className='flex md:flex-col sm:flex-col uppercase'>
				<div className='md:w-full sm:w-full lg:w-1/2'>
					<div className='text-black px-12 md:px-20 sm:px-5 lg:py-10 md:py-16 sm:py-10'>
						<div>
							<h2 className='text-[21px] md:text-[16px] sm:text-[16px] lg:pb-32 uppercase text-black font-extrabold'>
								Hot Desk Your Way
							</h2>
						</div>

						<div className='md:text-2xl sm:text-xl normal-case font-bold pt-8 '>
							<h2 className='lg:text-[54px] lg:text-5xl lg:pb-32 '>
								SILENT OR BUZZING. SPACES FOR EVERY VIBE.
							</h2>
							<br />
							<p className='lg:text-2xl md:text-xl sm:text-lg normal-case lg:pb-20 md:pb-10 sm:pb-10'>
								At Hotdesk, we have spaces for everyone to do their best work –
								whether that’s amongst buzzing activity or tucked away in a cozy
								nook.
							</p>
							<h2 className='flex'>
								<Button>See Memberships</Button>
							</h2>
							<br />
						</div>
					</div>
				</div>
				<div className='lg:w-1/2 flex justify-center lg:py-48 md:py-10 sm:py-10 bg-gradient-to-bl from-[#9492f0] via-white to-[#92f0ce] '>
					<img
						src={BodyImage1}
						alt=''
						className=' md:w-[50%] md:[h-50%] sm:[w-45%] sm:[h-45%] rounded-full border-4 border-black'
					/>
				</div>
			</div>

			<div className='flex md:flex-col-reverse sm:flex-col-reverse uppercase'>
				<div className='lg:w-1/2 flex gap-4 justify-center items-center h-fit lg:pt-[12rem] lg:pb-[15rem] md:py-[7rem] sm:py-[4rem] bg-black overflow-hidden'>
					<img
						src={BodyImage2}
						alt=''
						className='w-[70%] h-[70%] md:w-[55%] md:[h-55%] sm:[w-45%] sm:[h-45%] border-4 border-white'
					/>
					<img
						src={BodyImage3}
						alt=''
						className='w-[70%] h-[70%] md:w-[55%] md:h-[55%] sm:[w-50%] sm:[h-50%] rounded-full border-4 border-white'
					/>
				</div>
				<div className='md:w-full sm:w-full lg:w-1/2 z-10'>
					<div className='text-black bg-white px-12 md:px-20 sm:px-5 lg:pt-10 md:py-16 sm:py-10'>
						<div>
							<h2 className='lg:text-[21px] md:text-[16px] lg:pb-32 sm:text-[16px]  uppercase text-black font-extrabold'>
								NOT JUST DESKS
							</h2>
						</div>

						<div className='md:text-2xl sm:text-xl normal-case font-bold pt-8 '>
							<h2 className='lg:text-[54px] lg:text-5xl lg:pb-24 '>
								CREATIVE SPACES FOR RECORDING, PERFORMANCE AND MORE.
							</h2>
							<br />
							<p className='lg:text-2xl md:text-xl sm:text-lg normal-case lg:pb-12 md:pb-10 sm:pb-10 '>
								At Hotdesk, we have spaces for everyone to do their best work –
								whether that’s amongst buzzing activity or tucked away in a cozy
								nook.
							</p>
							<h2 className='flex'>
								<Button>Explore Facilities</Button>
							</h2>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
