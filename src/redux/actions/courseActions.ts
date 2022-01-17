import { apiCallError, beginApiCall } from './apiStatusActions'
import * as courseApi from '../../api/courseApi'
import { Dispatch } from 'redux'
import { CourseActionTypes } from '../actionTypes'

// function addCourse(course: ICourse) {
//   return {
//     type: CourseActionTypes.CREATE_COURSE,
//     course
//   }
// }

function loadCoursesSuccess(courses: ICourse[]) {
  return { type: CourseActionTypes.LOAD_COURSES_SUCCESS, data: courses }
}

function deleteCourseOptimistic(id: number) {
  return { type: CourseActionTypes.DELETE_COURSE, data: id }
}

function deleteCourse(id: number) {
  return function (dispatch: Dispatch) {
    dispatch(deleteCourseOptimistic(id))
    return courseApi.deleteCourse(id)
  }
}

function updateCourseSuccess(savedCourse: ICourse) {
  return { type: CourseActionTypes.UPDATE_COURSE_SUCCESS, data: savedCourse }
}

function saveCourseSuccess(savedCourse: ICourse) {
  return { type: CourseActionTypes.SAVE_COURSE_SUCCESS, data: savedCourse }
}

function saveCourse(course: ICourse) {
  return function (dispatch: Dispatch) {
    return courseApi
      .saveCourse(course)
      .then((savedCourse: ICourse) => {
        //savedCourse.id
        //dispatch(updateCourseSuccess(savedCourse))
        dispatch(saveCourseSuccess(savedCourse))
      })
      .catch(error => {
        throw error
      })
  }
}

function loadCourses() {
  return function (dispatch: Dispatch) {
    //dispatch(beginApiCall())
    return courseApi
      .getCourses()
      .then(courses => {
        console.log(courses)
        return courses
      })
      .then(courses => {
        dispatch(loadCoursesSuccess(courses))
      })
      .catch(error => {
        //dispatch(apiCallError())
        throw error
      })
  }
}

export { loadCourses, loadCoursesSuccess, deleteCourse, saveCourse }
