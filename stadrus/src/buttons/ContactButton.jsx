import { useNavigate } from "react-router";

function ContactButton () {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('../Contact');
    }
    return(
        <button className="page-button" onClick={handleClick}>
            <i className="fa-solid fa-envelope"></i>
        </button>
    )
    
}

export default ContactButton