function GitHubButton () {
    const handleClick = () => {
        window.open('https://github.com/stadrus', '_blank', 'noopener,noreferrer');
    }
    return(
        <button className="page-button" onClick={handleClick}>
            GitHub
        </button>
    )
    
}

export default GitHubButton