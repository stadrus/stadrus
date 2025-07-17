import "./skills.css";
import certificate from "../../images/certificate-solid.svg"

const Skills = () => {
    const skills = [
        {name: "Java", level: "Beginner"},
        {name: "JavaScript", level: "Beginner"},
        {name: "HTML", level: "Beginner"},
        {name: "CSS", level: "Beginner"},
        {name: "React", level: "Beginner"},
        {name: "MySQL Workbench", level: "Beginner"}
    ];

    return (
        <div className="skills-content">
            <div className="skills-wrapper">
                <div className="skills-card">
                    <p className="text-p1">Explore My</p>
                    <h3 className="skills-title">Skills</h3>
                    <div className="skills-list">
                        {skills.map((skills, index) => (
                            <div className="skills-item" key= {index}>
                                <img className="skills-icon" src={certificate} alt="certificate-solid"></img>
                                <div>
                                    <strong>{skills.name}</strong>
                                    <p>{skills.level}</p>
                                </div>
                            </div>
                        ))}
                    </div>       
                </div>
            </div>
        </div>

    );
};

export default Skills;