import type { Note } from "../types"

interface AddNoteProps {
    note: Note
}

const AddNote: React.FC<AddNoteProps> = ({ note }) => {
    return (
        <div>
            <h1>Add Note</h1>
        </div>
    )
}

export default AddNote