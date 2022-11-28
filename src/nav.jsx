import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="nav">
      <div className="header">
        <li>
          <Link to="/">Home</Link>
          <br></br>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li >
          <Link to="/Contact">Contact</Link>
        </li>
      </div>
    </div>
  );
}
export default Nav;
