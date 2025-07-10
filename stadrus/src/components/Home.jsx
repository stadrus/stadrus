import profile from '../images/profile.svg';

const Home = () => {
    return (
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-header">Welcome to My Professional Portfolio</h1>
        </div>
        <div className="home-image-container">
          <img className="home-image" src={profile} alt="Professional Portfolio" />
        <div className="home-description-card">      
        <h2 className="home-subtitle">Stacey Tadrus</h2>
        <h3 className="home-role">Jr Software Developer</h3>
          <p className="home-text">Explore my skills, projects, and experience as a Jr Software Developer.</p>
        </div>
        </div>
        <div className="home-button-container">
          <button className="home-button">View My Profile</button>
          <button className="home-button">View My Projects</button>
          <button className="home-button">View My Resume</button> 
          <button className="home-button">Contact Me</button>
        </div>
      </div>
  );
};
export default Home;
