import Requirements1 from '../assets/Requirements1.jpg'
import Requirements2 from '../assets/Requirements2.jpg'
import WhiteButton from './shared/WhiteButton'

export default function Requirements() {
	return (
		<>
			<div className='flex md:flex-col sm:flex-col relative gap-10 text-white pt-24 lg:pl-24  bg-gradient-to-b from-[#000] to-[#222] h-fit'>
        <div className='md:pl-32 sm:pl-6 sm:pb-20'>
					<img
						src={Requirements1}
						alt=''
						className='w-[80%] md:w-[80%] md:[h-55%] sm:w-[94%] sm:h-[80%] border-4 border-white'
					/>
					<img
						src={Requirements2}
						alt=''
						className='relative bottom-24 left-[176px] w-[278px] h-[278px] md:w-[275px] md:h-[275px] sm:w-[180px] sm:h-[180px] sm:left-[160px] sm:absolute sm:bottom-[21rem] rounded-[50%] border-4 border-white '
					/>
				</div>
				<div className='flex flex-col lg:pt-20 md:text-center sm:text-center'>
					<div className='text-white sm:px-5'>
						<div>
							<h2 className='lg:text-[21px] md:text-[20px] sm:text-[16px] uppercase font-extrabold'>
								Customize hotdesk
							</h2>
						</div>

						<div className='pt-8 pr-6 font-bold normal-case md:text-4xl sm:text-xl'>
							<h2 className='lg:text-[54px] lg:text-5xl '>
								LET’S DISCUSS YOUR TEAM’S REQUIREMENTS.
							</h2>
							<h2 className='flex py-10 md:justify-center sm:justify-center'>
								<WhiteButton>Get in touch</WhiteButton>
							</h2>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
