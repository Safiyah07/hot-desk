import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5'
import darkLogo from '../../assets/dark-logo.svg'
import Button from './BlackButton'

export default function Navbar() {
	const [showMenu, setShowMenu] = useState(true)

	const menuDisplay = () => {
		setShowMenu((prevState) => !prevState)
	}

	const navbarItems = [
		{
			id: 1,
			title: 'Membership',
			link: '/memberships',
		},
		{
			id: 2,
			title: 'Locations',
			link: '/locations',
		},
		{
			id: 3,
			title: 'Facilities',
			link: '/facilities',
		},
		{
			id: 4,
			title: 'News',
			link: '/news',
		},
		{
			id: 5,
			title: 'Contact',
			link: '/contact',
		},
	]

	return (
		<>
			<div className='flex items-center justify-between px-6 py-4 bg-base-100' id='top'>
				<div className='flex flex-row'>
					<Link to='/'>
						<img
							src={darkLogo}
							alt=''
							className='sm:w-24'
						/>
					</Link>

					<ul className='pl-12 text-xl font-extrabold lg:flex gap-x-10 md:hidden sm:hidden'>
						{navbarItems.map((Item) => (
							<li
								key={Item.id}
								className='cursor-pointer transition ease-in-out hover:text-[#d1d1d1]'
							>
								<Link to={Item.link}>{Item.title}</Link>
							</li>
						))}
					</ul>
				</div>
				<div className='md:hidden sm:hidden'>
					<Link to='/book-tour'>
						<Button>Book A Tour</Button>
					</Link>
				</div>

				<div className='dropdown md:flex md:gap-4 md:items-center sm:block lg:hidden'>
					<Link
						to='/book-tour'
						className='sm:hidden'
					>
						<Button>Book A Tour</Button>
					</Link>
					<div className='lg:hidden'>
						<label
							tabIndex={0}
							className='cursor-pointer'
							onClick={menuDisplay}
						>
							<div className='p-2 transition ease-in-out rounded-xl sm:p-1 swap swap-rotate '>
								{showMenu ? (
									<IoMenuOutline
										size='40px'
										className='fill-current swap-off'
									/>
								) : (
									<IoCloseOutline
										size='40px'
										className='fill-current swap-off'
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
									<Link
										to={Item.link}
										className='flex items-center px-2 pt-4 pb-[10px] hover:text-[#d1d1d1] transition ease-in-out'
									>
										{Item.title}
									</Link>
								</li>
							))}

							<div className='p-4 mt-4 text-sm font-bold text-center text-white uppercase transition ease-in-out bg-black border-2 border-black cursor-pointer hover:bg-transparent hover:text-black md:hidden'>
								<Link to='/book-tour'>
									<h2>Book A Tour</h2>
								</Link>
							</div>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}