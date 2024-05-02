import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const TopHeader = () => {
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid justify-content-center align-items-center">
        <Link className="navbar-brand me-auto" to="/">My App</Link>
        <button className="navbar-toggler" type="button" onClick={toggleNav}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className={`nav-item ${isActive('/')}`}>
              <Link className={`nav-link ${isActive('/')}`} to="/">Students</Link>
            </li>
            <li className={`nav-item ${isActive('/class')}`}>
              <Link className={`nav-link ${isActive('/class')}`} to="/class">Classes</Link>
            </li>
            <li className={`nav-item ${isActive('/section')}`}>
              <Link className={`nav-link ${isActive('/section')}`} to="/section">Sections</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopHeader;
