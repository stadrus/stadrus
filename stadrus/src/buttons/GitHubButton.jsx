function GitHubButton () {
    const handleClick = () => {
        window.open('https://github.com/stadrus', '_blank', 'noopener,noreferrer');
    }
    return(
        <button className="page-button" onClick={handleClick}> <i className="fa-brands fa-github"></i>
        </button>
    )
    
}

export default GitHubButton