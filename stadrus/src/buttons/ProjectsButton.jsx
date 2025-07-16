import { useNavigate } from "react-router";

function ProjectsButton () {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('../Projects');
    }
    return(
        <button className="page-button" onClick={handleClick}>
            <i className="fa-solid fa-bars-progress"></i> Projects
        </button>
    )
    
}

export default ProjectsButton