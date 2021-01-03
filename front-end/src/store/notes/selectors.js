export const NotesSelector = ({notes}) => notes

export const NoteSelector = (noteID) => ({notes}) => notes.find((note) => noteID === note._id)
