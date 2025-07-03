import Contact from "./Contact";

const Home = () => {
    return (
        <div>
            <h1>Stacey Tadrus </h1>
            <p>
              I have diverse experience across financial services, healthcare, web administration, customer service, and design. I have a passion for creating solutions that are both visually engaging and highly functional. specializing in building websites, social media content, print promotions, and digital assets that help organizations grow their presence and engage their audiences. My skills also extend into event planning and community outreach, where I’ve successfully led and assisted projects that increased engagement and visibility.<br></br>
              I’m building on my technical skillset through LaunchCode’s Web Development Program (Class of 2025), where I’m developing expertise in JavaScript, Java, and front-end frameworks like React. <br></br>
              As a self-taught digital designer and web designer, I’m passionate about continuous learning, creative problem-solving, and collaborating with teams to turn ideas into impactful results. Whether managing projects, optimizing processes, or creating beautiful designs, I love helping organizations deliver their best work.
            </p>
            <section>
              <h3>Skills</h3>
              <table class="Skills">
                <tr>
                <th>Skill</th>
                <th>Proficiency</th>
                </tr>
                <tr>
                <td>Java</td>
                <td>Beginner</td>
                </tr>
                <td>JavaScript</td>
                <td>Beginner</td>
                <tr>
                  <td>HTML</td>
                  <td>Beginner</td>
                </tr>
                <tr>
                  <td>CSS</td>
                  <td>Beginner</td>
                </tr>
              </table>
            </section>
        <Contact />
        </div>
    )
}
export default Home;