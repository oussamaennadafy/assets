import { useParams, Link, useHistory } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BlogDetails = () =>
{
 const { id } = useParams()
 const { data: blog, isPending, error } = useFetch('http://localhost:7000/blogs/' + id)
 const history = useHistory()
 const handelDelete = async function (id)
 {
  const response = await fetch('http://localhost:7000/blogs/' + id, {
   method: 'DELETE',
  })
  if (response.ok) {
   history.push('../')
  }

 }
 return (
  <>
   <ul className="list">
    <li><Link to="../">&#8592; Back to home</Link></li>
    <li><button onClick={() => handelDelete(id)}>Delete blog</button></li>
   </ul>
   {isPending && <div>Loading...</div>}
   {error && <div>failed to load !</div>}
   <article className="blog">
    <h1 className="blog-title">{blog?.title}</h1>
    <p className="blog-body">{blog?.body}</p>
    {blog && <em className="blog-author">Written by {blog.author}</em>}
   </article>
  </>
 );
}

export default BlogDetails;