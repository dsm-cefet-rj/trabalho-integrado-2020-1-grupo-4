import { normalizeNotes, normalizeNoteWithS3 } from "./normalizers";

export const NOTES_REDUCER_SET_NOTES = 'NOTES_REDUCER_SET_NOTES'
export const NOTES_REDUCER_SET_NOTES_WITH_S3 = 'NOTES_REDUCER_SET_NOTES_WITH_S3'
export const NOTES_REDUCER_SET_NOTE_WITH_S3 = 'NOTES_REDUCER_SET_NOTE_WITH_S3'

const INITIAL_STATE = {

  notes: [],
  note: null
};


export const notesReducer = ( action, state = INITIAL_STATE) => {
  if(action){
    switch (action.type) {

      case NOTES_REDUCER_SET_NOTES:
        return {
          ...state, notes: normalizeNotes(action.payload),
        };
  
      case NOTES_REDUCER_SET_NOTES_WITH_S3:
        return {
          ...state, notes: action.payload.map(normalizeNoteWithS3),
        };
  
      case NOTES_REDUCER_SET_NOTE_WITH_S3:
        return {
          ...state, note: normalizeNoteWithS3(action.payload),
        };
  
      default: return state;
    }
  }

  return state;
};

