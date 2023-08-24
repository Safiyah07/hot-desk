import { Link } from 'react-router-dom'
import Button from '../shared/BlackButton'
import BodyImage1 from '../../assets/landing/bodyImage1.jpg'
import BodyImage2 from '../../assets/membership/hero4.jpg'
import BodyImage3 from '../../assets/landing/bodyImage3.jpg'

export default function Section() {
	return (
		<>
			<div
				id='section'
				className='flex uppercase md:flex-col sm:flex-col'
			>
				<div className='md:w-full sm:w-full lg:w-1/2'>
					<div className='px-12 text-black md:px-20 sm:px-5 lg:py-10 md:py-16 sm:py-10'>
						<div>
							<h2 className='text-[21px] md:text-[16px] sm:text-[16px] lg:pb-5 uppercase text-black font-extrabold'>
								Hotdesks
							</h2>
						</div>

						<div className='pt-8 font-bold normal-case md:text-2xl sm:text-xl '>
							<h2 className='lg:text-[54px] lg:text-5xl lg:pb-32 '>
								THE IDEAL SPACE TO GET WORK DONE.
							</h2>
							<br />
							<ul className='pl-6 normal-case list-disc lg:text-2xl md:text-lg sm:text-lg lg:pb-20 md:pb-10 sm:pb-10'>
								<li className='mb-2'>High-speed internet</li>
								<li className='mb-2'>Comfortable seating options</li>
								<li className='mb-2'>Shared kitchen facilities</li>
								<li className='mb-2'>Printing and scanning services</li>
								<li className='mb-2'>Much more</li>
							</ul>
							<Link to='/memberships'>
								<h2 className='flex'>
									<Button>See Memberships</Button>
								</h2>
							</Link>
							<br />
						</div>
					</div>
				</div>
				<div className='lg:w-1/2 flex justify-center lg:py-48 md:py-12 sm:py-10 bg-gradient-to-b from-[#f5f5f5] via-white to-[#9492f0] md:px-10 sm:px-10'>
					<img
						src={BodyImage1}
						alt=''
						className=' md:w-[60%] md:[h-60%] sm:[w-45%] sm:[h-45%] rounded-full border-4 border-black'
					/>
				</div>
			</div>

			<div className='flex uppercase md:flex-col-reverse sm:flex-col-reverse'>
				<div className='flex justify-center bg-gradient-to-b from-[#f5f5f5] via-white to-[#c7f092] lg:w-1/2 lg:py-48 md:py-12 sm:py-10'>
					<img
						src={BodyImage2}
						alt=''
						className='m-auto md:w-[60%] sm:[w-45%] sm:[h-45%] border-4 border-black'
					/>
				</div>
				<div className='md:w-full sm:w-full lg:w-1/2'>
					<div className='px-12 text-black md:px-20 sm:px-5 lg:py-10 md:py-16 sm:py-10'>
						<div>
							<h2 className='text-[21px] md:text-[16px] sm:text-[16px] lg:pb-5 uppercase text-black font-extrabold'>
								Offices
							</h2>
						</div>

						<div className='pt-8 font-bold normal-case md:text-2xl sm:text-xl '>
							<h2 className='lg:text-[54px] lg:text-5xl lg:pb-32 '>
								DEDICATED SPACE FOR THE TEAM TO COLLABORATE.
							</h2>
							<br />
							<ul className='pl-6 normal-case list-disc lg:text-2xl md:text-lg sm:text-lg lg:pb-20 md:pb-10 sm:pb-10'>
								<li className='mb-2'>Private Offices</li>
								<li className='mb-2'>Comfortable seating options</li>
								<li className='mb-2'>Shared kitchen facilities</li>
								<li className='mb-2'>Printing and scanning services</li>
								<li className='mb-2'>Much more</li>
							</ul>
							<Link to='/memberships'>
								<h2 className='flex'>
									<Button>See Memberships</Button>
								</h2>
							</Link>
							<br />
						</div>
					</div>
				</div>
			</div>

			<div className='flex uppercase md:flex-col sm:flex-col'>
				<div className='md:w-full sm:w-full lg:w-1/2'>
					<div className='px-12 text-black md:px-20 sm:px-5 lg:py-10 md:py-16 sm:py-10'>
						<div>
							<h2 className='text-[21px] md:text-[16px] sm:text-[16px] lg:pb-5 uppercase text-black font-extrabold'>
								Studios
							</h2>
						</div>

						<div className='pt-8 font-bold normal-case md:text-2xl sm:text-xl '>
							<h2 className='lg:text-[54px] lg:text-5xl lg:pb-32 '>
								TAKE YOUR CREATIVITY TO THE NEXT LEVEL.
							</h2>
							<br />
							<ul className='pl-6 normal-case list-disc lg:text-2xl md:text-lg sm:text-lg lg:pb-20 md:pb-10 sm:pb-10'>
								<li className='mb-2'>State-of-the-art podcasting studio</li>
								<li className='mb-2'>Soundproof recording booths</li>
								<li className='mb-2'>
									Engineers available for recording and post-production
								</li>
								<li className='mb-2'>Top-of-the-line video equipment</li>
								<li className='mb-2'>On-site experts available for guidance</li>
							</ul>
							<Link to='/memberships'>
								<h2 className='flex'>
									<Button>See Memberships</Button>
								</h2>
							</Link>
							<br />
						</div>
					</div>
				</div>
				<div className='lg:w-1/2 flex justify-center lg:py-48 md:py-12 sm:py-10 bg-gradient-to-br from-[#92f0ce] via-white to-[#f5f5f5] md:px-10 sm:px-10'>
					<img
						src={BodyImage3}
						alt=''
						className=' md:w-[60%] md:[h-60%] sm:[w-45%] sm:[h-45%] rounded-full border-4 border-black'
					/>
				</div>
			</div>
		</>
	)
}
