import type { Note } from "../types"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

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
                <p className="text-gray-600">{content}</p>
            </CardContent>
        </Card>
    )
}

export default NoteCard