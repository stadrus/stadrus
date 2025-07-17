function ProjectTwoButton () {
    const handleClick = () => {
        window.open('https://github.com/stadrus/CalSync-App', '_blank', 'noopener,noreferrer');
    }
    return(
        <button className="page-button" onClick={handleClick}>GitHub</button>
    )
    
}

export default ProjectTwoButton
