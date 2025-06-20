import type { CreateNoteDTO, Note, UpdateNoteDTO } from "../types"
import { useState } from "react";
import '@mdxeditor/editor/style.css'
import { useMutation, useQueryClient } from "@tanstack/react-query";
import NotesService from "../api/notesService";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MarkdownEditor from "@/components/markdown/MarkdownEditor";

interface AddNoteProps {
    note: Note | undefined,
    onSave: () => void
}

const AddNote: React.FC<AddNoteProps> = ({ note, onSave }) => {
    const [title, setTitle] = useState(note?.title || "");
    const [content, setContent] = useState(note?.content || "");

    const queryClient = useQueryClient();
    const createNoteMutation = useMutation({
        mutationFn: (payload: CreateNoteDTO | UpdateNoteDTO) => NotesService.createNote(payload),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['notes'] })
            onSave()
        }
    });

    const updateNoteMutation = useMutation({
        mutationFn: (payload: UpdateNoteDTO) => NotesService.updateNote(note!.id, payload),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['notes'] })
            onSave()
        }
    });

    const handleSave = () => {
        let payload: CreateNoteDTO | UpdateNoteDTO = {
            title,
            content,
        }
        if (note) {
            updateNoteMutation.mutate(payload);
        } else {
            createNoteMutation.mutate(payload);
        }
    }

    return (
        <div className="max-w-7xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">{note ? "Edit Note" : "Add Note"}</h1>
            <Card className="shadow-lg">
                <CardContent>
                    <input
                        className="px-2 mb-4 border-none shadow-none focus:ring-0 focus:border-transparent focus:outline-none bg-transparent text-3xl font-bold placeholder-gray-400"
                        placeholder="Title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <MarkdownEditor
                        className="mb-4"
                        markdown={content}
                        onChange={setContent}
                        placeholder="Write your note in markdown..."
                    />
                </CardContent>
                <CardFooter>
                    <Button onClick={handleSave}>
                        Save
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}

export default AddNote