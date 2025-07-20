function ProjectOneButton () {
    const handleClick = () => {
        window.open('https://nbakc.org/', '_blank', 'noopener,noreferrer');
    }
    return(
        <button className="page-button" onClick={handleClick}>nbakc.org</button>
    )
    
}

export default ProjectOneButton