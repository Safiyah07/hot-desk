import { Link } from 'react-router-dom'
import BlackButton from '../shared/BlackButton'

export default function Hero() {
	return (
		<section className='relative font-black text-black'>
			<div className='flex gap-32 md:gap-20 sm:gap-12 sm:flex-col md:flex-col'>
				<div className='flex flex-col w-full gap-10 py-20 pl-20 md:py-8 sm:py-6 sm:pl-5'>
					<div className='sticky top-40'>
						<div className='flex flex-col gap-6'>
							<h2 className='lg:text-[60px] md:text-[40px] sm:text-[20px] uppercase'>
								Lets Chat
							</h2>
							<p className='text-[24px] md:text-[18px] sm:text-[18px]'>
								Creative Co-Working Spaces in the heart of Melbourne.
							</p>

							<Link to='/book-tour'>
								<div className='w-fit'>
									<BlackButton>Book a tour</BlackButton>
								</div>
							</Link>
							<p className='text-[20px] md:text-[18px] sm:text-[18px] cursor-pointer'>or Message Us</p>
						</div>
					</div>
				</div>
				<div className='font-extrabold text-white bg-black lg:w-full'>
					<div className='mx-10 sm:mx-5'>
						<div className='flex flex-col gap-10 py-10 md:mx-12  border-b-4 border-[#c7f092]'>
							<h2 className='uppercase lg:text-5xl md:text-3xl sm:text-xl'>Hawthorn</h2>
							<div className='flex flex-col gap-5'>
								<div className='lg:text-[20px] text-[18px]'>
									<p>1732 Glenferrie rd</p>
									<p>Hawthorn, VIC 3142</p>
								</div>
								<div className='flex flex-col font-black text-[20px]'>
									<a href='mailto:hawthorn@hotdesk.site'>
										hawthorn@hotdesk.site
									</a>
									<a href='tel:(03) 9382 2615'>(03) 9382 2615</a>
								</div>
							</div>
						</div>

						<div className='flex flex-col gap-10 py-10 md:mx-12   border-b-4 border-[#9492f0]'>
							<h2 className='uppercase lg:text-5xl md:text-3xl sm:text-xl'>Richmond</h2>
							<div className='flex flex-col gap-5'>
								<div className='lg:text-[20px] text-[18px]'>
									<p>180 Swan Street</p>
									<p>Richmond, VIC 3010</p>
								</div>
								<div className='flex flex-col font-black text-[20px]'>
									<a href='mailto:richmond@hotdesk.site'>
										richmond@hotdesk.site
									</a>
									<a href='tel:(03) 9382 2615'>(03) 9382 2615</a>
								</div>
							</div>
						</div>

						<div className='flex flex-col gap-10 py-10 md:mx-12   border-b-4 border-[#92f0ce]'>
							<h2 className='uppercase lg:text-5xl md:text-3xl sm:text-xl'>SOUTH YARRA</h2>
							<div className='flex flex-col gap-5'>
								<div className='lg:text-[20px] text-[18px]'>
									<p>560 – 578 Toorak Road</p>
									<p>South Yarra, VIC 3140</p>
								</div>
								<div className='flex flex-col font-black text-[20px]'>
									<a href='mailto:south.yarra@hotdesk.site'>
                  south.yarra@hotdesk.site
									</a>
									<a href='tel:(03) 9382 2615'>(03) 9382 2615</a>
								</div>
							</div>
						</div>

						<div className='flex flex-col gap-10 py-10 md:mx-12 '>
							<h2 className='uppercase lg:text-5xl md:text-3xl sm:text-xl'>Windsor</h2>
							<div className='flex flex-col gap-5'>
								<div className='lg:text-[20px] text-[18px]'>
									<p>4 High Street</p>
									<p>Windsor, VIC 3143</p>
								</div>
								<div className='flex flex-col font-black text-[20px]'>
									<a href='mailto:windsor@hotdesk.site'>
                  windsor@hotdesk.site
									</a>
									<a href='tel:(03) 9382 2615'>(03) 9382 2615</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
