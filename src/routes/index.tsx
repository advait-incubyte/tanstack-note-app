import { createFileRoute } from '@tanstack/react-router'
import NotesDashboard from '@/features/notes/components/notesDashboard'

export const Route = createFileRoute('/')({ component: Index })

function Index() {
    return (
        <div className="min-h-screen bg-muted flex flex-col items-center py-12 px-4">
            <div className="w-full max-w-7xl">
                <h1 className="text-4xl font-bold mb-8 text-center">TanStack Notes App</h1>
                <NotesDashboard />
            </div>
        </div>
    )
}