import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Note from './components/Note'
import NewNote from './components/NewNote'

function App() {
	const [notes, setNotes] = useState([])

	function addNote(newNote) {
		const newNotes = [newNote, ...notes]
		setNotes(newNotes)
	}

	function deleteNote(id) {
		setNotes((notesArray) => {
			return notesArray.filter((note, index) => {
				return index !== id
			})
		})
	}

	return (
		<div className="App">
			<Header />
			<NewNote addNote={addNote} />
			{notes.map((note, index) => (
				<Note key={index} title={note.title} text={note.text} deleteNote={deleteNote} id={index} />
			))}

			<Footer />
		</div>
	)
}

export default App
