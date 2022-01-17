import { combineReducers } from 'redux'
import coursesReducer from './coursesReducer'
import authorsReducer from './authorsReducer'

const rootReducer = combineReducers<ApplicationState>({
  courses: coursesReducer,
  authors: authorsReducer
})

export default rootReducer
