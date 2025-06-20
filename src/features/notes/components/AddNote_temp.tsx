import type { Note } from "../types"

interface AddNoteProps {
    note: Note,
    onSave: () => void
}

const AddNote: React.FC<AddNoteProps> = ({ note, onSave }) => {
    return (
        <div>
            <h1>Add Note</h1>
        </div>
    )
}

export default AddNote