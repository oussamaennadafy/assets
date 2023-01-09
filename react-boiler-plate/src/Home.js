import BlogList from "./components/BlogList";
import useFetch from "./hooks/useFetch";

const Home = () =>
{
  const { data: blogs, error, isPending } = useFetch('http://localhost:7000/blogs')

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
      {blogs && !Object.keys(blogs).length && <div>no blog</div>}
    </div>
  );
}

export default Home;