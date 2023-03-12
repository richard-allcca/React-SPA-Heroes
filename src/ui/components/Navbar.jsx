import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from './../../auth/context/AuthContext';


export const Navbar = () => {

  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const onLogout = () => {

    logout();

    navigate('/login', {
      replace: true
    });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

      <Link
        className="navbar-brand"
        to="/"
      >
        Thouma
      </Link>

      {/* ANCHOR - elements left */ }

      <div className="navbar-collapse">
        <div className="navbar-nav">

          <NavLink
            className="nav-item nav-link"
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className="nav-item nav-link"
            to="/dc"
          >
            DC
          </NavLink>

          <NavLink
            className="nav-item nav-link"
            to="/search"
          >
            Search
          </NavLink>

        </div>
      </div>

      {/* ANCHOR - elements right */ }

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">

          <span className="nav-item nav-link text-primary">
            { user ? user.name : 'Invitado' }
          </span>

          {
            user
              ? <button
                className="nav-item nav-link btn btn-outline-danger"
                onClick={ onLogout }
              >
                Logout
              </button>
              : <button
                className="nav-item nav-link btn btn-outline-info "
                onClick={ onLogout }
              >
                Login
              </button>

          }
        </ul>
      </div>
    </nav>
  );
};
