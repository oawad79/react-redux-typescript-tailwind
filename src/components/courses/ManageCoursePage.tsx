import React, { FormEvent, useEffect, useState } from 'react'
import CourseForm from './CourseForm'
import { connect } from 'react-redux'
import { saveCourse } from '../../redux/actions/courseActions'
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router'

interface Props {
  authors: IAuthor[]
  courses: ICourse[]
  saveCourse: (course: ICourse) => Promise<void>
}

function getCourseBySlug(courses: ICourse[], slug: string) {
  return courses.find(course => course.slug === slug) || null
}

const ManageCoursePage = ({ authors, courses, saveCourse }: Props) => {
  const [course, setCourse] = useState<ICourse>({
    id: 0,
    authorId: 0,
    authorName: '',
    category: '',
    title: '',
    slug: ''
  })
  const { slug } = useParams()
  const [errors, setErrors] = useState<AppError>({})
  const navigate = useNavigate()

  useEffect(() => {
    if (slug) {
      const courseBySlug = getCourseBySlug(courses, slug)
      if (courseBySlug) {
        setCourse(courseBySlug)
      }
    }
  }, [slug])

  function formIsValid() {
    const { title, authorId, category } = course
    const errors: AppError = {}

    if (!title) errors.title = 'Title is required.'
    if (!authorId) errors.author = 'Author is required'
    if (!category) errors.category = 'Category is required'

    setErrors(errors)
    // Form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (!formIsValid()) return

    saveCourse(course)
      .then(() => {
        toast.success('Course saved!')
        navigate('/courses')
      })
      .catch(error => {
        toast.error('Failed to save course')
        setErrors({ onSave: 'Error saving' })
      })
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target
    setCourse(prevCourse => ({
      ...prevCourse,
      [name]: name === 'authorId' ? parseInt(value, 10) : value
    }))
  }

  return (
    <>
      <CourseForm
        authors={authors}
        course={course}
        errors={errors}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
    </>
  )
}

function mapStateToProps(applicationState: ApplicationState) {
  return {
    authors: applicationState.authors,
    courses: applicationState.courses
  }
}

const mapDispatchToProps = {
  saveCourse
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage)
