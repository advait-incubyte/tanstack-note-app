import type { Note, CreateNoteDTO, UpdateNoteDTO } from '../types'

const NEST_API_URL = import.meta.env.NEST_API_URL || 'http://localhost:3000'

class NotesService {
  static getNotes = async () : Promise<Note[]> => {
    const response = await fetch(`${NEST_API_URL}/notes`)
    return response.json()
  }

  static getNote = async (id: string) : Promise<Note> => {
    const response = await fetch(`${NEST_API_URL}/notes/${id}`)
    return response.json()
  }

  static createNote = async (note: CreateNoteDTO) : Promise<Note> => {
    const response = await fetch(`${NEST_API_URL}/notes`, {
      method: 'POST',
      body: JSON.stringify(note),
    })
    return response.json()
  }

  static updateNote = async (id: string, note: UpdateNoteDTO) : Promise<Note> => {
    const response = await fetch(`${NEST_API_URL}/notes/${id}`, {
      method: 'PUT',
      body: JSON.stringify(note),
    })
    return response.json()
  }

  static deleteNote = async (id: string) : Promise<void> => {
    await fetch(`${NEST_API_URL}/notes/${id}`, {
      method: 'DELETE',
    })
  }
}

export default NotesService
