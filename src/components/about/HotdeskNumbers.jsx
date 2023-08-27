export default function HotdeskNumbers() {
	return (
		<section className='relative font-black text-black'>
			<div className='flex gap-32 md:gap-20 sm:gap-12 sm:flex-col md:flex-col'>
				<div className='flex flex-col lg:w-[75%] gap-10 py-20 pl-20 md:px-20 md:py-8 sm:py-6 sm:pl-5'>
					<div className='sticky top-16'>
						<div className='flex flex-col gap-6'>
							<h2 className='lg:text-[24px] md:text-[18px] sm:text-[18px] uppercase sm:pt-12'>
								HOTDESK BY NUMBERS
							</h2>
							<h2 className='text-[55px] md:text-[40px] sm:text-[20px]'>
								JUST A FEW THINGS WE’RE PROUD OF.
							</h2>
						</div>
					</div>
				</div>
				<div className='font-extrabold text-white bg-black lg:w-full'>
					<div className='mx-10 sm:mx-5'>
						<div className='flex flex-col gap-10 py-10 md:mx-12  border-b-4 border-[#c7f092]'>
							<h2 className='uppercase lg:text-[6rem] md:text-[40px] sm:text-3xl'>
								150%
							</h2>

							<div className='lg:text-[24px] text-[18px]'>
								<p>
									Average increase in productivity that businesses report when
									they switched to Hotdesk.
								</p>
							</div>
						</div>

						<div className='flex flex-col gap-10 py-10 md:mx-12 border-b-4 border-[#92f0ce]'>
							<h2 className='uppercase lg:text-[6rem] md:text-[40px] sm:text-3xl'>
								200+
							</h2>

							<div className='lg:text-[24px] text-[18px]'>
								<p>
									Businesses have used Hotdesk since we opened our first
									co-working space in Hawthorn.
								</p>
							</div>
						</div>

						<div className='flex flex-col gap-10 py-10 md:mx-12 border-b-4 border-[#9492f0]'>
							<h2 className='uppercase lg:text-[6rem] md:text-[40px] sm:text-3xl'>
								78+
							</h2>

							<div className='lg:text-[24px] text-[18px]'>
								<p>
									Community events we’ve held since opening to empower our
									creative network.
								</p>
							</div>
						</div>

						<div className='flex flex-col gap-10 py-10 md:mx-12 '>
							<h2 className='uppercase lg:text-[6rem] md:text-[40px] sm:text-3xl'>
								63,000
							</h2>

							<div className='lg:text-[24px] text-[18px]'>
								<p>Creatives who have chosen to work at a Hotdesk location.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
