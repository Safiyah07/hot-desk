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

export default function Members() {
	return (
		<>
			<div className='flex flex-col text-center py-24 bg-gradient-to-br from-[#92f0ce] via-white to-[#9492f0]'>
				<h2 className='lg:text-6xl md:text-[2.6rem] sm:text-2xl font-black text-black uppercase'>
					For all HotDesk Members
				</h2>
				<div className='flex flex-col items-center justify-center py-16'>
					<div className='flex gap-10 py-2'>
						<span className=' w-42 h-20 bg-white border-[3px] border-black rounded-full px-10 flex items-center gap-2 font-extrabold text-3xl'>
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
								className='w-44 h-20 border-[3px] border-black rounded-full'
							/>
						</span>
						<span className=' w-42 h-20 bg-white border-[3px] border-black rounded-full px-10 flex items-center gap-2 font-extrabold text-3xl'>
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
								className='w-20 h-20 border-[3px] border-black rounded-full'
							/>
						</span>
					</div>

					<div className='flex gap-10 py-2'>
						<span className=''>
							<img
								src={Members3}
								alt=''
								className='w-44 h-20 border-[3px] border-black rounded-full'
							/>
						</span>
						<span className=' w-42 h-20 bg-white border-[3px] border-black rounded-full px-10 flex items-center gap-2 font-extrabold text-3xl'>
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
								className='w-20 h-20 border-[3px] border-black rounded-full'
							/>
						</span>
						<span className=' w-42 h-20 bg-white border-[3px] border-black rounded-full px-10 flex items-center gap-2 font-extrabold text-3xl'>
							<img
								src={Internet}
								alt=''
							/>
							Gigabit Internet
						</span>
					</div>

					<div className='flex gap-10 py-2'>
						<span className=' w-42 h-20 bg-white border-[3px] border-black rounded-full px-10 flex items-center gap-2 font-extrabold text-3xl'>
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
								className='w-20 h-20 border-[3px] border-black rounded-full'
							/>
						</span>

						<span className=' w-42 h-20 bg-white border-[3px] border-black rounded-full px-10 flex items-center gap-2 font-extrabold text-3xl'>
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
								className='w-44 h-20 border-[3px] border-black rounded-full'
							/>
						</span>
					</div>
				</div>
				<div></div>
			</div>
		</>
	)
}
