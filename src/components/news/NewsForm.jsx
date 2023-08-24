import { Link } from 'react-router-dom'
import BlackButton from '../shared/BlackButton'

export default function NewsForm() {
	return (
		<>
			<div className='text-black bg-gradient-to-br from-[#9492f0] via-white to-[#92f0ce] py-24'>
				<div className='lg:bg-arrow bg-none bg-no-repeat lg:bg-[top_right_15rem] flex flex-col  text-center'>
					<h2 className='lg:text-[44px] md:text-[2rem] sm:text-xl font-black uppercase lg:w-[55%] m-auto sm:w-full md:px-12 sm:px-9 pb-8 sm:pb-2'>
						CURATED CONTENT DIRECT TO YOUR INBOX.
					</h2>
					<p className='pb-20 text-3xl font-extrabold md:text-xl sm:text-lg sm:pb-10 sm:px-3'>
						No spam – just great news, insight and events.
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
								<div className='flex items-center self-start gap-4 font-black'>
									<input
										type='checkbox'
										name=''
										id=''
										className='w-5 h-5'
									/>
									<p>
										I have read and agree to the{' '}
										<Link to='/' className='underline'>Privacy Policy</Link>
									</p>
								</div>

						<div className='flex justify-center gap-20'>
							<div className='flex flex-col md:w-[90vw] sm:w-[87vw] lg:w-[65.7vw]'>
								<div className='my-10'>
									<BlackButton>Subscribe</BlackButton>
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
