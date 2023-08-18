import { useScroll, useTransform } from 'framer-motion'

export default function Slider() {
	const { scrollYProgress } = useScroll()
	const x = useTransform(scrollYProgress, [0, 1], [0, 60])

	return (
		<>
			<div className='bg-black w-full lg:py-40 md:py-16 sm:py-12 lg:text-5xl md:text-3xl sm:text-xl text-white'>
				<marquee scrollamount='10'>
					<div className='flex gap-10 uppercase  tracking-wider pb-16 font-extrabold overflow-hidden scroll-text sm:text-center'>
						<span>Hawthorn</span>
						<span>Richmond</span>
						<span>South Yarra</span>
						<span className='flex items-center gap-3'>
							Winsor <h2 className='badge badge-white p-5 text-xl'>new!</h2>
						</span>
					</div>
				</marquee>
				<p className='flex justify-center font-bold text-center px-4'>
					New creative co-working spaces opening in 2023.
				</p>
			</div>
		</>
	)
}
