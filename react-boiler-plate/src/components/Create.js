import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () =>
{
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('')
  const history = useHistory()

  const handelSubmit = async function (e)
  {
    e.preventDefault()
    const blog = { title, body, author }
    const response = await fetch('http://localhost:7000/blogs',
      {
        method: 'POST',
        body: JSON.stringify(blog),
        headers: {
          "Content-type": "application/json"
        }
      })
    if (response.ok) {
      history.push('../')
    }
  }
  return (
    <div className="create">
      <h1>Add a New Blog</h1>
      <form className="form" onSubmit={(e) => handelSubmit(e)}>
        <label>Blog Title :
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>Blog Body :
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </label>
        <label>Blog Autor :
          <select
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="mario">mario</option>
            <option value="yoshi">yoshi</option>
          </select>
        </label>
        <button>Add Blog</button>
      </form>
    </div>
  );
}

export default Create;