import AddNote from '@/features/notes/components/AddNote'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/notes/new')({
  component: RouteComponent,
})

function RouteComponent() {
  return <AddNote note={undefined} onSave={() => {}} />
}
