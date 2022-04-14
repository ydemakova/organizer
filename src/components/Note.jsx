function Note(props) {
	function deleteNote() {
		props.deleteNote(props.id)
	}

	return (
		<div className="note">
			<h1>{props.title}</h1>
			<p>{props.text}</p>
			<button onClick={deleteNote}>Delete</button>
		</div>
	)
}

export default Note
