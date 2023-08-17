import darkLogo from '../../assets/dark-logo.svg'
import Button from './button'

export default function navbar() {
	return (
		<>
			<div className='flex items-center justify-between bg-base-100 px-6 py-4'>
				<div className='flex flex-row'>
					<img
						src={darkLogo}
						alt=''
					/>

					<ul className='flex gap-x-10 pl-12 font-extrabold text-base'>
						<li className='cursor-pointer transition ease-in-out hover:text-[#d1d1d1]'>
							<a>Membership</a>
						</li>
						<li className='cursor-pointer transition ease-in-out hover:text-[#d1d1d1]'>
							<a>Locations</a>
						</li>
						<li className='cursor-pointer transition ease-in-out hover:text-[#d1d1d1]'>
							<a>Facilities</a>
						</li>
						<li className='cursor-pointer transition ease-in-out hover:text-[#d1d1d1]'>
							<a>News</a>
						</li>
						<li className='cursor-pointer transition ease-in-out hover:text-[#d1d1d1]'>
							<a>Contacts</a>
						</li>
					</ul>
				</div>
				<Button className=''>Book A Tour</Button>
			</div>
		</>
	)
}
