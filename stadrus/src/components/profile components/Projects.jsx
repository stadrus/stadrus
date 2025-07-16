import './Projects.css';
import CalSync from "../../images/CalSync.svg"
import SoCalSync from "../../images/SoCalSync.svg"
import NBA from "../../images/NBA.svg"

const Projects = () => {
    return (
        <div className="projects">
        <p className='text-p1'>Browse My Recent Projects</p>
        <h1>Projects</h1>
            <div className="project-details-container">
            <div className='about-contianers'>
            <div className='details-container color-container'>
            <div className='article-container'>
            <img src={NBA} alt='NBA logo'></img>
            </div>
                <div>
                    <h2 className='project-title'>Project One</h2>
                </div>
            
            <img src={CalSync} alt='calsync logo'></img>
            <img src={SoCalSync} alt='calsync logo'></img>    
            </div>
            </div>
            </div>     
        </div>
    );
};

export default Projects;

