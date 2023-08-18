import WhiteButton from './shared/WhiteButton'

export default function DemandOptions() {
	return (
		<>
			<div className='bg-black text-white lg:px-20 px-32 py-10 flex flex-col font-extrabold'>
				<h2 className='lg:text-[50px] md:text-[2.3rem] sm:text-3xl font-black uppercase lg:w-[70%] m-auto text-center lg:bg-demandGraphic bg-no-repeat bg-[bottom_right_6rem]'>
					ON-DEMAND OPTIONS FOR TEAMS OF ALL SIZES.
				</h2>

				<div className='flex md:flex-col gap-20 py-20'>
					<div className='border-2 border-white py-6 lg:w-1/2'>
						<p className='lg:text-[54px] md:text-[2.5rem] sm:text-3xl font-black uppercase border-b-2 w-full px-10'>
							Solo
						</p>
						<p className='border-b-2 py-6 text-2xl md:text-2xl sm:text-lg px-10'>
							Workspace options to suit every demand with access to all centres
							and amenities.
						</p>
						<div className='flex border-b-2 py-6 px-5 text-xl font-extrabold md:text-2xl sm:text-lg'>
							<p className='bg-white flex items-center w-auto h-12 rounded-3xl text-black mx-5 px-5'>
								From $250/m
							</p>
							<p className='flex items-center bg-white w-40 h-12 rounded-3xl text-black p-5'>
								1+ User
							</p>
						</div>

						<div className='pt-6 m-auto w-[90%] text-center'>
							<WhiteButton>
								{' '}
								See Solo Plans
							</WhiteButton>
						</div>
					</div>

					<div className='border-2 border-white py-6 lg:w-1/2'>
						<p className='lg:text-[54px] md:text-[2.5rem] sm:text-3xl font-black uppercase border-b-2 w-full px-10'>
							Team
						</p>
						<p className='border-b-2 py-6 text-2xl md:text-2xl sm:text-lg px-10'>
            A coworking plan for your team to work when and where you want.
						</p>
						<div className='flex border-b-2 py-6 px-5 text-xl font-extrabold md:text-2xl sm:text-lg'>
							<p className='bg-white flex items-center w-auto h-12 rounded-3xl text-black mx-5 px-5'>
								From $750/m
							</p>
							<p className='flex items-center bg-white w-40 h-12 rounded-3xl text-black p-5'>
								3+ User
							</p>
						</div>

						<div className='pt-6 m-auto w-[90%] text-center'>
							<WhiteButton>
								{' '}
								See Team Plans
							</WhiteButton>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
