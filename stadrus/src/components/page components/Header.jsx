import { Link } from "react-router";
import './header.css';


const Header = () => {
    return (
        <div className="header">
            <header>
            <nav className="nav-bar">
            <div className="logo">Stacey Tadrus</div>
               <Link className="home-button" to='/Home'>Home</Link> | <Link className="profile-button" to='/Profile'>Profile</Link> | <Link className="projects-button" to='/Home'>Projects</Link> | <Link className="resume-button" to='/Resume'>Resume</Link> | <Link className="contact-button" to='/Contact'> Contact Me </Link>
            </nav>
            </header>
        </div>
    );
};

export default Header;