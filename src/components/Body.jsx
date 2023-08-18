import Button from './shared/Button'
import BodyImage1 from '../assets/bodyImage1.jpg'
import BodyImage2 from '../assets/bodyImage2.jpg'
import BodyImage3 from '../assets/bodyImage3.jpg'

export default function Body() {
	return (
		<>
			<div className='flex uppercase'>
				<div className='md:w-full sm:w-full lg:w-1/2'>
					<div className='text-black px-12 lg:py-10 md:py-16 sm:py-16'>
						<div>
							<h2 className='lg:text-[21px] md:text-[40px] lg:pb-32 sm:text-[21px] uppercase text-black font-extrabold'>
								Hot Desk Your Way
							</h2>
						</div>

						<div className='md:text-2xl sm:text-xl normal-case font-bold pt-8 md:text-center sm:text-center'>
							<h2 className='lg:text-[54px] lg:text-5xl lg:pb-32 md:text-center sm:text-center'>
								SILENT OR BUZZING. SPACES FOR EVERY VIBE.
							</h2>
							<br />
							<p className='lg:text-2xl md:text-2xl sm:text-xl normal-case lg:pb-20 '>
								At Hotdesk, we have spaces for everyone to do their best work –
								whether that’s amongst buzzing activity or tucked away in a cozy
								nook.
							</p>
							<h2 className='flex md:justify-center sm:justify-center'>
								<Button>See Memberships</Button>
							</h2>
							<br />
						</div>
					</div>
				</div>
				<div className='w-1/2 flex justify-center m-auto py-48 sm:hidden bg-gradient-to-bl from-[#9492f0] via-white to-[#92f0ce] '>
					<img
						src={BodyImage1}
						alt=''
						className='w-[70%] h-[70%] rounded-full border-2 border-black'
					/>
				</div>
			</div>

			<div className='flex uppercase'>
				<div className='lg:w-1/2 lg:flex gap-4 justify-center items-center h-fit pt-[12rem] pb-[15rem] sm:hidden bg-black'>
					<img
						src={BodyImage2}
						alt=''
						className='w-[70%] h-[70%] border-2 border-white'
					/>
          <img
						src={BodyImage3}
						alt=''
						className='w-[70%] h-[70%] rounded-full border-2 border-white'
					/>
				</div>
				<div className='md:w-full sm:w-full lg:w-1/2 z-10'>
					<div className='text-black bg-white px-12 lg:py-10 md:py-16 sm:py-16'>
						<div>
							<h2 className='lg:text-[21px] md:text-[40px] lg:pb-32 sm:text-[21px] uppercase text-black font-extrabold'>
              NOT JUST DESKS
							</h2>
						</div>

						<div className='md:text-2xl sm:text-xl normal-case font-bold pt-8 md:text-center sm:text-center'>
							<h2 className='lg:text-[54px] lg:text-5xl lg:pb-32 md:text-center sm:text-center'>
              CREATIVE SPACES FOR RECORDING, PERFORMANCE AND MORE.
							</h2>
							<br />
							<p className='lg:text-2xl md:text-2xl sm:text-xl normal-case lg:pb-20 '>
              At Hotdesk, we have spaces for everyone to do their best work – whether that’s amongst buzzing activity or tucked away in a cozy nook.
							</p>
							<h2 className='flex md:justify-center sm:justify-center'>
								<Button>Explore Facilities</Button>
							</h2>
							<br />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
