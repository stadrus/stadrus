function ProjectOneButton () {
    const handleClick = () => {
        window.open('https://nbakc.org/', '_blank', 'noopener,noreferrer');
    }
    return(
        <button className="page-button" onClick={handleClick}>NBAKC.ORG</button>
    )
    
}

export default ProjectOneButton