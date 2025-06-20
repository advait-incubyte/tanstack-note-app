import type { Note as NoteType } from "../types"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

interface NoteProps {
    note: NoteType
}

const Note: React.FC<NoteProps> = ({ note }) => {
    const { title, content } = note
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-xl">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-gray-600">{content}</p>
            </CardContent>
        </Card>
    )
}

export default Note