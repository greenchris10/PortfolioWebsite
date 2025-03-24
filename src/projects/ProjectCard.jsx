const ProjectCard = ({title, desc, demo, source}) => {

    return (
        <div className="card">
            <h3 className="project-title">{title}</h3>
            <p>{desc}</p>

            <div className="project-buttons">
                <a href={demo}><button className="demo"> Demo</button></a>
                <a href={source}><button className="source-code"> Source Code</button></a>
            </div>
        </div>
    )
}

export default ProjectCard;