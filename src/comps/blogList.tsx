function BlogList(props) {
  const { blogs } = props;
  const { title } = props;
  const { body } = props;

  return (
    <div className="blogList">
      <h2> {title} </h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2 className="blogListTitle"> {blog.title}</h2>
          <h3 className="listBody"> {blog.body} </h3>
          <p>written by {blog.author}</p>
          <p className="date"> {blog.date} </p>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
