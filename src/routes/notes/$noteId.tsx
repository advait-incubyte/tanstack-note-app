import { createFileRoute } from '@tanstack/react-router'
import SingleNoteView from '@/features/notes/components/singleNoteView'

export const Route = createFileRoute('/notes/$noteId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <SingleNoteView />
}
