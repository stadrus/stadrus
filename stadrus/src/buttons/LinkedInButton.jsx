function LinkedInButton () {
    const handleClick = () => {
        window.open('https://www.linkedin.com/in/stacey-tadrus/', '_blank', 'noopener,noreferrer');
    }
    return(
        <button className="page-button" onClick={handleClick}>
            <i className="fa-brands fa-linkedin"></i>
        </button>
    )
    
}

export default LinkedInButton