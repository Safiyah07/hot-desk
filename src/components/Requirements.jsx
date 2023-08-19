import Requirements1 from '../assets/Requirements1.jpg'
import Requirements2 from '../assets/Requirements2.jpg'
import WhiteButton from './shared/WhiteButton'

export default function Requirements() {
	return (
		<>
			<div className='flex md:flex-col sm:flex-col relative gap-10 text-white pt-24 pl-24 bg-gradient-to-b from-[#000] to-[#222] h-fit'>
				<div>
					<img
						src={Requirements1}
						alt=''
						className='w-[80%] md:w-[55%] md:[h-55%] sm:[w-45%] sm:[h-45%] border-4 border-white'
					/>
					<img
						src={Requirements2}
						alt=''
						className='lg:relative bottom-24 left-[176px] w-[278px] h-[278px] md:w-[55%] md:h-[55%] sm:[w-50%] sm:[h-50%] rounded-[50%] border-4 border-white'
					/>
				</div>
				<div className='flex flex-col pt-20'>
					<div className='text-white md:px-20 sm:px-5'>
						<div>
							<h2 className='lg:text-[21px] md:text-[16px] sm:text-[16px] uppercase font-extrabold'>
								Customize hotdesk
							</h2>
						</div>

						<div className='pt-8 font-bold normal-case md:text-2xl sm:text-xl '>
							<h2 className='lg:text-[54px] lg:text-5xl '>
								LET’S DISCUSS YOUR TEAM’S REQUIREMENTS.
							</h2>
							<h2 className='flex pt-10'>
								<WhiteButton>Get in touch</WhiteButton>
							</h2>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
