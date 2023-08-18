import PropTypes from 'prop-types'

export default function WhiteButton({ children }) {
	return (
		<div className='bg-white font-bold w-inherit text-sm cursor-pointer text-black p-6 uppercase hover:bg-transparent hover:text-white border-2 border-white transition ease-in-out'>
			<h2>{children}</h2>
		</div>
	)
}

WhiteButton.propTypes = {
	children: PropTypes.any,
}
