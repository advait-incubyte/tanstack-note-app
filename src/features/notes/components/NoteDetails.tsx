import type { Note } from "../types"
import { Button } from "@/components/ui/button"
import MarkdownViewer from "@/components/markdown/MarkdownViewer"

interface NoteDetailsProps {
    note: Note,
    onClickEdit: () => void,
    onClickDelete: () => void
}

const NoteDetails: React.FC<NoteDetailsProps> = ({ note, onClickEdit, onClickDelete }) => {
    return (
        <article className="prose prose-lg max-w-4xl mx-auto mt-12 relative">
            <div className="absolute right-0 top-0 flex gap-2">
                <Button 
                    variant="outline" 
                    size="sm"
                    onClick={onClickEdit}
                >
                    Edit
                </Button>
                <Button
                    variant="destructive"
                    size="sm"
                    onClick={onClickDelete}
                >
                    Delete
                </Button>
            </div>
            <h1 className="text-4xl font-bold mb-4 pr-24">{note.title}</h1>
            <MarkdownViewer className="text-gray-600 whitespace-pre-line" markdown={note.content} />
        </article>
    )
}

export default NoteDetails