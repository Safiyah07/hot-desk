import { AnimatePresence, motion } from 'framer-motion'
import Hero3 from '../../assets/membership/hero3.jpg'
import Hero4 from '../../assets/membership/hero4.jpg'
import BlackButton from '../shared/BlackButton'

export default function BooktourForm() {
	return (
		<>
			<div className='text-black bg-gradient-to-br from-[#92f0ce] via-white to-[#c7f092] py-24'>
				<div className='flex flex-col text-center '>
					<div className='lg:text-[84px] md:text-[40px] sm:text-[25px] font-extrabold text-black uppercase flex justify-center flex-col items-center pb-10'>
						<AnimatePresence>
							<h2>
								<div className='flex justify-center gap-3 pb-3'>
									<motion.div
										initial={{ opacity: 0 }}
										viewport={{ once: false }}
										animate={{ opacity: 1 }}
										mode='wait'
										transition={{ duration: 1, delay: 0.7 }}
										className='px-4 bg-white border-4 border-black sm:border-2'
									>
										Come
									</motion.div>
									<motion.div
										initial={{ opacity: 0 }}
										viewport={{ once: false }}
										animate={{ opacity: 1 }}
										mode='wait'
										transition={{ duration: 1, delay: 0.7 }}
										className='px-4 bg-white border-4 border-black sm:border-2'
									>
										See
									</motion.div>
									<motion.div
										initial={{ opacity: 0 }}
										viewport={{ once: false }}
										animate={{ opacity: 1 }}
										mode='wait'
										transition={{ duration: 1, delay: 0.9 }}
										className='px-4 md:hidden sm:hidden'
									>
										<img
											src={Hero3}
											alt=''
											className='border-4 border-black sm:border-2 w-32 h-32 rounded-[50%]'
										/>
									</motion.div>
								</div>
								<div className='flex items-center justify-center gap-3'>
									<motion.div
										initial={{ opacity: 0 }}
										viewport={{ once: false }}
										animate={{ opacity: 1 }}
										mode='wait'
										transition={{ duration: 1, delay: 0.9 }}
										className='px-4 md:hidden sm:hidden'
									>
										<img
											src={Hero4}
											alt=''
											className='h-32 border-4 border-black rounded-full sm:border-2 w-52'
										/>
									</motion.div>
									<motion.div
										initial={{ opacity: 0 }}
										viewport={{ once: false }}
										animate={{ opacity: 1 }}
										mode='wait'
										transition={{ duration: 1, delay: 0.7 }}
										className='px-4 bg-white border-4 border-black sm:border-2'
									>
										Hotdesk.
									</motion.div>
								</div>
							</h2>
							<motion.div
								initial={{ opacity: 0 }}
								viewport={{ once: false }}
								animate={{ opacity: 1 }}
								mode='wait'
								transition={{ duration: 1, delay: 0.7 }}
								className='py-20 text-4xl font-extrabold normal-case md:text-xl sm:text-lg sm:pb-10 sm:mx-3 w-[50%]'
							>
								Let us show you how Hotdesk can transform your work day.
							</motion.div>
						</AnimatePresence>
					</div>

					<form className='flex flex-col items-center justify-center m-auto sm:w-[90%]'>
						<div className='flex justify-center gap-20'>
							<div className='flex flex-col md:w-[90vw] sm:w-[87vw] lg:w-[65.7vw]'>
								<label className='mb-4 text-sm font-black text-left uppercase'>
									Your Name
								</label>
								<input
									type='text'
									name='name'
									id='name'
									className='h-16 mb-4 border'
								/>

								<label className='mb-4 text-sm font-black text-left uppercase'>
									Company name (Optional)
								</label>
								<input
									type='text'
									name='company-name'
									id='company-name'
									className='h-16 mb-4 border'
								/>

								<div className='flex justify-center w-full lg:gap-20 md:flex-col sm:flex-col'>
									<div className='flex flex-col lg:w-1/2'>
										<label className='mb-4 text-sm font-black text-left uppercase'>
											Email Address
										</label>
										<input
											type='email'
											name='email'
											id='email'
											className='h-16 mb-4 border'
										/>
									</div>

									<div className='flex flex-col lg:w-1/2'>
										<label className='mb-4 text-sm font-black text-left uppercase'>
											Contact Number (optional)
										</label>
										<input
											type='number'
											name='number'
											id='number'
											className='h-16 mb-4 border'
										/>
									</div>
								</div>

								<div className='flex justify-center w-full lg:gap-20 md:flex-col sm:flex-col'>
									<div className='relative flex flex-col lg:w-1/2'>
										<label className='mb-4 text-sm font-black text-left uppercase'>
											Location
										</label>
										<select
											name=''
											id=''
											className='relative h-16 px-4 mb-4 font-black border'
										>
											<option
												value=''
												className='font-black'
											>
												Choose an option
											</option>
											<option
												value=''
												className='font-black'
											>
												First Choice
											</option>
											<option
												value=''
												className='font-black'
											>
												Second Choice
											</option>
											<option
												value=''
												className='font-black'
											>
												Third Choice
											</option>
										</select>
									</div>

									<div className='relative flex flex-col lg:w-1/2'>
										<label className='mb-4 text-sm font-black text-left uppercase'>
											Preferred Time
										</label>
										<select
											name=''
											id=''
											className='h-16 px-4 mb-4 font-black border '
										>
											<option
												value=''
												className='font-black'
											>
												Choose an option
											</option>
											<option
												value=''
												className='font-black'
											>
												First Choice
											</option>
											<option
												value=''
												className='font-black'
											>
												Second Choice
											</option>
											<option
												value=''
												className='font-black'
											>
												Third Choice
											</option>
										</select>
									</div>
								</div>

								<label className='mb-4 text-sm font-black text-left uppercase'>
									Comments or questions
								</label>
								<textarea
									name=''
									id=''
									maxLength={5000}
									cols='30'
									rows='10'
									className='mb-4 border'
								></textarea>

								<div className='my-10'>
									<BlackButton>submit form</BlackButton>
								</div>

								<p className='text-lg font-extrabold'>See you soon! ✌</p>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}
