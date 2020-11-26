import { api } from "../../api";
import { NOTES_REDUCER_SET_NOTE_WITH_S3, NOTES_REDUCER_SET_NOTES, NOTES_REDUCER_SET_NOTES_WITH_S3 } from "./reducer";
//import { Storage } from "aws-amplify";

export const getNotesService = async (dispatch, user_id) => {
  const {data: notes} = await api.get('/notes', {
    params: {
      'userid': user_id,
    }
  })

  dispatch({type: NOTES_REDUCER_SET_NOTES, payload: notes})
  return notes
}
export const getNotesWithS3Service = async (dispatch, user_id) => {
  const {data: notes_data} = await api.get('/notes', {
    params: {
      'userid': user_id,
    }
  })

  const notes = await Promise.all(notes_data.map((note) => new Promise(async resolve => {
    resolve({
      ...note,
      attachmentURL: null //(no files on mock)await Storage.vault.get(note.attachment)
    })
  })))

  dispatch({type: NOTES_REDUCER_SET_NOTES_WITH_S3, payload: notes})
  return notes
}

export const getNoteWithS3Service = async (dispatch, note_id) => {
  const {data: note} = await api.get(`/notes/${note_id}`)

  dispatch({type: NOTES_REDUCER_SET_NOTE_WITH_S3, payload: note})
  return note
}
