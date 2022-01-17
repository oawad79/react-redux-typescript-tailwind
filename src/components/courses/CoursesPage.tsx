import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { deleteCourse, loadCourses } from '../../redux/actions/courseActions'
import CourseList from './CourseList'
import { loadAuthors } from '../../redux/actions/authorActions'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'

interface ConnectedProps {
  courses: ICourse[]
}

interface DispatchProps {
  loadCourses(): Promise<void>
  loadAuthors(): Promise<void>
  deleteCourse(id: number): Promise<void>
}

type Props = ConnectedProps & DispatchProps

const CoursesPage = ({ courses, loadCourses, loadAuthors, deleteCourse }: Props) => {
  const navigate = useNavigate()

  //https://dmitripavlutin.com/react-useeffect-infinite-loop/
  useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch((error: string) => {
        alert('Loading courses failed' + error)
      })
    }

    //if (authors.length === 0) {
    loadAuthors().catch((error: string) => {
      alert('Loading authors failed' + error)
    })
    //}
  }, [])

  const handleAddCourseClick = () => {
    navigate('/course')
  }

  const hundleDeleteCourse = (id: number) => {
    toast.success('Course Deleted')
    deleteCourse(id).catch(error => {
      console.log(`Error returned = ${error}`)
      toast.error('Delete failed.')
    })
  }

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="font-sans text-3xl">Courses</div>
      <button
        className="bg-blue-500 rounded m-2 px-5 py-2 text-white hover:bg-red-700"
        onClick={() => handleAddCourseClick()}
      >
        Add Course
      </button>
      <CourseList courses={courses} deleteCourse={hundleDeleteCourse} />
    </div>
  )
}

function mapStateToProps(applicationState: ApplicationState) {
  return {
    courses: applicationState.courses.map(course => {
      return {
        ...course,
        authorName: applicationState.authors.find(author => author.id === course.authorId)?.name
      }
    }),
    authors: applicationState.authors
  }
}

const mapDispatchToProps = {
  loadCourses,
  loadAuthors,
  deleteCourse
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage)
