import { api } from "../../api";
import authHeader from '../../helpers/authHeader';
import {
    NOTES_REDUCER_DELETE_NOTE,
    NOTES_REDUCER_GET_NOTE,
    NOTES_REDUCER_SEND_NOTES,
    NOTES_REDUCER_SET_NOTES
} from "./reducer";


export const getNotesService = async(dispatch) => {
    return api
  .get('api/note/', authHeader())
  .then(
    ({data: notes}) => {
        dispatch({
            type:NOTES_REDUCER_SET_NOTES,
            payload: notes
        })

        return Promise.resolve(notes)
    },
    (error) => {
        const message =
        (error.response &&
        error.response.data &&
        error.response.data.message) ||
        error.message ||
        error.toString();

        return Promise.reject(message);
    },

  );

}

export const getNoteService = async(dispatch, noteID) => {
    try{
        const {data: note} = await api
            .get(`api/note/${noteID}`, authHeader())
    dispatch({
        type: NOTES_REDUCER_GET_NOTE,
        payload: [note]
    })}
    catch(error){
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();

        return Promise.reject(message);
    }
}

export const sendNoteService = async(dispatch, note, id) => {
    let method = 'post'
    let url = `api/note`
    if (id){
        method = 'put'
        url = `${url}/${id}`
    }

    return await api[method]
    (url, note, authHeader())
    .then(
    ({data:note}) => {
        dispatch({
            type:NOTES_REDUCER_SEND_NOTES,
            payload: [note]
        })

        return Promise.resolve(note)
    },
    (error) => {
        const message =
        (error.response &&
        error.response.data &&
        error.response.data.message) ||
        error.message ||
        error.toString();

        return Promise.reject(message);
    },

  );
}

export const deleteNoteService = async (dispatch, note) => {
    try{
        await api.delete(`api/note/${note._id}`, authHeader())
        dispatch({
            type: NOTES_REDUCER_DELETE_NOTE,
            payload: note
        })}
    catch(error){
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();

        return Promise.reject(message);
    }
}
//AINDA PRO BACK-MOCKADO
// export const getNotesService = async (dispatch, user_id) => {
//   const {data: notes} = await api.get('/notes', {
//     params: {
//       'userid': user_id,
//     }
//   })
//   dispatch({type: NOTES_REDUCER_SET_NOTES, payload: notes})
//   return notes
// }

// export const sendNotesService = async (dispatch, newNote) => {
//     return api
//     .post('/api/note/', newNote)
//     .then(
//         (note) => {
//             dispatch({
//                 type: NOTES_REDUCER_SEND_NOTES,
//                 payload: note,
//             })

//             return Promise.resolve(note);
//         },
//         (error) => {
//             const message =
//             (error.response &&
//             error.response.data &&
//             error.response.data.message) ||
//             error.message ||
//             error.toString();

//             return Promise.reject(message);
//         }
//     );
// }
