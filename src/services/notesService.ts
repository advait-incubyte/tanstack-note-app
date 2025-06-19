const NEST_API_URL = import.meta.env.NEST_API_URL || 'http://localhost:3000'

export interface Note {
  id: string
  title: string
  content: string
}

class NotesService {
  static getNotes = async () : Promise<Note[]> => {
    const response = await fetch(`${NEST_API_URL}/notes`)
    return response.json()
  }

  static getNote = async (id: string) : Promise<Note> => {
    const response = await fetch(`${NEST_API_URL}/notes/${id}`)
    return response.json()
  }

  static createNote = async (note: Omit<Note, 'id'>) : Promise<Note> => {
    const response = await fetch(`${NEST_API_URL}/notes`, {
      method: 'POST',
      body: JSON.stringify(note),
    })
    return response.json()
  }

  static updateNote = async (note: Note) : Promise<Note> => {
    const response = await fetch(`${NEST_API_URL}/notes/${note.id}`, {
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
