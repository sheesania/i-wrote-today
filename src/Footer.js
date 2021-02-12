import { useLocation, Link } from "react-router-dom";
import { FaFileExport, FaHome, FaInfoCircle } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  const location = useLocation();
  const mainLink = location.pathname === '/'
    ? undefined
    : <li title='Home'><Link to="/"><FaHome /></Link></li>;


  return (
    <div className='footer'>
      <ul>
        {mainLink}
        <li title='Import and export your data'>
          <Link to="/import-export"><FaFileExport/></Link>
        </li>
        <li title='About'>
          <Link to="/about"><FaInfoCircle/></Link>
        </li>
      </ul>
    </div>
  );
}

export default Footer;