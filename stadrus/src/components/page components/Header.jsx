import { Link } from "react-router";
import './header.css';

const Header = () => {
    return (
        <header>
            <nav className="header-nav">
            <div className="header-links">
                <Link className="home-button" to='/home'>Home</Link> |
                <Link className="profile-button" to='/Profile'>Profile</Link> |
                <Link className="projects-button" to='/Projects'>Projects</Link> |
                <Link className="resume-button" to='/Resume'>Resume</Link> | 
                <Link className="contact-button" to='/Contact'> Contact Me </Link> 
            </div>
            </nav>
            </header>
    );
};

export default Header;