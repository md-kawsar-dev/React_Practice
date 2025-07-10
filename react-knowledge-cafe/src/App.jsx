import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import BookMarks from './components/book-marks/BookMarks'
import Header from './components/header/Header'

function App() {
  const [bookMarks,setBookMarks] = useState([]);
  const handleAddToBookMarks = blog =>{
    // Check if the blog is already bookmarked
    const isBookmarked = bookMarks.some(b => b.id === blog.id);
    if (isBookmarked) {
      alert("This blog is already bookmarked.");
      return;
    }
    
    setBookMarks([...bookMarks,blog]);
  }
  const handleMarksAsRead = (blog) =>{
    setBookMarks(bookMarks.filter(b => b.id !== blog.id));
  }
  return (
    <div className='max-w-6xl mx-auto' >
      <Header />
      <div className="md:flex mt-4">
          <Blogs handleAddToBookMarks={handleAddToBookMarks} handleMarksAsRead={handleMarksAsRead} />
          <BookMarks bookMarks={bookMarks} />
      </div>
    </div>
  )
}

export default App
