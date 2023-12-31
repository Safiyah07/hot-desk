import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Squash as Hamburger } from 'hamburger-react'
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
			title: 'About',
			link: '/about',
		},
		{
			id: 2,
			title: 'Membership',
			link: '/memberships',
		},
		{
			id: 3,
			title: 'Locations',
			link: '/locations',
		},
		{
			id: 4,
			title: 'Facilities',
			link: '/facilities',
		},
		{
			id: 5,
			title: 'Contact',
			link: '/contact',
		},
	]

	return (
		<>
			<ul
				onClick={menuDisplay}
				className={`${
					showMenu
						? 'absolute opacity-0 md:-top-[350px] sm:-top-[400px]'
						: 'top-[100px] sm:top-[75px] absolute '
				} py-5 p-2 bg-base-100 w-[97vw] md:w-[91vw] sm:w-[90vw] z-10 left-6 text-xl font-bold flex justify-center flex-col transition-all ease-in-out  duration-500 lg:hidden`}
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
			<div
				className='relative z-20 flex items-center justify-between px-6 py-4 bg-base-100'
				id='top'
			>
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

				<div className='md:flex md:gap-4 md:items-center sm:block lg:hidden'>
					<Link
						to='/book-tour'
						className='sm:hidden'
					>
						<Button>Book A Tour</Button>
					</Link>
					<div className='lg:hidden'>
						<label className='cursor-pointer'>
							{showMenu ? (
								<Hamburger
									toggled={!showMenu}
									toggle={menuDisplay}
									size='30'
									color='black'
								/>
							) : (
								<Hamburger
									toggled={!showMenu}
									toggle={menuDisplay}
									size='30'
									color='black'
								/>
							)}
						</label>
					</div>
				</div>
			</div>
		</>
	)
}
