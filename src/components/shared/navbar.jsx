import darkLogo from '../../assets/dark-logo.svg'

export default function navbar() {
	return (
		<>
			<div className='flex items-center justify-between bg-base-100 py-6'>
				<div className='flex flex-row'>
					<img
						src={darkLogo}
						alt=''
					/>

					<ul className='menu menu-horizontal pl-7 font-semibold text-base'>
						<li>
							<a>Membership</a>
						</li>
						<li>
							<a>Locations</a>
						</li>
						<li>
							<a>Facilities</a>
						</li>
						<li>
							<a>News</a>
						</li>
						<li>
							<a>Contacts</a>
						</li>
					</ul>
				</div>
				<div className=''>
					<h2 className='bg-black font-bold text-sm cursor-pointer text-white p-6 uppercase'>
						Book A Tour
					</h2>
				</div>
			</div>
		</>
	)
}
