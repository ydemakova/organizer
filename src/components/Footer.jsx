function Footer() {
	const year = new Date().getFullYear()

	return (
		<footer>
			<p>
				Copyright ⓒ Yulia
				{' ' + year}
			</p>
		</footer>
	)
}

export default Footer
