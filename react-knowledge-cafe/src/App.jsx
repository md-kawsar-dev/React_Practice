import './App.css'
import Blogs from './components/blogs/Blogs'
import BookMarks from './components/book-marks/BookMarks'
import Header from './components/header/Header'

function App() {

  return (
    <div className='p-4'>
      <Header />
      <div className="flex justify-between mt-4">
        <div className="w-3/4">
          <Blogs />
        </div>
        <div className="w-1/4">
          <BookMarks />
        </div>
      </div>
    </div>
  )
}

export default App
