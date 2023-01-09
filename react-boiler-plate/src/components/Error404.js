import { Link } from 'react-router-dom'
const Error404 = () =>
{
 return (
  <>
   <h1>Error 404</h1>
   <Link to='/'>back to home</Link>
  </>
 );
}

export default Error404;