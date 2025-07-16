function CVButton () {
    const handleClick = () => {
        window.open('https://www.linkedin.com/in/stacey-tadrus/', '_blank', 'noopener,noreferrer');
    }
    return(
        <button className="page-button" onClick={handleClick}> <i className="fa-solid fa-download"></i>
        </button>
    )
    
}

export default CVButton