import BlackButton from './shared/BlackButton'

export default function GetInTouch() {
	return (
		<>
			<div className='flex flex-col text-black text-center py-24 bg-gradient-to-br from-[#c7f092] via-white to-[#9492f0]'>
				<h2 className='lg:text-[44px] md:text-[2.3rem] sm:text-2xl font-black uppercase lg:w-1/2 m-auto sm:w-full md:px-4 sm:px-4'>
					HOW CAN HOTDESK WORK FOR YOUR TEAM?
				</h2>
				<p className='pb-20 text-3xl font-extrabold md:text-xl sm:text-lg sm:pb-10 sm:px-3'>
					Hit the form and we’ll be in touch to discuss.
				</p>

				<form className='flex flex-col items-center justify-center m-auto sm:w-[90%]'>
					<div className='flex justify-center w-full lg:gap-20 md:flex-col sm:flex-col'>
						<div className='flex flex-col lg:w-1/2'>
							<label className='mb-4 text-sm font-black text-left uppercase'>
								Your Name
							</label>
							<input
								type='text'
								name='Name'
								id='Name'
								className='h-16 mb-4 border'
							/>
						</div>

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
					</div>

					<div className='flex justify-center gap-20'>
						<div className='flex flex-col md:w-[90vw] sm:w-[87vw] lg:w-[65.7vw]'>
							<label className='mb-4 text-sm font-black text-left uppercase'>
								Company name (Optional)
							</label>
							<input
								type='text'
								name='company-name'
								id='company-name'
								className='h-16 mb-4 border'
							/>

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
								<BlackButton>
									submit form
								</BlackButton>
							</div>

							<p className='text-lg font-extrabold'>See you soon! ✌</p>
						</div>
					</div>
				</form>
			</div>
		</>
	)
}
