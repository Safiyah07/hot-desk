import Section1 from '../../assets/location/section1.jpg'
import Section2 from '../../assets/location/section2.jpg'
import Section3 from '../../assets/location/section3.jpg'
import Section4 from '../../assets/location/section4.jpg'
import Section5 from '../../assets/location/section5.jpg'
import Section6 from '../../assets/location/section6.jpg'
import Section7 from '../../assets/location/section7.jpg'
import Section8 from '../../assets/location/section8.jpg'
import BlackButton from '../shared/BlackButton'
import LocationIcon from '../../assets/location/LocationIcon.svg'
import ClockIcon from '../../assets/location/ClockIcon.svg'
import SnackIcon from '../../assets/location/SnackIcon.svg'
import InternetIcon from '../../assets/location/InternetIcon.svg'
import MailIcon from '../../assets/location/MailIcon.svg'

export default function Section() {
	return (
		<>
			{/* **************HAWTHORN***************** */}
			<section className='relative bg-gradient-to-b from-[#ffffff] to-[#f5f5f5]'>
				<div className='flex gap-32 px-6 py-20 sm:gap-12 sm:flex-col md:flex-col md:px-20'>
					<div className='font-extrabold text-black lg:w-full'>
						<div className='flex flex-col gap-10 pb-10 uppercase border-b-2'>
							<h2 className=' lg:text-6xl sm:text-3xl'>Hawthorn</h2>
							<div className='flex gap-2'>
								<img
									src={LocationIcon}
									alt='locationIcon'
								/>
								<div>
									<h2>1732</h2>
									<h2>Glenferrie rd</h2>
									<h2>Hawthorn</h2>
								</div>
							</div>
							<div className='text-center'>
								<BlackButton>Book a tour</BlackButton>
							</div>
						</div>

						<div className='flex flex-col gap-10 py-10 text-lg border-b-2 sm:text-base'>
							<p>
								Write a brief description of the location in this rich text
								area. Take the time to explain the unique offering at this
								location and the types of customers it may suit.
							</p>

							<p>
								You can list features using a bulleted list within the rich text
								area or using the icon groups as demonstrated below.
							</p>

							<ul className='pl-5 list-disc'>
								<li>24/7 Access</li>
								<li>Direct access from Hawthorn Station</li>
								<li>100+ capacity event spaces</li>
								<li>Café on site</li>
								<li>Restaurants nearby</li>
							</ul>
						</div>

						<div className=''>
							<h2 className='py-10 text-2xl uppercase md:text-xl sm:text-lg'>Features:</h2>
							<div className='flex gap-10 md:gap-3 md:items-center sm:flex-col sm:gap-2 lg:py-5'>
								<span className='flex items-center w-1/2 gap-2 py-2 pl-4 pr-6 text-2xl bg-white border-2 border-black rounded-full sm:w-full md:text-xl sm:text-lg'>
									<img
										src={ClockIcon}
										alt=''
										className='h-12 md:h-10 sm:h-8 '
									/>
									24/7 Access
								</span>

								<span className='flex items-center w-1/2 gap-2 py-2 pl-4 pr-6 text-2xl bg-white border-2 border-black rounded-full sm:w-full md:text-xl sm:text-lg'>
									<img
										src={SnackIcon}
										alt=''
										className='h-12 md:h-10 sm:h-8'
									/>
									Snack Bar
								</span>
							</div>
						</div>
						<div className='flex gap-10 md:gap-3 md:pt-3 sm:pt-2 md:items-center sm:flex-col sm:gap-2'>
							<span className='flex items-center w-1/2 gap-2 py-2 pl-4 pr-6 text-2xl bg-white border-2 border-black rounded-full sm:w-full md:text-xl sm:text-lg'>
								<img
									src={InternetIcon}
									alt=''
									className='h-12 md:h-10 sm:h-8'
								/>
								Gigabit Internet
							</span>

							<span className='flex items-center w-1/2 gap-2 py-2 pl-4 pr-6 text-2xl bg-white border-2 border-black rounded-full sm:w-full md:text-xl sm:text-lg'>
								<img
									src={MailIcon}
									alt=''
									className='h-12 md:h-10 sm:h-8'
								/>
								Mail Handling
							</span>
						</div>
					</div>

					<div className='flex flex-col gap-10 lg:pr-20'>
						<div className='sticky top-5'>
							<img
								src={Section1}
								alt=''
								className=''
							/>
							<br /> <br />
							<img
								src={Section2}
								alt=''
								className=''
							/>
						</div>
					</div>
				</div>
			</section>

			{/* **************RICHMOND***************** */}
			<section className='relative bg-gradient-to-b from-[#ffffff] via-white to-[#f5f5f5]'>
				<div className='flex gap-32 px-6 py-20 sm:gap-12 sm:flex-col md:flex-col md:px-20'>
					<div className='font-extrabold text-black lg:w-full'>
						<div className='flex flex-col gap-10 pb-10 uppercase border-b-2'>
							<h2 className=' lg:text-6xl sm:text-3xl'>Richmond</h2>
							<div className='flex gap-2'>
								<img
									src={LocationIcon}
									alt='locationIcon'
								/>
								<div>
									<h2>1732</h2>
									<h2>Glenferrie rd</h2>
									<h2>Richmond</h2>
								</div>
							</div>
							<div className='text-center'>
								<BlackButton>Book a tour</BlackButton>
							</div>
						</div>

						<div className='flex flex-col gap-10 py-10 text-lg border-b-2 sm:text-base'>
							<p>
								Write a brief description of the location in this rich text
								area. Take the time to explain the unique offering at this
								location and the types of customers it may suit.
							</p>

							<p>
								You can list features using a bulleted list within the rich text
								area or using the icon groups as demonstrated below.
							</p>

							<ul className='pl-5 list-disc'>
								<li>24/7 Access</li>
								<li>Direct access from Hawthorn Station</li>
								<li>100+ capacity event spaces</li>
								<li>Café on site</li>
								<li>Restaurants nearby</li>
							</ul>
						</div>

						<div className=''>
							<h2 className='py-10 text-2xl uppercase md:text-xl sm:text-lg'>Features:</h2>
							<div className='flex gap-10 md:gap-3 md:items-center sm:flex-col sm:gap-2 lg:py-5'>
								<span className='flex items-center w-1/2 gap-2 py-2 pl-4 pr-6 text-2xl bg-white border-2 border-black rounded-full sm:w-full md:text-xl sm:text-lg'>
									<img
										src={ClockIcon}
										alt=''
										className='h-12 md:h-10 sm:h-8 '
									/>
									24/7 Access
								</span>

								<span className='flex items-center w-1/2 gap-2 py-2 pl-4 pr-6 text-2xl bg-white border-2 border-black rounded-full sm:w-full md:text-xl sm:text-lg'>
									<img
										src={SnackIcon}
										alt=''
										className='h-12 md:h-10 sm:h-8'
									/>
									Snack Bar
								</span>
							</div>
						</div>
						<div className='flex gap-10 md:gap-3 md:pt-3 sm:pt-2 md:items-center sm:flex-col sm:gap-2'>
							<span className='flex items-center w-1/2 gap-2 py-2 pl-4 pr-6 text-2xl bg-white border-2 border-black rounded-full sm:w-full md:text-xl sm:text-lg'>
								<img
									src={InternetIcon}
									alt=''
									className='h-12 md:h-10 sm:h-8'
								/>
								Gigabit Internet
							</span>

							<span className='flex items-center w-1/2 gap-2 py-2 pl-4 pr-6 text-2xl bg-white border-2 border-black rounded-full sm:w-full md:text-xl sm:text-lg'>
								<img
									src={MailIcon}
									alt=''
									className='h-12 md:h-10 sm:h-8'
								/>
								Mail Handling
							</span>
						</div>
					</div>

					<div className='sticky flex flex-col gap-10 lg:pr-20'>
						<div className='sticky top-5'>
							<img
								src={Section3}
								alt=''
							/>
							<br />
							<br />
							<img
								src={Section4}
								alt=''
							/>
						</div>
					</div>
				</div>
			</section>

			{/* **************SOUTH YARRA***************** */}
			<section className='relative bg-gradient-to-b from-[#ffffff] via-white to-[#f5f5f5]'>
				<div className='flex gap-32 px-6 py-20 sm:gap-12 sm:flex-col md:flex-col md:px-20'>
					<div className='font-extrabold text-black lg:w-full'>
						<div className='flex flex-col gap-10 pb-10 uppercase border-b-2'>
							<h2 className=' lg:text-6xl sm:text-3xl'>South Yarra</h2>
							<div className='flex gap-2'>
								<img
									src={LocationIcon}
									alt='locationIcon'
								/>
								<div>
									<h2>1732</h2>
									<h2>Glenferrie rd</h2>
									<h2>South Yarra</h2>
								</div>
							</div>
							<div className='text-center'>
								<BlackButton>Book a tour</BlackButton>
							</div>
						</div>

						<div className='flex flex-col gap-10 py-10 text-lg border-b-2 sm:text-base'>
							<p>
								Write a brief description of the location in this rich text
								area. Take the time to explain the unique offering at this
								location and the types of customers it may suit.
							</p>

							<p>
								You can list features using a bulleted list within the rich text
								area or using the icon groups as demonstrated below.
							</p>

							<ul className='pl-5 list-disc'>
								<li>24/7 Access</li>
								<li>Direct access from Hawthorn Station</li>
								<li>100+ capacity event spaces</li>
								<li>Café on site</li>
								<li>Restaurants nearby</li>
							</ul>
						</div>

						<div className=''>
							<h2 className='py-10 text-2xl uppercase md:text-xl sm:text-lg'>Features:</h2>
							<div className='flex gap-10 md:gap-3 md:items-center sm:flex-col sm:gap-2 lg:py-5'>
								<span className='flex items-center w-1/2 gap-2 py-2 pl-4 pr-6 text-2xl bg-white border-2 border-black rounded-full sm:w-full md:text-xl sm:text-lg'>
									<img
										src={ClockIcon}
										alt=''
										className='h-12 md:h-10 sm:h-8 '
									/>
									24/7 Access
								</span>

								<span className='flex items-center w-1/2 gap-2 py-2 pl-4 pr-6 text-2xl bg-white border-2 border-black rounded-full sm:w-full md:text-xl sm:text-lg'>
									<img
										src={SnackIcon}
										alt=''
										className='h-12 md:h-10 sm:h-8'
									/>
									Snack Bar
								</span>
							</div>
						</div>
						<div className='flex gap-10 md:gap-3 md:pt-3 sm:pt-2 md:items-center sm:flex-col sm:gap-2'>
							<span className='flex items-center w-1/2 gap-2 py-2 pl-4 pr-6 text-2xl bg-white border-2 border-black rounded-full sm:w-full md:text-xl sm:text-lg'>
								<img
									src={InternetIcon}
									alt=''
									className='h-12 md:h-10 sm:h-8'
								/>
								Gigabit Internet
							</span>

							<span className='flex items-center w-1/2 gap-2 py-2 pl-4 pr-6 text-2xl bg-white border-2 border-black rounded-full sm:w-full md:text-xl sm:text-lg'>
								<img
									src={MailIcon}
									alt=''
									className='h-12 md:h-10 sm:h-8'
								/>
								Mail Handling
							</span>
						</div>
					</div>

					<div className='sticky flex flex-col gap-10 lg:pr-20'>
						<div className='sticky top-5'>
							<img
								src={Section5}
								alt=''
							/>
							<br />
							<br />
							<img
								src={Section6}
								alt=''
							/>
						</div>
					</div>
				</div>
			</section>

			{/* **************WINDSOR***************** */}
			<section className='relative bg-gradient-to-b from-[#ffffff] via-white to-[#f5f5f5]'>
				<div className='flex gap-32 px-6 py-20 sm:gap-12 sm:flex-col md:flex-col md:px-20'>
					<div className='font-extrabold text-black lg:w-full'>
						<div className='flex flex-col gap-10 pb-10 uppercase border-b-2'>
							<h2 className=' lg:text-6xl sm:text-3xl'>Windsor</h2>
							<div className='flex gap-2'>
								<img
									src={LocationIcon}
									alt='locationIcon'
								/>
								<div>
									<h2>1732</h2>
									<h2>Glenferrie rd</h2>
									<h2>Windsor</h2>
								</div>
							</div>
							<div className='text-center'>
								<BlackButton>Book a tour</BlackButton>
							</div>
						</div>

						<div className='flex flex-col gap-10 py-10 text-lg border-b-2 sm:text-base'>
							<p>
								Write a brief description of the location in this rich text
								area. Take the time to explain the unique offering at this
								location and the types of customers it may suit.
							</p>

							<p>
								You can list features using a bulleted list within the rich text
								area or using the icon groups as demonstrated below.
							</p>

							<ul className='pl-5 list-disc'>
								<li>24/7 Access</li>
								<li>Direct access from Hawthorn Station</li>
								<li>100+ capacity event spaces</li>
								<li>Café on site</li>
								<li>Restaurants nearby</li>
							</ul>
						</div>

						<div className=''>
							<h2 className='py-10 text-2xl uppercase md:text-xl sm:text-lg'>Features:</h2>
							<div className='flex gap-10 md:gap-3 md:items-center sm:flex-col sm:gap-2 lg:py-5'>
								<span className='flex items-center w-1/2 gap-2 py-2 pl-4 pr-6 text-2xl bg-white border-2 border-black rounded-full sm:w-full md:text-xl sm:text-lg'>
									<img
										src={ClockIcon}
										alt=''
										className='h-12 md:h-10 sm:h-8 '
									/>
									24/7 Access
								</span>

								<span className='flex items-center w-1/2 gap-2 py-2 pl-4 pr-6 text-2xl bg-white border-2 border-black rounded-full sm:w-full md:text-xl sm:text-lg'>
									<img
										src={SnackIcon}
										alt=''
										className='h-12 md:h-10 sm:h-8'
									/>
									Snack Bar
								</span>
							</div>
						</div>
						<div className='flex gap-10 md:gap-3 md:pt-3 sm:pt-2 md:items-center sm:flex-col sm:gap-2'>
							<span className='flex items-center w-1/2 gap-2 py-2 pl-4 pr-6 text-2xl bg-white border-2 border-black rounded-full sm:w-full md:text-xl sm:text-lg'>
								<img
									src={InternetIcon}
									alt=''
									className='h-12 md:h-10 sm:h-8'
								/>
								Gigabit Internet
							</span>

							<span className='flex items-center w-1/2 gap-2 py-2 pl-4 pr-6 text-2xl bg-white border-2 border-black rounded-full sm:w-full md:text-xl sm:text-lg'>
								<img
									src={MailIcon}
									alt=''
									className='h-12 md:h-10 sm:h-8'
								/>
								Mail Handling
							</span>
						</div>
					</div>

					<div className='sticky flex flex-col gap-10 lg:pr-20'>
						<div className='sticky top-5'>
							<img
								src={Section7}
								alt=''
							/>
							<br />
							<br />
							<img
								src={Section8}
								alt=''
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
