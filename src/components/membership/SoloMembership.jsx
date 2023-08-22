import { Link } from 'react-router-dom'
import WhiteButton from '../shared/WhiteButton'

export default function SoloMembership() {
	return (
		<>
			<div className='flex flex-col py-32 sm:py-10 font-extrabold text-white bg-gradient-to-b from-[#000] to-[#222]'>
				<h2 className='lg:text-[50px] md:text-[2rem] sm:text-xl font-black uppercase lg:w-[70%] m-auto text-center bg-soloMembershipGraphic bg-contain bg-no-repeat bg-[bottom_left_7rem] sm:bg-[bottom_left_6rem] lg:pb-3 px-32 sm:px-16 '>
					Solo Membership
				</h2>

				<div className='flex gap-10 px-32 py-20 md:flex-col sm:flex-col sm:py-12 lg:px-7 sm:px-5 '>
					<div className='py-6 border-2 border-white lg:w-1/2'>
						<p className='lg:text-[54px] md:text-[2.5rem] sm:text-3xl font-black uppercase border-b-2 w-full px-10 pb-5'>
							Daypass
						</p>
						<p className='px-10 py-6 text-2xl border-b-2 md:text-2xl sm:text-lg'>
							Our flexible and modern workspace allows you to work when you need
							to and where you want to.
						</p>
						<p className='px-10 py-6 text-2xl border-b-2 md:text-2xl sm:text-lg lg:h-[20rem]'>
							<ul className='list-disc'>
								<li className='pb-2'>High-speed internet</li>
								<li className='pb-2'>Comfortable seating options</li>
								<li className='pb-2'>Shared kitchen facilities</li>
								<li className='pb-2'>Printing and scanning services</li>
								<li className='pb-2'>Access 9am – 5pm</li>
							</ul>
						</p>
						<div className='flex sm:flex-col sm:gap-3 border-b-2 py-6 px-5 text-xl font-extrabold md:text-lg sm:text-[16px] sm:px-0'>
							<p className='flex items-center w-auto h-12 px-5 mx-5 text-black bg-white sm:w-32 rounded-3xl'>
								$50 per day
							</p>
							<p className='flex items-center h-12 px-5 text-black bg-white rounded-3xl sm:mx-5 sm:w-44'>
								Business Hours
							</p>
						</div>

						<div className='pt-6 m-auto w-[90%] text-center'>
							<Link
								to='/memberships'
								className='pt-6 m-auto w-[90%] text-center'
							>
								<WhiteButton> Start now</WhiteButton>
							</Link>
						</div>
					</div>

					<div className='py-6 border-2 border-white lg:w-1/2'>
						<p className='lg:text-[54px] md:text-[2.5rem] sm:text-3xl font-black uppercase border-b-2 w-full px-10 pb-5'>
							Ongoing
						</p>
						<p className='px-10 py-6 text-2xl border-b-2 md:text-2xl sm:text-lg'>
							Workspace options to suit every demand with access to all centres
							and amenities.
						</p>
						<p className='px-10 py-6 text-2xl border-b-2 md:text-2xl sm:text-lg lg:h-[20rem]'>
							<ul className='list-disc'>
								<li className='pb-2'>Dedicated desk</li>
								<li className='pb-2'>Access to Hotdesk Events</li>
								<li className='pb-2'>Studio hire included</li>
								<li className='pb-2'>Printing and scanning services</li>
								<li className='pb-2'>High-speed internet</li>
								<li className='pb-2'>Comfortable seating options</li>
								<li className='pb-2'>Shared kitchen facilities</li>
							</ul>
						</p>
						<div className='flex sm:flex-col sm:gap-3 border-b-2 py-6 px-5 text-xl font-extrabold md:text-xl sm:text-[16px] sm:px-0'>
							<p className='flex items-center w-auto h-12 px-5 mx-5 text-black bg-white rounded-3xl sm:w-40'>
								$350 per month
							</p>
							<p className='flex items-center h-12 px-5 text-black bg-white rounded-3xl sm:mx-5 sm:w-32'>
								24/7 Access
							</p>
						</div>

						<div className='pt-6 m-auto w-[90%] text-center'>
							<Link
								to='/memberships'
								className='pt-6 m-auto w-[90%] text-center'
							>
								<WhiteButton>Start Now</WhiteButton>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
