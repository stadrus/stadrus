import './Home.css';

const Home = () => {
    return (
      <div className="home-container">
      <div className="hero-image"></div>
      <div className='hero-text'>
        <h2 className="home-title">Stacey Tadrus</h2>
          <h3 className="home-role">Jr Software Developer</h3>
            <p className="home-intro">Explore my skills, projects, and experience as a Jr Software Developer.</p>
            <button className="page-button">GitHub</button>
            <button className="page-button">LinkedIn</button>
          </div>
      </div>
  );
};
export default Home;
