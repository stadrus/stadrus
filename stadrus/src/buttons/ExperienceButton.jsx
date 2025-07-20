import { useNavigate } from "react-router";

function ExperienceButton () {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('../Resume');
    }
    return(
        <button className="page-button" onClick={handleClick}>
            <i className="fa-solid fa-briefcase"></i>
        </button>
    )
    
}

export default ExperienceButton