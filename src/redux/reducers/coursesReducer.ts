import { CourseActionTypes } from '../actionTypes'

const initialState: ICourse[] = []

export default function coursesReducer(state = initialState, action: CourseAction): ICourse[] {
  switch (action.type) {
    case CourseActionTypes.LOAD_COURSES_SUCCESS:
      console.log(`action.data = ${action.data}`)
      return action.data === undefined ? [] : action.data
    case CourseActionTypes.DELETE_COURSE:
      return state.filter(c => c.id !== action.data)
    case CourseActionTypes.SAVE_COURSE_SUCCESS:
      const x = [...state, action.data]
      console.log(`in reducer = ${x}`)
      return x
  }

  return state
}
