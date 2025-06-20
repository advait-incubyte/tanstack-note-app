import { useQuery } from "@tanstack/react-query";
import NotesService from "../api/notesService";
import NoteCard from "./NoteCard";
import { Link } from "@tanstack/react-router";

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>
  )
}

const Error: React.FC<{ error: Error }> = ({ error }) => {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="text-red-500">An error occurred: {error.message}</div>
    </div>
  )
}

const NoteList: React.FC = () => {
  const { data: notes, isLoading, error } = useQuery({
    queryKey: ['notes'],
    queryFn: NotesService.getNotes,
  });
  
  if (isLoading) return <Loader />
  if (error) return <Error error={error} />

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {notes?.map((note) => (
        <Link to="/notes/$noteId" params={{ noteId: note.id }} key={note.id}>
          <NoteCard note={note} />
        </Link>
      ))}
    </ul>
  );
}

export default NoteList