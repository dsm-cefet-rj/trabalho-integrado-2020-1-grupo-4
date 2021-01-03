import { normalizeNotes } from "./normalizers";

export const NOTES_REDUCER_SET_NOTES = 'NOTES_REDUCER_SET_NOTES'
export const NOTES_REDUCER_SEND_NOTES = 'NOTES_REDUCER_SEND_NOTES'
export const NOTES_REDUCER_GET_NOTE = 'NOTES_REDUCER_GET_NOTE'
export const NOTES_REDUCER_DELETE_NOTE = 'NOTES_REDUCER_DELETE_NOTE'

const INITIAL_STATE = []


export const notesReducer = ( state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NOTES_REDUCER_SET_NOTES:
      return [...normalizeNotes(action.payload)]
    case NOTES_REDUCER_SEND_NOTES:
      const normalizedNotes = [...normalizeNotes(action.payload)]
      const normalizedNotesIds = normalizedNotes.map(({_id}) => _id)
      return [
        ...state.filter(({_id}) => !normalizedNotesIds.includes(_id)), ...normalizedNotes
      ];
    case NOTES_REDUCER_DELETE_NOTE:
      const {_id} = action.payload
      return [...state.filter((note) => note._id !== _id)];
    case NOTES_REDUCER_GET_NOTE:
      return [
          ...state, ...normalizeNotes(action.payload)
      ]
    default:
      return state;
  }
};

