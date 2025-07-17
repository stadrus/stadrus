import { Link } from "react-router";


const Footer = () => {
    return (
        <footer className="footer">
       <nav>
       <div className="nav-container"></div>
            <Link className="home-button" to='/Home'>Home</Link> | <Link className="profile-button" to='/Profile'>Profile</Link> | <Link className="projects-button" to='/Projects'>Projects</Link> | <Link className="resume-button" to='/Resume'>Resume</Link> | <Link className="contact-button" to='/Contact'> Contact Me </Link>
            </nav> 
            <p> Copyright &#169; 2025 Stacey Tadrus. All Rights Reserved.</p>
        </footer>

    );
};

export default Footer;