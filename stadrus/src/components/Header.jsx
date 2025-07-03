import { Link } from "react-router";

const Header = () => {
    return (
        <div className="header">
            <header>
                <h1>Jr Software Developer</h1>
            <nav className="nav-bar">
              <Link className="Projects-button" to='/Home'>Projects</Link> | <Link className="Resume-button" to='/Resume'>Resume</Link> | <Link className="linkedin" rel="import" href= "https://www.linkedin.com/in/stacey-tadrus"> LinkedIn </Link>
            </nav>
            </header>
        </div>
    );
};

export default Header;