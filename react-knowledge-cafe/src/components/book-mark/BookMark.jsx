const BookMark = ({ blog }) => {
  return (
    <div className="bg-white p-4 shadow-lg rounded-lg mt-2">
      <h3 className="font-bold text-lg">{blog.title}</h3>
    </div>
  );
};

export default BookMark;
