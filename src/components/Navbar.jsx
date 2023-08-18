import { useState } from 'react'
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5'
import darkLogo from '../assets/dark-logo.svg'
import Button from './shared/BlackButton'

export default function Navbar() {
	const [showMenu, setShowMenu] = useState(true)

	const menuDisplay = () => {
		setShowMenu((prevState) => !prevState)
	}
	const navbarItems = [
		{
			id: 1,
			title: 'Membership',
		},
		{
			id: 2,
			title: 'Locations',
		},
		{
			id: 3,
			title: 'Facilities',
		},
		{
			id: 4,
			title: 'News',
		},
		{
			id: 5,
			title: 'Contacts',
		},
	]
	return (
		<>
			<div className='flex items-center justify-between bg-base-100 px-6 py-4'>
				<div className='flex flex-row'>
					<img
						src={darkLogo}
						alt=''
						className='sm:w-24'
					/>

					<ul className='lg:flex gap-x-10 pl-12 font-extrabold text-xl md:hidden sm:hidden'>
						{navbarItems.map((Item) => (
							<li
								key={Item.id}
								className='cursor-pointer transition ease-in-out hover:text-[#d1d1d1]'
							>
								<a>{Item.title}</a>
							</li>
						))}
					</ul>
				</div>
				<div className='md:hidden sm:hidden'>
					<Button>Book A Tour</Button>
				</div>

				<div className='dropdown md:flex md:gap-4 md:items-center sm:block lg:hidden'>
					<div className='sm:hidden'>
						<Button>Book A Tour</Button>
					</div>
					<div className='lg:hidden'>
						<label
							tabIndex={0}
							className='cursor-pointer'
							onClick={menuDisplay}
						>
							<div className='p-2 rounded-xl sm:p-1 transition ease-in-out swap swap-rotate '>
								{showMenu ? (
									<IoMenuOutline
										size='40px'
										className='swap-off fill-current'
									/>
								) : (
									<IoCloseOutline
										size='40px'
										className='swap-off fill-current'
									/>
								)}
							</div>
						</label>

						<ul
							tabIndex={0}
							onClick={menuDisplay}
							className={
								showMenu
									? 'hidden'
									: `
										absolute md:-right-8 sm:-right-0 md:mt-5 mt- sm:mt-[18px] py-5 p-2 bg-base-100 w-[97vw] md:w-[91vw] md:mx-10 sm:w-[90vw] z-10 flex justify-center flex-col transition ease-in-out text-xl font-bold
									`
							}
						>
							{navbarItems.map((Item) => (
								<li
									key={Item.id}
									className='capitalize'
								>
									<a className='flex items-center px-2 pt-4 pb-[10px] hover:text-[#d1d1d1] transition ease-in-out'>
										{Item.title}
									</a>
								</li>
							))}

							<div className='bg-black font-bold text-sm cursor-pointer text-white p-4 mt-4 text-center uppercase hover:bg-transparent hover:text-black border-2 border-black transition ease-in-out md:hidden'>
								<h2>Book A Tour</h2>
							</div>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}
