import Access from '../assets/Access.svg'
import Concierge from '../assets/Concierge.svg'
import Snack from '../assets/Snack.svg'
import Internet from '../assets/Internet.svg'
import Studios from '../assets/Studios.svg'
import Mail from '../assets/Mail.svg'
import Members1 from '../assets/Members1.jpg'
import Members2 from '../assets/Members2.jpg'
import Members3 from '../assets/Members3.jpg'
import Members4 from '../assets/Members4.jpg'
import Members5 from '../assets/Members5.jpg'
import Members6 from '../assets/Members6.jpg'
import Button from './shared/BlackButton'

export default function Members() {
	return (
		<>
			<div className='flex flex-col text-black text-center py-24 bg-gradient-to-br from-[#92f0ce] via-white to-[#9492f0]'>
				<h2 className='lg:text-[54px] md:text-[2.3rem] sm:text-3xl font-black uppercase'>
					For all HotDesk Members
				</h2>
				<div className='flex flex-col items-center justify-center py-16 md:px-10'>
					<div className='flex md:items-center sm:flex-col sm:gap-1 gap-10 py-2'>
						<span className=' w-42 h-20 md:h-16 bg-white border-[3px] md:border-2 border-black rounded-full px-10 flex items-center gap-2 font-extrabold text-3xl md:text-xl sm:text-lg'>
							<img
								src={Access}
								alt=''
							/>
							24/7 Access
						</span>
						<span className=''>
							<img
								src={Members1}
								alt=''
								className='w-44 h-20 border-[3px] md:border-2 border-black rounded-full md:hidden sm:hidden'
							/>
						</span>
						<span className=' w-42 h-20 md:h-16 bg-white border-[3px] md:border-2 border-black rounded-full px-10 flex items-center gap-2 font-extrabold text-3xl md:text-2xl sm:text-lg'>
							<img
								src={Concierge}
								alt=''
							/>
							Concierge
						</span>
						<span className=''>
							<img
								src={Members2}
								alt=''
								className='w-20 h-20 border-[3px] border-black rounded-[50%] sm:hidden'
							/>
						</span>
					</div>

					<div className='flex md:items-center sm:flex-col sm:gap-1 gap-10 py-2'>
						<span className=''>
							<img
								src={Members3}
								alt=''
								className='w-44 h-20 border-[3px] md:border-2 border-black rounded-full md:hidden sm:hidden'
							/>
						</span>
						<span className=' w-42 h-20 md:h-16 bg-white border-[3px] md:border-2 border-black rounded-full px-10 flex items-center gap-2 font-extrabold text-3xl md:text-2xl sm:text-lg'>
							<img
								src={Snack}
								alt=''
							/>
							Snack Bar
						</span>

						<span className=''>
							<img
								src={Members4}
								alt=''
								className='w-20 h-20 border-[3px] border-black rounded-[50%] sm:hidden'
							/>
						</span>
						<span className=' w-42 h-20 md:h-16 bg-white border-[3px] md:border-2 border-black rounded-full px-10 flex items-center gap-2 font-extrabold text-3xl md:text-2xl sm:text-lg'>
							<img
								src={Internet}
								alt=''
							/>
							Gigabit Internet
						</span>
					</div>

					<div className='flex md:items-center sm:flex-col sm:gap-1 gap-10 py-2'>
						<span className=' w-42 h-20 md:h-16 bg-white border-[3px] md:border-2 border-black rounded-full px-10 flex items-center gap-2 font-extrabold text-3xl md:text-2xl sm:text-lg'>
							<img
								src={Studios}
								alt=''
							/>
							Studios
						</span>
						<span className=''>
							<img
								src={Members5}
								alt=''
								className='w-20 h-20 border-[3px] border-black rounded-[50%] sm:hidden'
							/>
						</span>

						<span className=' w-42 h-20 md:h-16 bg-white border-[3px] md:border-2 border-black rounded-full px-10 flex items-center gap-2 font-extrabold text-3xl md:text-2xl sm:text-lg'>
							<img
								src={Mail}
								alt=''
							/>
							Mail Handling
						</span>
						<span className=''>
							<img
								src={Members6}
								alt=''
								className='w-44 h-20 border-[3px] md:border-2 border-black rounded-full md:hidden sm:hidden'
							/>
						</span>
					</div>

					<div className='flex flex-col items-center gap-10 font-extrabold lg:w-1/2 text-4xl md:text-2xl sm:text-lg'>
						<p className='pt-10'>
							That’s just the beginning, see the entire range of Hotdesk
							membership amenities.
						</p>

						<Button>
							<h2 className='px-7'>Book A Tour</h2>
						</Button>
					</div>
				</div>
				<div></div>
			</div>
		</>
	)
}
