//https://www.geeksforgeeks.org/reactjs/how-to-download-pdf-file-in-reactjs//
//Researched how to download a PDF and followed GreeksforGeeks code to complete this task. 


function CVButton () {
    const handleClick = () => {
        const pdf ='Stacey2025.pdf';
        const link = document.createElement("a")
        link.href = pdf;
        link.download ="Stacey2025.pdf"
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return(
        <button className="page-button" onClick={handleClick}> <i className="fa-solid fa-download"></i>
        </button>
    )
    
}

export default CVButton