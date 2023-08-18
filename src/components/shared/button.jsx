export default function button({ children }) {
	return (
		<div className='bg-black font-bold w-fit text-sm cursor-pointer text-white p-6 uppercase hover:bg-transparent hover:text-black border-2 border-black transition ease-in-out'>
			<h2>{children}</h2>
		</div>
	)
}
