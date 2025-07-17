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
        <h1 className='title'>Projects</h1>
            <div className="project-row">
            <div className='project-card'>
                <div className='project-card'>
                <img className='project-img'src={NBA} alt='NBA logo'></img>
                <h2 className='project-title'>Project One</h2>
                <div className='pro-button'>
                    <ProjectOneButton />
                </div>
                </div>
            </div>
            <div className='project-card'>
                <div className='project-card'>
                <img className="project-img" src={CalSync} alt='calsync logo'></img>
                <h2 className='project-title'>Project Two</h2>
                <div className='pro-button'>
                    <ProjectTwoButton />
                </div>
                </div>
            </div>
            <div className='project-card'>
                <div className='project-card'>
                <img className='project-img' src={SoCalSync} alt='calsync logo'></img> 
                <h2 className='project-title'>Project Three</h2>
                <div className='pro-button'>
                    <ProjectThreeButton />
                </div>   
                </div>
                </div>
        </div>     
    </div>
    );
};

export default Projects;

