import './Projects.css';
import CalSync from "../../images/CalSync.svg"
import SoCalSync from "../../images/SoCalSync.svg"
import NBA from "../../images/NBA.svg"
import ProjectOneButton from '../../buttons/ProjectOneButton';
import ProjectTwoButton from '../../buttons/ProjectTwoButton';
import ProjectThreeButton from '../../buttons/ProjectThreeButton';

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
                <h2 className='project-title'>Project One</h2>
                <div className='pro-button'>
                    <ProjectOneButton />
                </div>
            <div className='details-container color-container'>
                <div className='article-container'>
                <img src={CalSync} alt='calsync logo'></img>
                </div>
                <h2 className='project-title'>Project Two</h2>
                <div className='pro-button'>
                    <ProjectTwoButton />
                </div>
            <div className='details-container color-container'>
                <div className='article-container'>
                <img src={SoCalSync} alt='calsync logo'></img> 
                </div>
                <h2 className='project-title'>Project Three</h2>
                <div className='pro-button'>
                    <ProjectThreeButton />
                </div>   
                </div>
            </div>
        </div>     
    </div>
    </div>
    </div>
    );
};

export default Projects;

