import { Link } from "react-router";

const Header = () => {
    return (
        <div className="header">
            <header>
                <h1 className="header-h1"> Stacey Tadrus</h1>
                <h2 className="header-title">Jr Software Developer</h2>
            <nav className="nav-bar">
               <Link className="Home" to='/Home'>Home</Link> | <Link className="Projects-button" to='/Home'>Projects</Link> | <Link className="Resume-button" to='/Resume'>Resume</Link> | <Link className="Contact" to='/Contact'> Contact Me </Link>
            </nav>
            </header>
        </div>
    );
};

export default Header;