import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <ul className="flex bg-[#e2e3e1] h-16 items-center">
        <li className="font-mono mr-80">
          <Link to="/">Logo</Link>
        </li>
        <li className="basis-1/3">
          <Link to="/">Home</Link>
        </li>
        <li className="basis-1/3">
          <Link to="/classroom">Courses</Link>
        </li>
        <li className="basis-1/3">
          <Link>About Us</Link>
        </li>
        <li className="basis-1/3">
          <Link>Blogs</Link>
        </li>
        <li className="basis-1/3">
          <Link>Login</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
