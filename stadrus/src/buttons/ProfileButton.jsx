import { useNavigate } from "react-router";

function ProfileButton () {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('../Profile');
    }
    return(
        <button className="page-button" onClick={handleClick}>
            <i className="fa-solid fa-ghost fa-fade"></i>
        </button>
    )
    
}

export default ProfileButton