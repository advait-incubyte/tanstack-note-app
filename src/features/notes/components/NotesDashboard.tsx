import { Button } from "@/components/ui/button"
import NoteList from "./NoteList"
import NotesService from "../api/notesService";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const NotesDashboard: React.FC = () => {
    const queryClient = useQueryClient();
    const invalidateNotes = () => queryClient.invalidateQueries({ queryKey: ['notes'] });

    const createNoteMutation = useMutation({
        mutationFn: NotesService.createNote,
        onSuccess: invalidateNotes
      });

    const handleCreateNote = () => {
        createNoteMutation.mutate({
          title: 'New Note',
          content: 'This is a test note.',
        });
      };

    return (
        <div className="flex flex-col items-center py-12 px-4">
            <div className="flex justify-end w-full">
                <Button onClick={handleCreateNote} disabled={createNoteMutation.isPending}>
                    Create Note
                </Button>
            </div>
            <NoteList />
        </div>
    )
}

export default NotesDashboard