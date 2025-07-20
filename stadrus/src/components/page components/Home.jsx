import ContactButton from '../../buttons/ContactButton';
import CVButton from '../../buttons/CVButton';
import GitHubButton from '../../buttons/GitHubButton';
import LinkedInButton from '../../buttons/LinkedInButton';
import ProfileButton from '../../buttons/ProfileButton';
import './Home.css';

const Home = () => {
    return (
      <div className="home-container">
      <div className="hero-image"></div>
      <div className='hero-card'>
          <div className='home-text'>
            <h4>Hello, I'm</h4>
            <h2 className="home-title">Stacey Tadrus</h2>
              <h3 className="home-role">Jr Software Developer</h3>
                <p className="home-intro">Explore my skills, projects, and experience as a Jr Software Developer.</p>
          </div>
          <div className='home-description-card'>
                <CVButton />
                  <GitHubButton />
                  <LinkedInButton />
                  <ContactButton />
                  <ProfileButton />
          </div>
      </div>
    </div>
  );
};
export default Home;
