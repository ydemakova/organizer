import { useState } from 'react'

function NewNote(props) {
	const noteDefault = {
		title: '',
		text: '',
	}

	const [newNote, setNewNote] = useState(noteDefault)

	function handleChange(event) {
		const { name, value } = event.target
		setNewNote((previousValue) => {
			return {
				...previousValue,
				[name]: value,
			}
		})
	}

	function addNote(event) {
		event.preventDefault()
		props.addNote(newNote)
		setNewNote(noteDefault)
	}

	return (
		<form action="">
			<input
				onChange={handleChange}
				type="text"
				name="title"
				placeholder="Title"
				value={newNote.title}
				autocomplete="false"
			/>
			<input
				onChange={handleChange}
				type="text"
				name="text"
				placeholder="Take a note"
				value={newNote.text}
				autocomplete="false"
			/>
			<button onClick={addNote}>Add</button>
		</form>
	)
}

export default NewNote
