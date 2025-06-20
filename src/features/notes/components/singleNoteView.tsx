import { useQuery } from "@tanstack/react-query"
import { useParams } from "@tanstack/react-router"
import NotesService from "../api/notesService"
import { useState } from "react"
import AddNote from "./AddNote"
import NoteDetails from "./NoteDetails"

const SingleNoteView: React.FC = () => {
    const { noteId } = useParams({ from: '/notes/$noteId' })
    const [isBeingEdited, setIsBeingEdited] = useState(false);

    const { data: note } = useQuery({
        queryKey: ['notes', noteId],
        queryFn: () => NotesService.getNote(noteId)
    })

    if (!note) return <div>Note not found</div>
    
    return isBeingEdited ? (
        <AddNote note={note} onSave={() => setIsBeingEdited(false)} />
    ) : (
        <NoteDetails note={note} onClickEdit={() => setIsBeingEdited(true)} />
    )
}   

export default SingleNoteView