import { Button } from "@/components/ui/button"
import NoteList from "./NoteList"
import { useNavigate } from "@tanstack/react-router";

const NotesDashboard: React.FC = () => {
  const navigate = useNavigate();

  const navigateToNewNote = () => {
    navigate({ to: "/notes/new" });
  }

  return (
      <div className="flex flex-col items-center py-12 px-4">
          <div className="flex justify-end w-full">
              <Button onClick={navigateToNewNote}>
                  Create Note
              </Button>
          </div>
          <NoteList />
      </div>
  )
}

export default NotesDashboard