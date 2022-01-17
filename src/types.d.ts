interface ICourse {
  id: number
  title: string
  slug: string
  authorId: number
  authorName?: string
  category: string
}

interface IAuthor {
  id: number
  name: string
}

// interface CoursesState {
//   courses: ICourse[]
// }
//
// interface AuthorsState {
//   authors: Array<IAuthor>
// }

interface ApplicationState {
  courses: ICourse[]
  authors: IAuthor[]
}

type CourseAction = {
  type: string
  data?: any
}

type AuthorAction = {
  type: string
  authors?: any
}

type AppError = {
  title?: string
  author?: string
  category?: string
  onSave?: string
}

//type DispatchType = (any, CourseAction) => any;
