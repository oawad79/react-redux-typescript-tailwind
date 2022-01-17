import React from 'react'
import Header from './components/common/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import CoursesPage from './components/courses/CoursesPage'
import About from './components/about/About'
import PageNotFound from './PageNotFound'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ManageCoursePage from './components/courses/ManageCoursePage'

function App() {
  return (
    <div className="max-w-6xl mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/course/:slug" element={<ManageCoursePage />} />
        <Route path="/course" element={<ManageCoursePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  )
}

export default App
