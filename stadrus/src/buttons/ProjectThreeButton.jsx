function ProjectThreeButton () {
    const handleClick = () => {
        window.open('https://github.com/stadrus/socalsync-unit-2-final-stacey-t', '_blank', 'noopener,noreferrer');
    }
    return(
        <button className="page-button" onClick={handleClick}>GitHub</button>
    )
    
}

export default ProjectThreeButton