import { createFileRoute } from '@tanstack/react-router'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

import NoteList from '@/features/notes/components/noteList'

export const Route = createFileRoute('/')({ component: Index })

function Index() {
  return (
    <div className="flex justify-center items-start min-h-screen bg-muted py-8">
      <Card className="w-full max-w-2xl shadow-lg">
        <CardHeader>
          <CardTitle>My Notes</CardTitle>
        </CardHeader>
        <CardContent>
          <NoteList />
        </CardContent>
      </Card>
    </div>
  )
}