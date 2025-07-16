import { useNavigate } from "react-router";

function ExperienceButton () {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('../Resume');
    }
    return(
        <button className="page-button" onClick={handleClick}>
            <i class="fa-solid fa-briefcase"></i> Experience
        </button>
    )
    
}

export default ExperienceButton