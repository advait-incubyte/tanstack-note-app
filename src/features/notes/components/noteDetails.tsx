import type { Note } from "../types"

interface NoteDetailsProps {
    note: Note
}

const NoteDetails: React.FC<NoteDetailsProps> = ({ note }) => {
    return (
        <article className="prose prose-lg max-w-2xl mx-auto bg-white/80 rounded-xl p-8 mt-12 shadow-sm">
            <h1 className="text-4xl font-bold mb-4">{note.title}</h1>
            <div className="text-gray-700 whitespace-pre-line">{note.content}</div>
        </article>
    )
}

export default NoteDetails