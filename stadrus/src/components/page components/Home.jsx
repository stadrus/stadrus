import GitHubButton from '../../buttons/GitHubButton';
import LinkedInButton from '../../buttons/LinkedInButton';
import './Home.css';

const Home = () => {
    return (
      <div className="home-container">
      <div className="background-container">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      <div className="hero-image"></div>
      <div className='hero-text'>
      <h4>Hello, I'm</h4>
        <h2 className="home-title">Stacey Tadrus</h2>
          <h3 className="home-role">Jr Software Developer</h3>
            <p className="home-intro">Explore my skills, projects, and experience as a Jr Software Developer.</p>
            <button className="page-button">Download CV</button>
            <button className="page-button">Contact Info</button> <br></br>
                <GitHubButton />
                <LinkedInButton />
          </div>
      </div>
  );
};
export default Home;
