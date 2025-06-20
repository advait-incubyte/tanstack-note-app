export interface Note {
    id: string
    title: string
    content: string
    createdAt: Date
    updatedAt: Date
}

export type CreateNoteDTO = Pick<Note, 'title' | 'content'>
export type UpdateNoteDTO = CreateNoteDTO