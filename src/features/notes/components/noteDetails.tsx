import type { Note } from "../types"
import { Button } from "@/components/ui/button"

interface NoteDetailsProps {
    note: Note,
    setIsBeingEdited: (isBeingEdited: boolean) => void
}

const NoteDetails: React.FC<NoteDetailsProps> = ({ note, setIsBeingEdited }) => {
    return (
        <article className="prose prose-lg max-w-4xl mx-auto mt-12 relative">
            <Button 
                variant="outline" 
                size="sm"
                className="absolute right-0 top-0"
                onClick={() => setIsBeingEdited(true)}
            >
                Edit
            </Button>
            <h1 className="text-4xl font-bold mb-4 pr-12">{note.title}</h1>
            <div className="text-gray-600 whitespace-pre-line">{note.content}</div>
        </article>
    )
}

export default NoteDetails