function CVButton () {
    const handleClick = () => {
        window.open('https://www.linkedin.com/in/stacey-tadrus/', '_blank', 'noopener,noreferrer');
    }
    return(
        <button className="page-button" onClick={handleClick}>
            Download CV
        </button>
    )
    
}

export default CVButton