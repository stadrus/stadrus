import profile from '../../images/profile.svg';
import './Home.css';

const Home = () => {
    return (
      <div className="home-container">
        <div className="home-image-container">
        <section>
          <img className="home-image" src={profile} alt="Professional Portfolio" />
        </section>
        <div className="home-description-card">      
        <h2 className="home-subtitle">Stacey Tadrus</h2>
        <h3 className="home-role">Jr Software Developer</h3>
          <p className="home-text">Explore my skills, projects, and experience as a Jr Software Developer.</p>
        </div>
        </div>
        <div className="page-button-container">
          <button className="page-button">View My Profile</button>
          <button className="page-button">View My Projects</button>
          <button className="page-button">View My Resume</button> 
          <button className="page-button">Contact Me</button>
        </div>
      </div>
  );
};
export default Home;
