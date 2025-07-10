import BookMark from "../book-mark/BookMark";

const BookMarks = ({bookMarks}) => {
    const totalTime = bookMarks.reduce((acc, blog) => acc + blog.reading_time, 0);
    return (
        <div className="w-1/3 ml-4">
            <div className='bg-blue-50 p-4 shadow-1xl mb-4'>
                <span className='text-2xl font-bold'>Spent time on read : {totalTime} min </span>
            </div>

            <div className='bg-gray-100 p-4'>
                <h1 className='text-2xl font-bold'>Bookmarked Blogs : {bookMarks.length}</h1>
               {bookMarks.map((blog,id) => <BookMark key={id} blog={blog} />)}
            </div>
        </div>
    );
};
// props: bookMarks - an array of blog objects that are bookmarked

export default BookMarks;