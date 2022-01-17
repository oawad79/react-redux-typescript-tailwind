import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  courses: ICourse[]
  deleteCourse: (id: number) => void
}

const CourseList = ({ courses, deleteCourse }: Props) => (
  <table className="min-w-full">
    <thead>
      <tr className="border-b border-b-black text-left">
        <th />
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {/*<tr>{courses.length}</tr>*/}
      {courses.map((course: ICourse) => {
        return (
          <tr key={course.id} className="border-b">
            <td>
              <a
                className="bg-gray-100 rounded m-2 px-5 py-2 text-black"
                href={'http://pluralsight.com/courses/' + course.slug}
              >
                Watch
              </a>
            </td>
            <td>
              <Link to={'/course/' + course.slug} className="text-blue-600 underline">
                {course.title}
              </Link>
            </td>
            <td>{course.authorName}</td>
            <td>{course.category}</td>
            <td>
              <button
                className="bg-blue-500 rounded m-2 px-5 py-2 text-white hover:bg-red-700"
                onClick={() => deleteCourse(course.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        )
      })}
    </tbody>
  </table>
)

export default CourseList
