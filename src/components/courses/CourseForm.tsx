import React, { ChangeEvent, FormEvent } from 'react'

interface Props {
  authors: IAuthor[]
  course: ICourse
  errors: AppError
  onSubmit: (arg0: FormEvent) => void
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}

const CourseForm = ({ authors, course, errors, onSubmit, onChange }: Props) => {
  return (
    <>
      <div>Add Course</div>
      {errors.onSave && <div className="bg-red-700">{errors.onSave}</div>}
      <form
        className="w-full max-w-xs bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={onSubmit}
      >
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={course.title}
            onChange={onChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="author" className="block text-gray-700 text-sm font-bold mb-2">
            Author
          </label>
          <select
            id="authorId"
            name="authorId"
            value={course.authorId}
            onChange={onChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option key={0} value="Select Author">
              Select Author
            </option>
            {authors.map((author, index) => (
              <option key={index} value={author.id}>
                {author.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">
            Category
          </label>
          <input
            id="category"
            name="category"
            type="text"
            value={course.category}
            onChange={onChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button type="submit" className="bg-blue-400 px-6 py-2 rounded text-white">
          Submit
        </button>
      </form>
    </>
  )
}

export default CourseForm
