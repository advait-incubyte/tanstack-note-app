import { createFileRoute } from '@tanstack/react-router'
import NotesDashboard from '@/features/notes/components/NotesDashboard'

export const Route = createFileRoute('/')({ component: Index })

function Index() {
    return (
        <NotesDashboard />
    )
}