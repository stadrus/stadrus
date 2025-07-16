import profile from "../../images/profile.svg"
import ExperienceButton from "../../buttons/ExperienceButton";
import ProjectsButton from "../../buttons/ProjectsButton";

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
                        <p>Enter caption here</p>
                    </div>
                    <div className="details-container">
                        <ProjectsButton />
                        <h3>Education</h3>
                        <p>Place EDU Here</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Profile;