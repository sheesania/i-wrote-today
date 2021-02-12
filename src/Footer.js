import { useLocation, Link } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const mainLink = location.pathname === '/' ? undefined : <Link to="/">main</Link>;

  return (
    <div className='footer'>
      {mainLink}
      <Link to="/import-export">import + export your data</Link>
      <Link to="/about">about</Link>
    </div>
  );
}

export default Footer;