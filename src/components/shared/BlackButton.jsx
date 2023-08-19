import PropTypes from 'prop-types'

export default function BlackButton({ children }) {
	return (
		<div className='p-6 text-sm font-bold text-white transition ease-in-out bg-black border-2 border-black cursor-pointer w-inherit hover:bg-transparent hover:text-black'>
			<button className='uppercase'>{children}</button>
		</div>
	)
}

BlackButton.propTypes = {
	children: PropTypes.any,
}
