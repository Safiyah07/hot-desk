import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Luminous from '../../assets/Luminous.svg'
import NLogo from '../../assets/NLogo.svg'
import LogoIpsum from '../../assets/LogoIpsum.svg'
import Shell from '../../assets/Shell.svg'
import Rise from '../../assets/Rise.svg'

export default function Companies() {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.5,
	})

	return (
		<div
			ref={ref}
			className='flex flex-col text-white text-center py-24 bg-gradient-to-b from-[#222] to-[#000]'
		>
			<h2 className='lg:text-[45px] md:text-[1.8rem] sm:text-xl font-black uppercase lg:pb-20 pb-14 bg-GraphicUnderline bg-no-repeat lg:bg-[center_bottom_4rem] bg-[center_bottom_2rem]'>
				JOIN OVER 200 COMPANIES
			</h2>
			<div className='flex justify-center gap-24 md:flex-wrap sm:flex-wrap md:gap-16 sm:gap-16 sm:px-10 lg:pb-20 pb-14'>
				<motion.img
					initial='hidden'
					viewport={{ once: true }}
					animate={{ opacity: inView ? 1 : 0 }}
					transition={{ duration: 1, delay: 0.2 }}
					src={Luminous}
					alt=''
				/>
				<motion.img
					initial='hidden'
					viewport={{ once: true }}
					animate={{ opacity: inView ? 1 : 0 }}
					transition={{ duration: 1, delay: 0.4 }}
					src={NLogo}
					alt=''
				/>
				<motion.img
					initial='hidden'
					viewport={{ once: true }}
					animate={{ opacity: inView ? 1 : 0 }}
					transition={{ duration: 1, delay: 0.6 }}
					src={LogoIpsum}
					alt=''
				/>
				<motion.img
					initial='hidden'
					viewport={{ once: true }}
					animate={{ opacity: inView ? 1 : 0 }}
					transition={{ duration: 1, delay: 0.8 }}
					src={Shell}
					alt=''
				/>
				<motion.img
					initial='hidden'
					viewport={{ once: true }}
					animate={{ opacity: inView ? 1 : 0 }}
					transition={{ duration: 1, delay: 1 }}
					src={Rise}
					alt=''
				/>
			</div>
			<p className='text-3xl font-extrabold md:text-xl sm:text-lg'>
				They choose Hotdesk to get their best work done.
			</p>
		</div>
	)
}
