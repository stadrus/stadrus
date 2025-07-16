import profile from "../../images/profile.svg"
import ExperienceButton from "../../buttons/ExperienceButton";
import ProjectsButton from "../../buttons/ProjectsButton";
import Skills from "./Skills";
import Projects from "./Projects";

const Profile = () => {
    return (
        <div className="profile">
            <p>Get To Know More</p>
            <h1>Profile</h1>
            <div className="profile-container">
                <div className ="profile-pic-container">
                    <img className="profile-pic" src ={profile} alt="profile-pic"></img>
                </div>
                <div className="profile-details-container">
                    <div className="details-container">
                        <ExperienceButton />
                        <h3>Experiences</h3>
                        <p>Marketing</p>
                        <p>Software Development</p>
                    </div>
                    <div className="details-container">
                        <h3>Education</h3>
                        <p>LaunchCode</p>
                        <p>Baker University</p>
                    </div>
                    <div>
                        <Skills />
                    </div>
                    <div>
                        <Projects />
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Profile;