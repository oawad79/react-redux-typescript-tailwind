import { AuthorActionTypes } from '../actionTypes'

const initialState: IAuthor[] = []

export default function authorsReducer(state = initialState, action: AuthorAction): IAuthor[] {
  switch (action.type) {
    case AuthorActionTypes.LOAD_AUTHORS:
      return state
    case AuthorActionTypes.LOAD_AUTHORS_SUCCESS:
      return action.authors
  }

  return state
}
