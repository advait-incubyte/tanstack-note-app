import type { Note } from "../types"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import removeMarkdown from "remove-markdown";

interface NoteProps {
    note: Note
}

const NoteCard: React.FC<NoteProps> = ({ note }) => {
    const { title, content } = note
    return (
        <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
                <CardTitle className="text-xl">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-gray-600 overflow-hidden text-ellipsis whitespace-nowrap">{removeMarkdown(content).slice(0, 100)}</p>
            </CardContent>
        </Card>
    )
}

export default NoteCard