import profile from "../../images/profile.svg"
import ExperienceButton from "../../buttons/ExperienceButton";
import Skills from "../profile components/Skills";
import Projects from "../profile components/Projects";
import Bio from "../profile components/Bio"
import CVButton  from "../../buttons/CVButton"
import './profile.css'

const Profile = () => {
    return (
        <section>
            <p className="text-p1">Get To Know More</p>
            <h1 className="title">Profile</h1>
            <div className="profile">
                <div className="profile-container">
                    <div className ="profile-pic-container">
                        <img className="profile-pic" src ={profile} alt="profile-pic"></img>
                        <div className="profile-button-container">
                        <ExperienceButton />
                       <CVButton />
                       </div>

                    </div>
                <div className="left-side">
                    <div className="details-container">
                        <Bio />
                <div className="exp-edu-row">
                    <div className="details-container">
                            <h3>Experiences</h3>
                            <p>Marketing</p>
                            <p>Software Development</p>
                            <div className="details-container">
                            <h3>Education</h3>
                            <p>LaunchCode</p>
                            <p>Baker University</p>
                            </div>
                    </div>

                </div>
                    </div>
                </div>
                        <div>
                            <Skills />
                        </div>
                        <div>
                            <Projects />
                        </div>
            </div>
                </div>
        </section>
            
      
    )
}
export default Profile;