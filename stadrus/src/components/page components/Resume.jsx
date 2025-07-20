import CVButton from "../../buttons/CVButton"

const Resume = () => {
    return (
        <div className="resume-page">
            <h1>Resume</h1> <CVButton />
            <h2>Summary</h2>
            <p>Currently expanding technical skills through LaunchCode's software development courses (Class of 2025) with a focus on JavaScript, Java, React, and SQL. Gaining hands-on experience in both front-end and back-end development. Building on foundations as a web administrator into more advanced software development roles. 
            </p>
            <h2>Languages | Frameworks | Tools 
            <p> Java, JavaScript | React, Springboot | MySQL Workbench, POSTMAN
            </p>
            </h2>
            <h2>Experience</h2>
            <h3>CalSync — LaunchCode Project</h3>
            <ul>
                <li>This project allows users to create and share personal events across multiple platforms.  
                </li>
                <li>Built a dynamic table where users could add, edit, or delete events. 
                </li>
                <li>Utilized local storage to persist user data.
                </li>
                <li>Full Project Tech Stack: JavaScript, JSON, React
                </li>
            </ul>
            <h3>Web Administrator — New Beginning Apostolic Church</h3>
            <p>June 2014 - Present</p>
            <ul>
                <li>Spearheaded the design, development, and ongoing maintenance of the organization’s website, ensuring optimal user experience and functionality.</li>
                <li>Led a team of volunteers to execute social media strategies, resulting in a 14% increase in engagement from 2023 to 2024.</li>
                <li>Innovated content creation workflows by implementing tools and strategies that streamlined the design process, saving 15% of project time.</li>
                <li>Trained team members on effectively using digital tools and platforms, enhancing overall efficiency and collaboration.
                </li>
                <li>Collaborated with leadership to align web and digital strategies with organizational goals, increasing community outreach and visibility.</li>
            </ul>
            <h3>Remittance Processing Specialist — Commerce Bank</h3>
            <p>May 2023 - April 2025</p>
            <ul>
                <li>Contributed to team-building initiatives by mentoring new employees on department procedures and standards.
                </li>
                <li>Troubleshot and resolved system issues, escalating complex problems for timely resolution.
                </li>
                <li>Awarded the “At Your Best Award” 2024 for casting a shadow of leadership and teamwork, ensuring EOD deadlines were met on the processing floor, including data entry and scanning. 
                </li>
            </ul>
            <h3>Patient Scheduling Representative — University of Kansas Health System</h3>
            <p>Aug 2017 - May 2023</p>
            <ul>
                <li>Managed patient registration and scheduling, analyzing workflows to enhance appointment accuracy and reduce delays.</li>
                <li>Trained new team members on scheduling systems, fostering a collaborative and efficient work environment.</li>
                <li>Identified process inefficiencies and proposed improvements, leading to a 10% increase in operational efficiency.</li>
                <li>Managing over 50 daily patient interactions while maintaining a high satisfaction rate, with check-in times consistently under five minutes.</li>
            </ul>
            <h2>Education</h2>
            <h3>LaunchCode</h3>
            <p>Software Development, 2025 </p>
            <h3>Baker University,</h3>
            <p>Bachelor of Business Administration-Marketing, 2023</p>
        </div>
    );
}
export default Resume;