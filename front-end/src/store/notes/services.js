import { api } from "../../api";
import authHeader from '../../helpers/authHeader';
import { NOTES_REDUCER_SEND_NOTES, NOTES_REDUCER_SET_NOTES } from "./reducer";


export const getNotesService = async(dispatch) => {
    return await api
  .get('api/note/', authHeader())
  .then(
    (response) => {
        dispatch({
            type:NOTES_REDUCER_SET_NOTES,
            payload: response
        })

        return Promise.resolve(response)
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

}

export const sendNoteService = async(dispatch, note) => {
    console.log('oi')
    return await api
    .post('api/note/', note, authHeader())
    .then(
    (response) => {
        dispatch({
            type:NOTES_REDUCER_SEND_NOTES,
            payload: response
        })
        
        return Promise.resolve(response)
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