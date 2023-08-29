export default function Slider() {
	return (
		<>
			<div className='relative w-full overflow-hidden text-white bg-black lg:py-40 md:py-16 sm:py-12 lg:text-5xl md:text-3xl sm:text-xl'>
				<div className='flex gap-16 pb-16 font-extrabold tracking-wider uppercase marquee-content sm:text-center'>
					<span>Hawthorn</span>
					<span>Richmond</span>
					<span>SouthYarra</span>
					<span className='flex items-center justify-center gap-3'>
						Winsor{' '}
						<h2 className='p-5 text-xl badge badge-white lg:relative lg:bottom-2'>
							new!
						</h2>
					</span>
					<span>Hawthorn</span>
					<span>Richmond</span>
					<span>SouthYarra</span>
					<span className='flex items-center justify-center gap-3'>
						Winsor{' '}
						<h2 className='p-5 text-xl lg:relative lg:bottom-2 badge badge-white'>
							new!
						</h2>
					</span>
				</div>

				<p className='flex justify-center px-4 font-bold text-center'>
					New creative co-working spaces opening in 2023.
				</p>
			</div>
		</>
	)
}
