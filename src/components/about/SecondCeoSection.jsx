import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa6'
import Founder1 from '../../assets/about/ceo1.jpg'
import Founder2 from '../../assets/about/ceo2.jpg'
import GeneralManager from '../../assets/about/generalManager.jpg'

export default function SecondCeoSection() {
	const staffs = [
		{
			id: 1,
			img: Founder1,
			name: 'Camilla Price',
			position: 'Founder & CEO',
		},
		{
			id: 1,
			img: Founder2,
			name: 'Andrew Phillips',
			position: 'Founder & CEO',
		},
		{
			id: 1,
			img: GeneralManager,
			name: 'Raymond Lovell',
			position: 'Founder & CEO',
		},
	]

	return (
		<>
			<div className='bg-[#f5f5f5] font-black text-black flex flex-col gap-10 items-center py-20'>
				<h2 className='pb-5 text-2xl uppercase md:text-xl sm:text-lg'>
					Meet the hotdesk crew
				</h2>
				<div className='flex items-center justify-center m-auto md:gap-16 md:flex-col sm:flex-col '>
					{staffs.map((staff) => (
						<>
							<div
								className='flex flex-col items-center justify-center gap-6 text-xl sm:py-6 md:text-lg'
								key={staff.id}
							>
								<img
									src={staff.img}
									alt=''
									className='w-[80%] md:w-[55%] sm:[w-45%] sm:[h-45%] rounded-[50%] border-4 border-black'
								/>
								<h2 className='uppercase '>{staff.name}</h2>
								<p>{staff.position}</p>
								<div className='flex items-center gap-6 '>
									<FaTwitter size={25} />
									<FaLinkedin size={25} />
									<FaGithub size={25} />
								</div>
							</div>
						</>
					))}
				</div>
			</div>
		</>
	)
}
