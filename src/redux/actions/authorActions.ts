import { Dispatch } from 'redux'
import { getAuthors } from '../../api/authorApi'
import { AuthorActionTypes } from '../actionTypes'

function loadAuthorSuccess(authors: IAuthor[]) {
  return { type: AuthorActionTypes.LOAD_AUTHORS_SUCCESS, authors }
}

function loadAuthors() {
  return function (dispatch: Dispatch) {
    return getAuthors()
      .then(authors => {
        console.log(authors)
        return authors
      })
      .then(authors => {
        dispatch(loadAuthorSuccess(authors))
      })
      .catch(error => {
        throw error
      })
  }
}

export { loadAuthors, loadAuthorSuccess }
