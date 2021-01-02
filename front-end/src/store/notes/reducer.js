import { normalizeNotes } from "./normalizers";

export const NOTES_REDUCER_SET_NOTES = 'NOTES_REDUCER_SET_NOTES'
export const NOTES_REDUCER_SEND_NOTES = 'NOTES_REDUCER_GET_NOTES'

const INITIAL_STATE = {
  noteName: "",
  contents: "",
  attachments_name: "",
  attachment: "",
  owner_id: "",
};


export const notesReducer = ( action, state = INITIAL_STATE) => {
  if(action){
    switch (action.type) {
      case NOTES_REDUCER_SET_NOTES:
      case NOTES_REDUCER_SEND_NOTES:
        return {
          ...state, notes: normalizeNotes(action.payload),
        };
      default: return state;
    }
  }
  return state;
};

