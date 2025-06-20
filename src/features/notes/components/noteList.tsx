import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import NotesService from "../api/notesService";

const NoteList: React.FC = () => {
    const queryClient = useQueryClient();
  const invalidateNotes = () => queryClient.invalidateQueries({ queryKey: ['notes'] });

  const { data: notes, isLoading, error } = useQuery({
    queryKey: ['notes'],
    queryFn: NotesService.getNotes,
  });

  const createNoteMutation = useMutation({
    mutationFn: NotesService.createNote,
    onSuccess: invalidateNotes
  });
  
  const deleteNoteMutation = useMutation({
    mutationFn: NotesService.deleteNote,  
    onSuccess: invalidateNotes
  });

  const handleCreateNote = () => {
    createNoteMutation.mutate({
      title: 'New Note',
      content: 'This is a test note.',
    });
  };
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {(error as Error).message}</div>;

  return (
    <div>
      <h1>My Notes</h1>
      <button onClick={handleCreateNote} disabled={createNoteMutation.isPending}>
        {createNoteMutation.isPending ? 'Creating...' : 'Create Note'}
      </button>
      <ul>
        {notes?.map((note) => (
          <li key={note.id}>
            <strong>{note.title}</strong>: {note.content}
            <button onClick={() => deleteNoteMutation.mutate(note.id)} style={{marginLeft: '10px'}}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteList